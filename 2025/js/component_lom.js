import { getPrefix } from '../../0_global/js/global_helpers.js'
import { tool } from './db_tools.js'

customElements.define(
  getPrefix('lom'),
  class extends HTMLElement {
    constructor() {
      super()
    }

    #data = {
      attrs: [],
    }

    #tools = [tool.css, tool.webComponents, tool.three]
      .map(t => `<li>${t}</li>`)
      .join('')

    #template = `
      <h3>Legend of Mushroom :: Charts and Tools</h3>

      <ul class="pill-container">
      ${this.#tools}
      </ul>

      <nn-video url="./videos/lom.mp4"></nn-video>

      <h3>My Role</h3>

      <ul>
        <li>Build frontend.</li>
        <li>
          Developed a script for characters extractions from leaderboards (OCR).
        </li>
        <li>
          Developed a tool for converting spreadsheet data into a valid javascript format.
        </li>
        <li>
          Gather and organized all the data from the list of merges and the leaderboards so it can be visualized in different ways.
        </li>
      </ul>`

    connectedCallback() {
      this.innerHTML = this.#template
    }
  }
)
