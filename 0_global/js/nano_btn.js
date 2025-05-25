import { getPrefix } from './nano_helpers.js'

customElements.define(
  getPrefix('btn'),
  class extends HTMLElement {
    static attrs = ['color', 'link']

    static get observedAttributes() {
      return this.attrs
    }

    #shadow

    constructor() {
      super()
      this.#shadow = this.attachShadow({ mode: 'open' })
      const link = document.createElement('link')
      link.setAttribute('rel', 'stylesheet')
      link.setAttribute('href', '/0_global/css/nano_btn.css')
      this.#shadow.appendChild(link)
    }

    connectedCallback() {
      this.#render()
    }

    attributeChangedCallback(name) {
      if (this.constructor.attrs.includes(name)) {
        this.#render()
      }
    }

    #render() {
      const color = this.getAttribute('color')
      const isLink = this.hasAttribute('link')

      // Remove existing content except <style>
      const children = Array.from(this.#shadow.children).filter(
        c => c.tagName !== 'LINK'
      )
      children.forEach(child => {
        this.#shadow.removeChild(child)
      })

      const el = document.createElement(isLink ? 'a' : 'button')
      el.appendChild(document.createElement('slot'))

      // Set specific attributes
      if (!isLink) {
        el.type = 'button'
      }

      // Set color
      if (color) {
        this.style.setProperty('--color', color)
      }

      const doNotForward = [...this.constructor.attrs, 'class', 'style', 'id']
      const attrs = [...this.attributes].filter(
        attr => !doNotForward.includes(attr.name)
      )

      attrs.forEach(attr => {
        el.setAttribute(attr.name, attr.value)
      })

      this.#shadow.appendChild(el)
    }
  }
)
