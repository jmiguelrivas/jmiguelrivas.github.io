import { getPrefix, createNode } from '../../_global/js/global.js'

const template = `
  <ul></ul>
`
const data = {
  attrs: [],
  skills: [
    'html',
    'css',
    'sass',
    'javascript',
    'web-components',
    'vue',
    'vitest',
    'storybook',
    'git',
  ],
}

class Skills extends HTMLElement {
  constructor() {
    super()
  }

  generateSkills() {
    const skills = this.querySelector('ul')

    data.skills.forEach(skill => {
      const li = createNode({
        type: 'li',
        parent: skills,
      })

      createNode({
        type: 'img',
        parent: li,
        attrs: {
          height: 64,
          alt: `${skill} logo`,
          src: `./img/tech/${skill}.svg`,
        },
      })

      createNode({
        type: 'span',
        parent: li,
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
