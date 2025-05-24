import { getPrefix } from './nano_helpers.js'

customElements.define(
  getPrefix('pilar'),
  class extends HTMLElement {
    constructor() {
      super()
    }

    #data = {
      attrs: [
        {
          name: 'size',
        },
      ],
    }

    #updateSize() {
      const attr = this.getAttribute('size')
      if (attr) {
        const isCalc = /[-+*]/g.test(attr)
        this.style = isCalc ? `--size: calc(${attr})` : `--size: ${attr}`
      }
    }

    connectedCallback() {
      this.#updateSize()
    }

    observedAttributes() {
      return this.#data.attrs.map(attr => attr.name)
    }

    attributeChangedCallback(prop) {
      switch (prop) {
        case 'size':
          this.#updateSize()
          break
      }
    }
  }
)
