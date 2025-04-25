import '../../0_global/js/index.js'
import { mergesArray } from './db_merges.js'
import { getTooltip } from './utils.js'
import { getPrefix, createNode } from '../../0_global/js/global_helpers.js'
import { filters } from './component_filters.js'
import './component_users.js'

const template = `
  <nn-caja padding="4">
    ${filters}
    <div id="merged-list" class="merged-table"></div>
  </nn-caja>
`
const data = {
  attrs: [],
  language: 'all',
  mergesArray,
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
      'vn',
      'cn',
      'id',
      'en',
      'th',
    ].forEach(lang => {
      document.querySelector('.nav button.' + lang).addEventListener('click', () => {
        data.language = lang
        this.generateTable(data.language)
      })
    })
  }

  generateTable(filterBy) {
    const body = this.querySelector('#merged-list')
    body.innerHTML = ''

    data.mergesArray.forEach(merge => {
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
          server => server.key.code === filterBy || server.values.some(val => val.id === filterBy)
        )
      } else {
        localServers = merge.servers
      }

      if(localServers.length > 0) {
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
              class: [key.id, ...getTooltip(key).classes].join(' '),
            },
            innerHTML: getTooltip(key).msg ? getTooltip(key).msg : key.label,
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
                class: ['fusion', cell.id, ...getTooltip(cell).classes].join(' '),
                style: `order:${cell.numericId}`,
              },
              innerHTML: getTooltip(cell).msg ? getTooltip(cell).msg : cell.label,
            })
          })
        })
      } else {
        const tr = createNode({
          type: 'tr',
          parent: tableBody,
        })

        createNode({
          type: 'td',
          parent: tr,
          attrs: {
            colspan: 2
          },
          innerHTML: 'No Merges Found',
        })
      }

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
