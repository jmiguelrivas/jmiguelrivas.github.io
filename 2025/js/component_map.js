import { getPrefix } from '../../0_global/js/global_helpers.js'
import { tool } from './db_tools.js'
import { gColors } from 'https://cdn.jsdelivr.net/gh/nano-grid/nano-grid@5.2.2/dist/gcolors.js'

customElements.define(
  getPrefix('map'),
  class extends HTMLElement {
    constructor() {
      super()
    }

    #tools = [tool.konva, tool.blender, tool.inkscape, tool.vue2]
      .map(t => `<li><nn-pill color="${gColors.canary.hex}">${t}</nn-pill></li>`)
      .join('')

    #template = `
      <h3>3D Map</h3>

      <blockquote>
        This prototype blends 3D design with 2D performance techniques to create a lightweight, immersive experience showcasing all the places where I’ve worked and studied, as detailed in my résumé.
      </blockquote>

      <ul class="flex-row">
      ${this.#tools}
      </ul>

      <nn-video url="./videos/map.mp4"></nn-video>
      <img src="./img/map_assets.png" alt="3d assets showcase">
      <img src="./img/mother-nature.png" alt="mother nature been edited in inkscape">

      <h3>My Role</h3>

     <ul>
      <li>
        Designed a stylized 3D world map in Blender, showcasing cities where I’ve worked.
      </li>
      <li>
        Illustrated supporting characters and icons in Inkscape.
      </li>
      <li>
        Built an interactive prototype using Konva.js, rendering 3D assets in a 2D canvas environment for performance and compatibility.
      </li>
      <li>
        Focused on efficient rendering, interactive hotspots, and a smooth user experience in resource-constrained browsers.
      </li>
    </ul>
    `

    connectedCallback() {
      this.innerHTML = this.#template
    }
  }
)
