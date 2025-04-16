import {
  getPrefix,
  createNode
} from './global.js'
import {
  routes
} from './routes.js'

const template = /*html*/ `
<nn-fila>
  <nn-pilar size="50px" class="navigation">
    <nav></nav>
  </nn-pilar>
  <nn-pilar size="100% - 50px" class="workarea">
    <nn-desplazador>
      <main></main>
    </nn-desplazador>
  </nn-pilar>
</nn-fila>
`
const data = {
  attrs: [],
  routes,
  darkMode: true,
  tools: [{
    name: 'Toggle Theme',
    fn: function() {
      data.darkMode = !data.darkMode
      const icono = this.querySelector('nn-icono')
      const body = document.body.classList

      icono.className = data.darkMode ? 'sun-o' : 'moon-o'
      body.toggle('light', !data.darkMode)
      body.toggle('dark', data.darkMode)
    },
    icon: 'sun-o',
  }, ],
}

class App extends HTMLElement {
  constructor() {
    super()
  }

  generateNavItems(items) {
    const nav = this.querySelector('nav')
    const ul = createNode({
      type: 'ul',
      parent: nav,
    })
    const currentRoute = this.getAttribute('route')

    items.forEach(item => {
      const li = createNode({
        type: 'li',
        parent: ul,
      })

      if (item?.separator) {
        createNode({
          type: 'hr',
          parent: li,
        })
      } else {
        let a
        if (item?.name === currentRoute) {
          a = createNode({
            type: 'div',
            parent: li,
            attrs: {
              class: 'btn-icon active',
              title: item.name,
            },
          })
        } else if (item?.url) {
          a = createNode({
            type: 'a',
            parent: li,
            attrs: {
              class: 'btn-icon',
              href: item.url,
              title: item.name,
              target: '_self',
            },
          })
        } else if (item.fn) {
          a = createNode({
            type: 'button',
            parent: li,
            attrs: {
              class: 'btn-icon',
              title: item.name,
            },
          })

          a.addEventListener('click', item.fn)
        }

        createNode({
          type: 'span',
          parent: a,
          text: item.name,
          attrs: {
            class: 'tooltip',
          },
        })

        createNode({
          type: 'nn-icono',
          parent: a,
          attrs: {
            class: item.icon,
          },
        })
      }
    })
  }

  insertSlot(slot) {
    const caja = this.querySelector('.workarea > nn-desplazador > main')
    caja.innerHTML = slot
  }

  connectedCallback() {
    const slot = this.innerHTML
    this.innerHTML = template
    this.generateNavItems(data.routes)
    this.generateNavItems(data.tools)
    this.insertSlot(slot)
    document.body.classList.add('dark')
  }
}

window.customElements.define(getPrefix('app'), App)

export {
  data
}