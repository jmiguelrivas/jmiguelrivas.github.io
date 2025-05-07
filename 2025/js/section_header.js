import {
  getPrefix
} from '../../0_global/js/global_helpers.js'

const readme = /*html*/ `
<h2>Portfolio 2025</h2>

<ul class="btn-group">
  <li>
    <a
      class="btn shamrock" data-color="hsl(149deg, 61%, 51%)"
      href="/storybook/"
      target="_blank"
      >Storybook Documentation</a
    >
  </li>
  <li>
    <a
      class="btn shamrock" data-color="hsl(149deg, 61%, 51%)"
      href="/vitest/"
      target="_blank"
      >Vitest Report</a
    >
  </li>
  <li>
    <a
      class="btn shamrock" data-color="hsl(149deg, 61%, 51%)"
      href="/github_log"
      target="_self"
      >Commit Log</a
    >
  </li>
  <li>
    <a
      class="btn shamrock" data-color="hsl(149deg, 61%, 51%)"
      href="https://github.com/jmiguelrivas/jmiguelrivas.github.io"
      target="_blank"
      >Github</a
    >
  </li>
</ul>
<button autofocus class="btn sunglow hide-dialog-btn" data-color="hsl(47deg, 100%, 57%)">Close Dialog</button>
`

const trees = Array.from({
    length: 200
  },
  (_, i) => `<img src="./img/tree.svg" class="tree t${i + 1}"></img>`
).join('')

const banner = 'SPOKANE,WA'
  .split('')
  .map((l, i) => `<span class="letter letter-${i + 1}">${l}</span>`)
  .join('')

const template = /*html*/ `
<mr-mountain class="mountain-01">
  <div class="banner">
    ${banner}
  </div>
  ${trees}
  <mr-palumba direction="left"></mr-palumba>
</mr-mountain>

<div class="buildings-02">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>

<div class="buildings-01">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>


<div class="content">
  <h1>
    Miguel Rivas
  </h1>
  <h2>
    Frontend Developer
  </h2>
  <p>Passionate frontend developer with a strong focus on building custom web applications mostly using <em>Vue2</em> and <em>Vue3</em> with deep knowledge about <em>React</em> and <em>Web Components</em>.</p>
  <p>With years of experience across various industries, I've contributed to UI libraries, optimized performance, and collaborated closely with cross functional teams to deliver seamless user experiences. My expertise includes modern frontend frameworks, component-driven development, and testing methodologies using tools like <em>Storybook</em> and <em>Vitest</em>.</p>
  <button class="btn show-dialog-btn sunglow" data-color="hsl(47deg, 100%, 57%)">Research behind this website</button>
</div>

<dialog>
  <nn-desplazador>
    <nn-caja padding="8">
      ${readme}
    </nn-caja>
  </nn-desplazador>
</dialog>
`
const data = {
  attrs: [],
}

class Header extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = template

    const dialog = this.querySelector('dialog')
    const showButton = this.querySelector('.show-dialog-btn')
    const closeButton = this.querySelector('.hide-dialog-btn')

    showButton.addEventListener('click', () => {
      dialog.showModal()
    })
    closeButton.addEventListener('click', () => {
      dialog.close()
    })
  }
}

window.customElements.define(getPrefix('header'), Header)

export {
  data
}