import { getPrefix } from './helpers.js'

class Icono extends HTMLElement {
  constructor() {
    super()
  }
}

window.customElements.define(getPrefix('icono'), Icono)
