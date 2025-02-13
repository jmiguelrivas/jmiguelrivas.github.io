import { getPrefix, createNode } from '../../_global/js/global.js'
import { tool } from './tools.js'

const template = `
  <mr-palumba direction="left"></mr-palumba>
  <h1>
    I'm <strong>Miguel Rivas</strong><br>
    a <em>Frontend Developer</em><br>
    <small>Living in Spokane, WA</small>.
  </h1>
  <a class="btn sunglow" href="https://github.com/jmiguelrivas/jmiguelrivas.github.io/blob/main/README.md" target="_blank">Learn more about the research behind this website</a>
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