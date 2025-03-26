import '../../_global/js/index.js'
import { merges } from './db-merges.js'
import { getCountryCode, getTooltip } from './utils.js'
import { getPrefix, createNode } from '../../_global/js/global.js'
import { filters } from './comp-filters.js'
import './users.js'

const template = `
  <nn-caja padding="4">
    ${filters}
    <div id="merged-list" class="merged-table"></div>
  </nn-caja>
`
const data = {
  attrs: [],
  language: 'all',
  statusFilter: undefined,
  allMerges: Object.entries(merges)
    .map(([key, values]) => {
      const servers = Object.entries(values).map(([mergeKey, mergeValues]) => {
        return {
          key: getCountryCode(mergeKey),
          values: mergeValues.map(val => getCountryCode(val)),
        }
      })

      return {
        date: key,
        servers,
      }
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date)),
}

class Simple extends HTMLElement {
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

    document.getElementById('master').addEventListener('click', () => {
      data.language = 'all'
      data.statusFilter = 'master'
      this.generateTable(data.language, data.statusFilter)
    })

    document.getElementById('elite').addEventListener('click', () => {
      data.language = 'all'
      data.statusFilter = 'elite'
      this.generateTable(data.language, data.statusFilter)
    })

    document.getElementById('top').addEventListener('click', () => {
      data.language = 'all'
      data.statusFilter = 'top'
      this.generateTable(data.language, data.statusFilter)
    })
  }

  generateTable(filterBy) {
    const body = this.querySelector('#merged-list')
    body.innerHTML = ''

    data.allMerges.forEach(merge => {
      createNode({
        type: 'h2',
        parent: body,
        innerHTML: `${merge.date}`,
      })

      const table = createNode({
        type: 'table',
        parent: body,
        innerHTML: `
          <thead>
            <tr>
              <th>NEW</th>
              <th>MERGED</th>
            </tr>
          </thead>
          <tbody id="table-body"></tbody>
		    `,
      })

      const tableBody = table.querySelector('#table-body')

      let localServers

      if (filterBy !== 'all') {
        localServers = merge.servers.filter(
          server =>
            server.key.code === filterBy ||
            server.values.some(val => val.code === filterBy)
        )
      } else if (data.statusFilter) {
        localServers = merge.servers.filter(
          server =>
            server.key.users.some(user =>
              user?.group?.includes(data.statusFilter)
            ) ||
            server.values.some(server =>
              server.users.some(user =>
                user?.group?.includes(data.statusFilter)
              )
            )
        )
      } else {
        localServers = merge.servers
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
          createNode({
            type: 'span',
            parent: groupCell,
            attrs: {
              class: ['fusion', cell.code, ...getTooltip(cell).classes].join(
                ' '
              ),
              style: `order:${cell.numVal}`,
            },
            innerHTML: getTooltip(cell).msg ? getTooltip(cell).msg : cell.val,
          })
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

window.customElements.define(getPrefix('simple'), Simple)

export { data }
