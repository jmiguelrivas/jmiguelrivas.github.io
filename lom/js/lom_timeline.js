import '../../0_global/js/index.js'
import { merges } from './db_merges.js'
import { getCountryCode, getTooltip } from './utils.js'
import { getPrefix, createNode } from '../../0_global/js/global_helpers.js'
import { filters } from './component_filters.js'
import './component_users.js'

const template = `
  <nn-caja padding="4">
		${filters}

		<h2>Merged Servers</h2>

    <table class="merged-table">
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
function removeDuplicates(matrix) {
  return [...new Set(matrix)]
}

function flatObjects(matrix) {
  const result = {}
  matrix.forEach(s => {
    Object.entries(s).forEach(([k, v]) => {
      if (result?.[k]) {
        result[k].push(...v)
        result[k] = removeDuplicates(result[k])
      } else {
        result[k] = v
      }
    })
  })
  return result
}

const data = {
  attrs: [],
  language: 'all',
  statusFilter: undefined,
  servers: flatObjects(Object.values(merges)),
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
        data.statusFilter = undefined
        this.generateTable(data.language, data.statusFilter)
      })
    })

    // document.getElementById('honor').addEventListener('click', () => {
    //   data.language = 'all'
    //   data.statusFilter = 'honor'
    //   this.generateTable(data.language, data.statusFilter)
    // })

    // document.getElementById('master').addEventListener('click', () => {
    //   data.language = 'all'
    //   data.statusFilter = 'master'
    //   this.generateTable(data.language, data.statusFilter)
    // })

    // document.getElementById('elite').addEventListener('click', () => {
    //   data.language = 'all'
    //   data.statusFilter = 'elite'
    //   this.generateTable(data.language, data.statusFilter)
    // })

    // document.getElementById('top').addEventListener('click', () => {
    //   data.language = 'all'
    //   data.statusFilter = 'top'
    //   this.generateTable(data.language, data.statusFilter)
    // })
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
    } else if (data.statusFilter) {
      localServers = uniqueServers.filter(
        server =>
          server.key.users.some(user =>
            user?.group?.includes(data.statusFilter)
          ) ||
          server.values.some(server =>
            server.users.some(user => user?.group?.includes(data.statusFilter))
          )
      )
    } else {
      localServers = uniqueServers
    }

    localServers.forEach(serv => {
      const key = { ...serv.key }
      const group = serv.values

      // key['users'] = [...key['users'], ...group.map(s => s.users)].flat()

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
        innerHTML: getTooltip(key).msg
          ? getTooltip(key, group.length + 1).msg
          : [key.val, `(${group.length + 1})`].join(' '),
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
