import { getPrefix } from './helpers.js'

const template = `
  <nn-icono class="star"></nn-icono>
  <span class="content"></span>
`

const data = {
  content: ''
}

class Ayuda extends HTMLElement {
  constructor() {
    super()
  }

  updateTooltip() {
    data.content = this.innerHTML
    this.innerHTML = template
    const content = this.querySelector('.content')
    content.innerHTML = data.content
  }

  connectedCallback() {
    this.updateTooltip()
  }
}

window.customElements.define(getPrefix('ayuda'), Ayuda)
