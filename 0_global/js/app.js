import { getPrefix, createNode } from './global_helpers.js'
import { routes } from './routes.js'

customElements.define(
  getPrefix('app'),
  class extends HTMLElement {
    constructor() {
      super()
    }

    #colorTagDict = {
      wip: 'sunglow',
      'react 19': 'shamrock',
      'web-components': 'shamrock',
      'vue 2': 'shamrock',
      threejs: 'royal-purple',
      konva: 'royal-purple',
      storybook: 'shamrock',
      vitest: 'shamrock',
    }

    #template = `
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
    static data = {
      attrs: [],
      routes,
      // darkMode: true,
      tools: [
        // {
        // name: 'Toggle Theme',
        // fn: function() {
        // data.darkMode = !data.darkMode
        // const icono = this.querySelector('nn-icono')
        // const body = document.body.classList
        // icono.className = data.darkMode ? 'sun-o' : 'moon-o'
        // body.toggle('light', !data.darkMode)
        // body.toggle('dark', data.darkMode)
        // },
        // icon: 'sun-o',
        // },
      ],
    }

    #generateNavItems(items) {
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
                'aria-label': item.name,
              },
            })
          } else if (item?.url) {
            a = createNode({
              type: 'a',
              parent: li,
              attrs: {
                class: 'btn-icon',
                href: item.url,
                target: '_self',
                'aria-label': item.name,
              },
            })
          } else if (item.fn) {
            a = createNode({
              type: 'button',
              parent: li,
              attrs: {
                class: 'btn-icon',
                'aria-label': item.name,
              },
            })

            a.addEventListener('click', item.fn)
          }

          const tooltip = createNode({
            type: 'span',
            parent: a,
            text: item.name,
            attrs: {
              class: 'tooltip',
            },
          })

          const tags = createNode({
            type: 'span',
            parent: tooltip,
            attrs: {
              class: 'tags',
            },
          })

          item?.tags?.forEach(tag => {
            createNode({
              type: 'span',
              parent: tags,
              text: tag,
              attrs: {
                class: ['pill', this.#colorTagDict[tag]].join(' '),
              },
            })
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

    #insertSlot(slot) {
      const caja = this.querySelector('.workarea > nn-desplazador > main')
      caja.innerHTML = slot
    }

    connectedCallback() {
      const slot = this.innerHTML
      this.innerHTML = this.#template
      this.#generateNavItems(this.constructor.data.routes)
      this.#generateNavItems(this.constructor.data.tools)
      this.#insertSlot(slot)
      document.body.classList.add('dark')
    }
  }
)
