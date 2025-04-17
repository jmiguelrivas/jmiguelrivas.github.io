import { getPrefix } from './helpers.js'

class Desplazador extends HTMLElement {
  constructor() {
    super()
  }
}

window.customElements.define(getPrefix('desplazador'), Desplazador)
