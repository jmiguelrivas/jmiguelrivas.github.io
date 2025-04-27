import '../../0_global/js/index.js'
import {
  getPrefix,
  createNode
} from '../../0_global/js/global_helpers.js'
import {
  usersDB as users
} from './db_users.js'
import {
  createFilters,
  langs
} from './component_filters.js'

const template = /*html*/ `
<nn-caja padding="4">
  ${createFilters()}
  <h2>Users</h2>
  <table>
    <thead>
      <tr>
        <th>Server</th>
        <th>UID</th>
        <th>Nick</th>
        <th>Rank :: Position :: Date</th>
      </tr>
    </thead>
    <tbody id="table-body"></tbody>
  </table>
</nn-caja>
`

const data = {
  attrs: [],
  language: 'all',
  users,
}

class Users extends HTMLElement {
  constructor() {
    super()
  }

  generateListeners() {
    langs.forEach(lang => {
      document.querySelector('.nav button.' + lang).addEventListener('click', () => {
        data.language = lang
        document.querySelectorAll('.nav button').forEach(btn => btn.classList.remove('active'))

        this.generateTable()
      })
    })
  }

  generateTable() {
    const tableBody = this.querySelector('#table-body')
    tableBody.innerHTML = ''

    document.querySelector('.nav button.' + data.language).classList.add('active')

    let table = data.users
    if (data.language !== 'all') {
      table = data.users.filter(user => user.lang === data.language)
    }

    if (table.length) {
      table.forEach(user => {
        const tr = createNode({
          type: 'tr',
          parent: tableBody,
          attrs: {
            title: user.names[0],
          },
        })

        createNode({
          type: 'td',
          parent: tr,
          innerHTML: `<span class="pill ${user.lang}">${user.server}</span>`,
        })

        createNode({
          type: 'td',
          parent: tr,
          innerHTML: user.id,
        })

        const names = createNode({
          type: 'td',
          parent: tr,
        })

        const namesGroup = createNode({
          type: 'div',
          parent: names,
          attrs: {
            class: 'names-group',
          },
        })

        user.names.forEach(n => {
          createNode({
            type: 'span',
            parent: namesGroup,
            innerHTML: n,
            attrs: {
              class: ['pill', user.lang].join(' '),
            },
          })
        })

        const ranks = createNode({
          type: 'td',
          parent: tr,
          attrs: {
            class: 'date-rank-group',
          },
        })

        user.ranks.forEach(rank => {
          createNode({
            type: 'span',
            parent: ranks,
            innerHTML: [rank?.rank, rank?.position, rank?.date].filter(Boolean).join(' :: '),
            attrs: {
              class: ['pill', rank?.rank].join(' '),
            },
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
        text: 'No users found',
        attrs: {
          colspan: 4,
        },
      })
    }
  }

  connectedCallback() {
    this.innerHTML = template
    this.generateTable()
    this.generateListeners()
  }
}

window.customElements.define(getPrefix('users'), Users)

export {
  data
}