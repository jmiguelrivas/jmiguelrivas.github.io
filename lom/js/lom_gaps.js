import '../../0_global/js/index.js'
import { spreadServers } from './db_merges.js'
import { getPrefix, createNode } from '../../0_global/js/global_helpers.js'
import { getCountryCode } from './utils.js'
import './component_users.js'
import { createFilters, langs } from './component_filters.js'
import { countryCodes } from './enum_country-codes.js'

const template = `
  <nn-caja padding="4">
    ${createFilters(['tr', 'espt', 'mush'])}
    <div id="all-servers"></div>
  </nn-caja>
`
const data = {
  attrs: [],
  language: 'all',
  spreadServers,
}

function generateRange(id, start, end) {
  const range = Array.from({ length: end - start + 1 }, (_, i) => i + start).map(server => {
    const number = `${server}`.replace(countryCodes[id], '')

    return [id, number].join('_')
  })
  return range
}

class Gaps extends HTMLElement {
  constructor() {
    super()
  }

  generateListeners() {
    langs.forEach(lang => {
      document.querySelector('.nav button.' + lang).addEventListener('click', () => {
        data.language = lang
        document.querySelectorAll('.nav button').forEach(btn => btn.classList.remove('active'))
        this.generateGapsList()
      })
    })
  }

  generateGapsList() {
    const container = this.querySelector('#all-servers')
    container.innerHTML = ''

    document.querySelector('.nav button.' + data.language).classList.add('active')

    const servers = [
      {
        title: 'CN (1)',
        filter: 'cn',
        servers: generateRange('CN', 1001, 1999),
      },
      {
        title: 'AMEN (1)',
        filter: 'amen',
        servers: generateRange('AMEN', 1001, 1999),
      },
      {
        title: 'VN (4)',
        filter: 'vn',
        servers: generateRange('VN', 4001, 4999),
      },
      {
        title: 'ES (6)',
        filter: 'es',
        servers: generateRange('ES', 6001, 6999),
      },
      {
        title: 'ID (7)',
        filter: 'id',
        servers: generateRange('ID', 7001, 7999),
      },
      {
        title: 'EN (10)',
        filter: 'en',
        servers: generateRange('EN', 7001, 7999),
      },
      {
        title: 'PT/ESPT (11)',
        filter: 'pt',
        servers: generateRange('PT', 11001, 11999),
      },
      {
        title: 'TH (13)',
        filter: 'th',
        servers: generateRange('TH', 13001, 13999),
      },
      {
        title: 'EUEN/MUSH (30)',
        filter: 'euen',
        servers: generateRange('EUEN', 30001, 30999),
      },
      {
        title: 'DE (33)',
        filter: 'de',
        servers: generateRange('DE', 33001, 33999),
      },
      {
        title: 'FR (36)',
        filter: 'fr',
        servers: generateRange('FR', 36001, 36999),
      },
      {
        title: 'ME/TR (39)',
        filter: 'me',
        servers: generateRange('ME', 39001, 39999),
      },
      {
        title: 'RU (42)',
        filter: 'ru',
        servers: generateRange('RU', 42001, 42999),
      },
    ].filter(item => {
      if (data.language === 'all') return true
      return data.language === item.filter
    })

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
          class: 'table-pill-container',
        },
      })

      serv.servers.forEach(server => {
        const isMissing = !data.spreadServers.includes(server)
        // console.log(server)

        createNode({
          type: 'li',
          parent: ul,
          attrs: {
            class: [isMissing ? 'missing' : '', getCountryCode(server).id].join(' '),
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
    this.generateListeners()
  }
}

window.customElements.define(getPrefix('gaps'), Gaps)

export { data }
