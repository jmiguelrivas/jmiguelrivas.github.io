import { getPrefix } from '../../0_global/js/global_helpers.js'
import { tool } from './db_tools.js'

customElements.define(
  getPrefix('apap'),
  class extends HTMLElement {
    constructor() {
      super()
    }

    #tools = [tool.sass, tool.jQuery, tool.jade, tool.grunt]
      .map(t => `<li><nn-pill color="var(--accent-color)">${t}</nn-pill></li>`)
      .join('')

    #template = `
      <blockquote>
        Capital is a multidisciplinary creative agency based in Santo Domingo, Dominican Republic. the agency brings together artists, designers, and strategists to bridge the gap between creativity and business. Their work spans advertising, marketing strategy, and SEO, serving a diverse clientele that includes brands, cities, and NGOs.
      </blockquote>

      <h3>Mineros de Apap</h3>

      <ul class="flex-row">
      ${this.#tools}
      </ul>

      <nn-video url="./videos/mineros.mp4"></nn-video>

      <h3>My Role</h3>

      <ul>
        <li>Set the environment to work with GruntJs.</li>
        <li>Designed missing elements like OG image (Facebook preview) and loading.</li>
        <li>Build and animated the frontend.</li>
      </ul>`

    connectedCallback() {
      this.innerHTML = this.#template
    }
  }
)
