import '../../0_global/js/index.js'
import { servers } from './db_merges.js'
import { getTooltip } from './utils.js'
import { getPrefix, createNode } from '../../0_global/js/global_helpers.js'
import { createFilters, langs } from './component_filters.js'
import './component_users.js'

const template = `
  <nn-caja padding="4">
		${createFilters()}

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

const data = {
  attrs: [],
  language: 'all',
  servers,
}

class Timeline extends HTMLElement {
  constructor() {
    super()
  }

  generateListeners() {
    langs.forEach(lang => {
      document.querySelector('.nav button.' + lang).addEventListener('click', () => {
        data.language = lang
        document.querySelectorAll('.nav button').forEach(btn => btn.classList.remove('active'))

        this.generateTable(data.language)
      })
    })
  }

  generateTable(filterBy) {
    const tableBody = this.querySelector('#merged-list')
    tableBody.innerHTML = ''

    document.querySelector('.nav button.' + data.language).classList.add('active')

    let localServers

    if (filterBy !== 'all') {
      localServers = data.servers.filter(
        server => server.key.id === filterBy || server.values.some(val => val.id === filterBy)
      )
    } else {
      localServers = data.servers
    }

    localServers.forEach(serv => {
      const key = { ...serv.key }
      const group = serv.values

      const tr = createNode({
        type: 'tr',
        parent: tableBody,
      })

      createNode({
        type: 'td',
        parent: tr,
        attrs: {
          class: [key.id, ...getTooltip(key).classes].join(' '),
        },
        innerHTML: getTooltip(key).msg
          ? getTooltip(key, group.length + 1).msg
          : [key.label, `(${group.length + 1})`].join(' '),
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
            class: ['fusion', cell.id, ...getTooltip(cell).classes].join(' '),
            style: `order:${cell.numericId}`,
          },
          innerHTML: getTooltip(cell).msg ? getTooltip(cell).msg : cell.label,
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

window.customElements.define(getPrefix('timeline'), Timeline)

export { data }
