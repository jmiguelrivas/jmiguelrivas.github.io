import { getPrefix, createNode } from '../../_global/js/global.js'
import { tool } from './tools.js'

const template = `
  <h2>Skills</h2>
  <ul class="pill-container"></ul>
`
const data = {
  attrs: [],
  skills: [
    tool.html,
    tool.css,
    tool.javascript,
    tool.vue,
    tool.vitest,
    tool.webComponents,
    tool.storybook,
    tool.git,
    // tool.pug,
    // tool.slim,
    // tool.haml,
    // separator,
    // separator,
    // tool.vuex,
    // tool.vueRouter,
    // tool.svelte,
    // tool.react,
    // tool.redux,
    // tool.angular,
    // tool.jQuery,
    // separator,
    // separator,
    // separator,
    // tool.firebase,
    // separator,
    // tool.rails,
    // separator,
    // tool.grunt,
    // tool.gulp,
    // tool.webpack,
    // separator,
    // tool.bootstrap,
    // separator,
    // tool.figma,
    // tool.photoshop,
    // tool.gimp,
    // tool.illustrator,
    // tool.inkscape,
    // tool.indesign,
    // tool.scribus,
    // tool.flash,
    // tool.blender,
  ],
}

class Skills extends HTMLElement {
  constructor() {
    super()
  }

  generateSkills() {
    const skills = this.querySelector('ul')

    data.skills.forEach(skill => {
      createNode({
        type: 'li',
        parent: skills,
        text: skill,
      })
    })
  }

  connectedCallback() {
    this.innerHTML = template
    this.generateSkills()
  }
}

window.customElements.define(getPrefix('skills'), Skills)

export { data }
