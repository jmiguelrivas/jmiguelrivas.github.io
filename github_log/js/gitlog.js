import '../../0_global/js/index.js'
import {
  getPrefix
} from '../../0_global/js/global_helpers.js'
import commitsDB from './db_commits.js'

class Log extends HTMLElement {
  static commits = commitsDB.map(commit => {
    const msg = commit.msg.map(p => `<li>${p}</li>`).join(' ')

    return /*html*/ `
<li>
  <h2>
    <strong>${commit.author}</strong> :: <em>${commit.id}</em> :: <time datetime="${commit.dateIso}">${commit.dateLocal}</time>
  </h2>
  <ul class="msg">
    ${msg}
  </ul>
</li>
`
  }).join(' ')

  static template = /*html*/ `
<nn-caja padding="4">
  <h1>Github Log</h1>
  <ul class="main-list">
    ${Log.commits}
  </ul>
</nn-caja>
`

  static data = {
    attrs: [],
  }

  constructor() {
    super()
  }

  generateTemplate() {
    this.innerHTML = Log.template
  }

  connectedCallback() {
    this.generateTemplate()
  }
}

window.customElements.define(getPrefix('log'), Log)

export {
  Log
}