import { getPrefix } from './nano_helpers.js'

customElements.define(
  getPrefix('caja'),
  class extends HTMLElement {
    constructor() {
      super()
    }

    #data = {
      attrs: [
        {
          name: 'padding',
        },
        {
          name: 'max-width',
        },
      ],
    }

    #updateAttrs() {
      const values = this.#data.attrs
        .map(attr => {
          const value = this.getAttribute(attr.name)
          return value ? `--${attr.name}: ${value}` : null
        })
        .filter(Boolean)
        .join(';')

      this.style = values
    }

    connectedCallback() {
      this.#updateAttrs()
    }

    observedAttributes() {
      return this.#data.attrs.map(attr => attr.name)
    }

    attributeChangedCallback(prop) {
      const attr = this.#data.attrs.find(attr => attr.name === prop)?.[0]
      attr && this.#updateAttrs()
    }
  }
)
