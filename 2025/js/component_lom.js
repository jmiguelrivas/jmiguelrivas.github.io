import { getPrefix } from '../../0_global/js/global_helpers.js'
import { tool } from './db_tools.js'
import gColors from 'https://cdn.jsdelivr.net/gh/nano-grid/nano-grid@pombo_poderoso/dist/gcolors.js'

customElements.define(
  getPrefix('lom'),
  class extends HTMLElement {
    constructor() {
      super()
    }

    #tools = [
      tool.css,
      tool.webComponents,
      tool.three,
      tool.vitest,
      tool.inkscape,
    ]
      .map(t => `<li><nn-pill color="${gColors.canary.hex}">${t}</nn-pill></li>`)
      .join('')

    #template = `
      <h3>Legend of Mushroom :: Charts and Tools</h3>

      <ul class="flex-row">
      ${this.#tools}
      </ul>

      <nn-video url="./videos/lom.mp4"></nn-video>
      <img src="./img/lom.png" alt="lom ui been edited on inkscape">

      <h3>My Role</h3>

      <ul>
        <li>
          Designed the full user experience, including layout, flow, and
          visuals using Inkscape and custom animations.
        </li>
        <li>
          Built the frontend from scratch using Web Components to
          encapsulate and reuse custom elements.
        </li>
        <li>
          Created an interactive 3D graph to visualize leaderboard and
          server merge data dynamically.
        </li>
        <li>
          Developed an OCR tool to automatically extract character data
          from leaderboard images.
        </li>
        <li>
          Implemented a data transformation pipeline to convert
          spreadsheet exports into a structured JavaScript format.
        </li>
        <li>
          Collected, cleaned, and organized raw leaderboard and merge data
          to support multiple views and analysis modes.
        </li>
        <li>
          Wrote unit tests with Vitest to ensure reliability of data
          processing tools and components.
        </li>
      </ul>
    `

    connectedCallback() {
      this.innerHTML = this.#template
    }
  }
)
