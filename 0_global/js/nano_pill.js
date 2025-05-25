import { getPrefix } from './nano_helpers.js'

customElements.define(
  getPrefix('pill'),
  class extends HTMLElement {
    static attrs = ['color', 'text-color']

    static get observedAttributes() {
      return this.attrs
    }

    constructor() {
      super()
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
      const tcolor = this.getAttribute('text-color')

      if (color !== null) {
        this.style.setProperty(`--color`, color)
      }
      if (tcolor !== null) {
        this.style.setProperty(`--text-color`, tcolor)
      }
    }
  }
)
