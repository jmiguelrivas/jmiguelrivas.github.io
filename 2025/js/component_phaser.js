import { getPrefix } from '../../0_global/js/global_helpers.js'
import { tool } from './db_tools.js'
import { gColors } from 'https://cdn.jsdelivr.net/gh/nano-grid/nano-grid@5.2.2/dist/gcolors.js'

customElements.define(
  getPrefix('phaser'),
  class extends HTMLElement {
    constructor() {
      super()
    }

    #tools = [tool.phaser, tool.inkscape]
      .map(t => `<li><nn-pill color="${gColors.canary.hex}">${t}</nn-pill></li>`)
      .join('')

    #template = `
      <h3>Bird Rescuer</h3>

      <blockquote>
        This was a solo prototype focused on gameplay and visual design exploration.
      </blockquote>

      <ul class="flex-row">
      ${this.#tools}
      </ul>

      <nn-video url="./videos/phaser.mp4"></nn-video>
      <img src="./img/phaser.png" alt="game assets showcase">
      <img src="./img/goose.png" alt="goose been edited in inkscape">

      <h3>My Role</h3>

      <ul>
        <li>
          Designed and developed the complete game experience using Phaser.
        </li>

        <li>
          Created all visual assets — including tiles, characters, and UI elements — with Inkscape.
        </li>

        <li>
          Built game logic, animations, and interactions to support the core mechanic: a goose rescuing birds.
        </li>
      </ul>
    `

    connectedCallback() {
      this.innerHTML = this.#template
    }
  }
)
