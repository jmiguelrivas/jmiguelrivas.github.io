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

class Users extends HTMLElement {
  static template = /*html*/ `
<nn-caja padding="4">
  ${createFilters(['tr', 'espt', 'mush'])}
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

  static data = {
    attrs: [],
    language: 'all',
    langs,
    users,
  }

  constructor() {
    super()
  }

  generateListeners() {
    Users.data.langs.forEach(lang => {
      document.querySelector('.nav button.' + lang).addEventListener('click', () => {
        Users.data.language = lang
        document.querySelectorAll('.nav button').forEach(btn => btn.classList.remove('active'))
        this.generateTable()
      })
    })
  }

  generateTable() {
    const tableBody = this.querySelector('#table-body')
    tableBody.innerHTML = ''

    document.querySelector('.nav button.' + Users.data.language)?.classList.add('active')

    let table = Users.data.users
    if (Users.data.language !== 'all') {
      table = Users.data.users.filter(user => user.lang === Users.data.language)
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
    this.innerHTML = Users.template
    this.generateTable()
    this.generateListeners()
  }
}

window.customElements.define(getPrefix('users'), Users)

export {
  Users
}