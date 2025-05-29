import { getPrefix } from '../../0_global/js/global_helpers.js'

const readme = `
<h2>Portfolio 2025</h2>

<ul class="btn-group">
  <li>
    <nn-btn
      color="#36ce80"
      href="/storybook/"
      target="_blank"
      link
      >Storybook Documentation</a
    >
  </li>
  <li>
    <nn-btn
      color="#36ce80"
      href="/vitest/"
      target="_blank"
      link
      >Vitest Report</a
    >
  </li>
  <li>
    <nn-btn
      color="#36ce80"
      href="/github_log"
      target="_self"
      link
      >Commit Log</a
    >
  </li>
  <li>
    <nn-btn
      color="#36ce80"
      link
      href="https://github.com/jmiguelrivas/jmiguelrivas.github.io"
      target="_blank"
      >Github</a
    >
  </li>
</ul>
<nn-btn autofocus class="hide-dialog-btn" color="#FFCC33">Close Dialog</nn-btn>
`

const trees = Array.from(
  {
    length: 200,
  },
  (_, i) => `<img src="./img/tree.svg" class="tree t${i + 1}"></img>`
).join('')

const banner = 'SPOKANE,WA'
  .split('')
  .map((l, i) => `<span class="letter letter-${i + 1}">${l}</span>`)
  .join('')

const template = `
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
  <nn-btn class="show-dialog-btn" color="#FFCC33">Research behind this website</nn-btn>
</div>

<dialog closedby="any">
  <nn-desplazador>
    <nn-caja padding="2rem" class="block-separator">
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

export { data }
