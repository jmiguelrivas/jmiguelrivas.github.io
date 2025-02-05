import { getPrefix, createNode } from '../../_global/js/global.js'
import { tool } from './tools.js'

const template = `
  <mr-palumba direction="left"></mr-palumba>
  <h1>
    Hello!<br>
    I'm <strong>Miguel Rivas</strong><br>
    a <em>Frontend Developer</em>
  </h1>
`
const data = {
  attrs: [],
}

class Header extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = template
  }
}

window.customElements.define(getPrefix('header'), Header)

export { data }