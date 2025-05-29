import { getPrefix } from '../../0_global/js/global_helpers.js'
import { tool } from './db_tools.js'
import { gColors } from 'https://cdn.jsdelivr.net/gh/nano-grid/nano-grid@5.2.2/dist/gcolors.js'

customElements.define(
  getPrefix('descubria'),
  class extends HTMLElement {
    constructor() {
      super()
    }

    #tools = [tool.css, tool.jQuery, tool.html]
      .map(t => `<li><nn-pill color="${gColors.canary.hex}">${t}</nn-pill></li>`)
      .join('')

    #template = `
      <blockquote>
        Descubria was an interactive children's park where young minds could step into the shoes of grown-ups and explore the world of work through play. In a vibrant, mini-city environment, kids took on roles like chefs, firefighters, builders, and healthcare workers—earning play money for their efforts and discovering new passions along the way. Through hands-on experiences and realistic job simulations, Descubria offered a fun and educational glimpse into adult life, inspiring curiosity, responsibility, and imagination.
      </blockquote>

      <h3>Descubria</h3>

      <ul class="flex-row">
      ${this.#tools}
      </ul>

      <nn-video url="./videos/descubria.mp4"></nn-video>

      <h3>My Role</h3>

      <ul>
        <li>Build and animated the frontend.</li>
      </ul>`

    connectedCallback() {
      this.innerHTML = this.#template
    }
  }
)
