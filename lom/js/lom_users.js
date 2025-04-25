import '../../0_global/js/index.js'
import {
  getPrefix,
  createNode
} from '../../0_global/js/global_helpers.js'
import {
  usersDB as users
} from './db_users.js'

const template = /*html*/ `
<nn-caja padding="4">
  <h2>Users</h2>

  <table>
    <thead>
      <tr>
        <th>Rank :: Date</th>
        <th>UID</th>
        <th>Nick</th>
        <th>Server</th>
      </tr>
    </thead>
    <tbody id="table-body"></tbody>
  </table>
</nn-caja>
`

const data = {
  attrs: [],
  users,
}

class Users extends HTMLElement {
  constructor() {
    super()
  }

  generateTable() {
    const tableBody = this.querySelector('#table-body')
    tableBody.innerHTML = ''

    data.users.forEach(user => {
      const tr = createNode({
        type: 'tr',
        parent: tableBody,
        attrs: {
          title: user.names[0],
        },
      })

      const ranks = createNode({
        type: 'td',
        parent: tr,
        attrs: {
          class: 'date-rank-group',
        },
      })

      createNode({
        type: 'span',
        parent: ranks,
        innerHTML: user.rank?.[0],
        attrs: {
          class: ['pill', user.rank?.[0]].join(' '),
        },
      })

      if (user.rank?.[1]) {
        createNode({
          type: 'time',
          parent: ranks,
          innerHTML: user.rank?.[1],
        })
      }

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

      createNode({
        type: 'td',
        parent: tr,
        innerHTML: `<span class="pill ${user.lang}">${user.server}</span>`,
      })
    })
  }

  connectedCallback() {
    this.innerHTML = template
    this.generateTable()
  }
}

window.customElements.define(getPrefix('users'), Users)

export {
  data
}