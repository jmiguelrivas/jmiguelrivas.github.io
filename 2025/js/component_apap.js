import { getPrefix } from '../../0_global/js/global_helpers.js'
import { tool } from './db_tools.js'

customElements.define(
  getPrefix('apap'),
  class extends HTMLElement {
    constructor() {
      super()
    }

    #data = {
      attrs: [],
    }

    #tools = [tool.sass, tool.jQuery, tool.jade]
      .map(t => `<li>${t}</li>`)
      .join('')

    #template = `
      <blockquote>
        Capital is a multidisciplinary creative agency based in Santo Domingo, Dominican Republic. the agency brings together artists, designers, and strategists to bridge the gap between creativity and business. Their work spans advertising, marketing strategy, and SEO, serving a diverse clientele that includes brands, cities, and NGOs.
      </blockquote>

      <h3>Mineros de Apap</h3>

      <ul class="pill-container">
      ${this.#tools}
      </ul>

      <nn-video url="./videos/mineros.mp4"></nn-video>

      <h3>My Role</h3>

      <ul>
        <li>Build and animate the frontend.</li>
        <li>
          Optimized and resized all the images to the minimum width &
          height.
        </li>
        <li>Designed missing elements like loading.</li>
      </ul>`

    connectedCallback() {
      this.innerHTML = this.#template
    }
  }
)
