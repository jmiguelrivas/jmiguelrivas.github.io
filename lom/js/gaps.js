import '../../_global/js/index.js'
import { merges } from './db-merges.js'
import { getPrefix, createNode } from '../../_global/js/global.js'
import { getCountryCode } from './utils.js'
import './users.js'

const template = `
  <nn-caja padding="4">
    <div id="all-servers"></div>
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
  spreadServers: [],
}

data.spreadServers = removeDuplicates(
  Object.entries(data.servers)
    .map(([key, values]) => {
      return [+key, ...values]
    })
    .flat()
).sort((a, b) => a - b)

class Gaps extends HTMLElement {
  constructor() {
    super()
  }

  generateGapsList() {
    const container = this.querySelector('#all-servers')
    container.innerHTML = ''

    const servers = [
      {
        title: 'AMEN (1)',
        servers: Array.from({ length: 1999 - 1001 + 1 }, (_, i) => i + 1001),
      },
      {
        title: 'ES (6)',
        servers: Array.from({ length: 6999 - 6001 + 1 }, (_, i) => i + 6001),
      },
      {
        title: 'PT/ESPT (11)',
        servers: Array.from({ length: 11999 - 11001 + 1 }, (_, i) => i + 11001),
      },
      {
        title: 'EUEN/MUSH (30)',
        servers: Array.from({ length: 30999 - 30001 + 1 }, (_, i) => i + 30001),
      },
      {
        title: 'DE (33)',
        servers: Array.from({ length: 33999 - 33001 + 1 }, (_, i) => i + 33001),
      },
      {
        title: 'FR (36)',
        servers: Array.from({ length: 36999 - 36001 + 1 }, (_, i) => i + 36001),
      },
      {
        title: 'ME/TR (39)',
        servers: Array.from({ length: 39999 - 39001 + 1 }, (_, i) => i + 39001),
      },
      {
        title: 'RU (42)',
        servers: Array.from({ length: 42999 - 42001 + 1 }, (_, i) => i + 42001),
      },
    ]

    servers.forEach(serv => {
      createNode({
        type: 'h2',
        parent: container,
        innerHTML: serv.title,
      })

      const ul = createNode({
        type: 'ul',
        parent: container,
        attrs: {
          class: 'pill-container',
        },
      })

      serv.servers.forEach(server => {
        const isMissing = !data.spreadServers.includes(server)
        createNode({
          type: 'li',
          parent: ul,
          attrs: {
            class: [
              isMissing ? 'missing' : '',
              getCountryCode(server).code,
            ].join(' '),
            title: isMissing ? 'not merge / missing' : '',
          },
          innerHTML: server,
        })
      })
    })
  }

  connectedCallback() {
    this.innerHTML = template
    this.generateGapsList()
  }
}

window.customElements.define(getPrefix('gaps'), Gaps)

export { data }
