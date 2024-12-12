import '../../_global/js/index.js'
import {
  M20241125,
  M20241111_2,
  M20241111,
  M20240930,
  M20240902,
  M20240819,
  M20240805,
  M20240722,
  M20240708,
  M20241216,
  rangesObj,
} from './db.js'
import { getCountryCode, getTooltip } from './utils.js'
import { getPrefix, createNode } from '../../_global/js/global.js'
import "./users.js"

const template = `
  <nn-caja padding="4">
		<div class="nav">
			<div class="controllers">
				<button id="all">ALL</button>
				<button id="amen">AMEN</button>
				<button id="es">ES</button>
				<button id="espt">ESPT</button>
				<button id="pt">PT</button>
				<button id="euen">EUEN</button>
				<button id="mush">MUSH</button>
				<button id="de">DE</button>
				<button id="fr">FR</button>
				<button id="me">ME</button>
				<button id="tr">TR</button>
				<button id="ru">RU</button>
				<button id="top">TOP</button>
			</div>
		</div>

		<h2>Merged Servers</h2>

    <table>
			<thead>
				<tr>
					<th>NEW</th>
					<th>MERGED</th>
				</tr>
			</thead>
			<tbody id="merged-list"></tbody>
		</table>
  </nn-caja>
`
const data = {
  attrs: [],
  language: 'all',
  justTops: false,
  servers: {
    ...M20240708,
    ...M20240722,
    ...M20240805,
    ...M20240819,
    ...M20240902,
    ...M20240930,
    ...M20241111,
    ...M20241111_2,
    ...M20241125,
    ...M20241216,
    ...rangesObj,
  },
}

const serversKeys = Object.keys(data.servers).map(i => +i)
const fusedServers = Object.values(data.servers)
  .flat()
  .map(i => +i)

const allServers = Object.entries(data.servers)
  .map(([key, values]) => {
    const fusion = values
      .map(value => {
        return [value, serversKeys.includes(+value) && data.servers[value]]
      })
      .flat(2)
      .filter(e => e)
      .sort((a, b) => a - b)

    return {
      key,
      values: fusion,
    }
  })
  .sort((a, b) => a.key.numVal - b.key.numVal)

const uniqueServers = allServers
  .filter(server => {
    const currentServer = server.key
    const belongsToFusion = fusedServers.includes(+currentServer)
    return !belongsToFusion
  })
  .map(item => ({
    key: getCountryCode(item.key),
    values: item.values.map(value => getCountryCode(value)),
  }))

class Expanded extends HTMLElement {
  constructor() {
    super()
  }

  generateListeners() {
    ;[
      'all',
      'amen',
      'es',
      'pt',
      'espt',
      'euen',
      'mush',
      'de',
      'fr',
      'me',
      'tr',
      'ru',
    ].forEach(lang => {
      document.getElementById(lang).addEventListener('click', () => {
        data.language = lang
        data.justTops = false
        this.generateTable(data.language, data.justTops)
      })
    })

    document.getElementById('top').addEventListener('click', () => {
      data.language = "all"
      data.justTops = true
      this.generateTable(data.language, data.justTops)
    })
  }

  generateTable(filterBy) {
    const tableBody = this.querySelector('#merged-list')
    tableBody.innerHTML = ''

    let localServers

    if (filterBy !== 'all') {
      localServers = uniqueServers.filter(
        server =>
          server.key.code === filterBy ||
          server.values.some(val => val.code === filterBy)
      )
    } else if (data.justTops) {
      localServers = uniqueServers.filter(
        server =>
          server.key.users.some(user => user?.group?.includes('top')) ||
          server.values.some(server => server.users.some(user => user?.group?.includes('top')))
      )
    } else {
      localServers = uniqueServers
    }

    localServers.forEach(serv => {
      const key = serv.key
      const group = serv.values

      const tr = createNode({
        type: 'tr',
        parent: tableBody,
      })

      createNode({
        type: 'td',
        parent: tr,
        attrs: {
          class: [key.code, ...getTooltip(key).classes].join(' '),
        },
        innerHTML: getTooltip(key).msg ? getTooltip(key).msg : key.val,
      })

      const tdGroup = createNode({
        type: 'td',
        parent: tr,
        attrs: { class: 'merged' },
      })

      const groupCell = createNode({
        type: 'div',
        parent: tdGroup,
      })

      group.forEach(cell => {
        const span = createNode({
          type: 'span',
          parent: groupCell,
          attrs: {
            class: ['fusion', cell.code, ...getTooltip(cell).classes].join(' '),
            style: `order:${cell.numVal}`,
          },
          innerHTML: getTooltip(cell).msg ? getTooltip(cell).msg : cell.val,
        })
      })
    })
  }

  connectedCallback() {
    this.innerHTML = template
    this.generateTable('all')
    this.generateListeners()
  }
}

window.customElements.define(getPrefix('expanded'), Expanded)

export { data }
