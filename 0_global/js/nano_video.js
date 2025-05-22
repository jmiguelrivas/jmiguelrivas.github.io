import { getPrefix } from './nano_helpers.js'

window.customElements.define(
  getPrefix('video'),
  class extends HTMLElement {
    constructor() {
      super()
    }

    #template = `
  <video controls width="1920">
    <source />
  </video>
  `

    connectedCallback() {
      this.innerHTML = this.#template
      const video = this.querySelector('source')

      const format = this.getAttribute('format') || 'video/mp4'
      video.setAttribute('type', format)

      const url = this.getAttribute('url')
      video.setAttribute('src', url)
    }
  }
)
