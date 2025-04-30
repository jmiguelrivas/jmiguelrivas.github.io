import {
  getPrefix
} from '../../0_global/js/global_helpers.js'
import {
  compressText
} from '../../0_global/js/nano_spirit.js'

const readme = /*html*/ `
<h2>Portfolio 2025</h2>

<h3>
  As easy to explore the code as possible
</h3>

<p>
  <em>Vue</em>, <em>React</em>, and <em>Angular</em> have been replaced with <em>Web Components</em>. Because of this, you will be able to see the full structure when inspecting elements on the website.
</p>

<h3>
  No Preprocessor of Any Kind
</h3>

<p>
  Technologies like <em>Sass</em>, <em>Less</em>, <em>Jade/Pug</em>, and <em>HAML</em> are not used, as there is also no local server (<em>Webpack</em>). Instead, <em>CSS Variables</em> and <em>CSS Nesting</em> replace <em>Sass</em> and <em>Less</em> functionalities.
</p>
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
  <p>Passionate frontend developer with a strong focus on building custom web applications mostly using Vue2 and Vue3 with deep knowledge about React and Web Components.</p>
  <p>With years of experience across various industries, I've contributed to UI libraries, optimized performance, and collaborated closely with cross functional teams to deliver seamless user experiences. My expertise includes modern frontend frameworks, component-driven development, and testing methodologies using tools like Storybook and Vitest.</p>
  <button class="btn show-dialog-btn sunglow" data-color="hsl(47deg, 100%, 57%)">Research behind this website</button>
</div>

<dialog>
  <nn-desplazador>
    <nn-caja padding="4">
      ${readme}
    </nn-caja>
  </nn-desplazador>

  <footer>
    <a class="btn shamrock" data-color="hsl(149deg, 61%, 51%)" href="https://github.com/jmiguelrivas/jmiguelrivas.github.io" target="_blank">Check this project in Github</a>
    <button autofocus class="btn sunglow hide-dialog-btn" data-color="hsl(47deg, 100%, 57%)">Close Dialog</button>
  </footer>
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