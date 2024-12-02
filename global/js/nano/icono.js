import { nano } from './helpers.js'

class Icono extends HTMLElement {
  constructor() {
    super()
  }
}

window.customElements.define(`${nano}icono`, Icono)
