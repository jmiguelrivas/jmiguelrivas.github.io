import { getPrefix } from '../../_global/js/global.js'
import { tool } from './tools.js'

const tools = [
  tool.vue3,
  tool.unoCss,
  tool.vitest,
  tool.storybook,
  tool.webComponents,
  tool.nodeModule,
]
  .map(t => `<li>${t}</li>`)
  .join('')

const template = `
<blockquote>
  TeamUp is a fitness management software designed to empower service providers in franchises, studios, gyms, and boxes.
</blockquote>

<h3>DaysmartVueComponents</h3>

<ul class="pill-container">
${tools}
</ul>

<p>
  This npm module serves as a centralized library for all Vue 3 components shared across applications within the organization. Designed to promote consistency and efficiency, the module also includes shared composables and utilities to streamline development workflows.
</p>

<h4>Key Features</h4>

<dl>
  <dt>Reusable Vue 3 Components:</dt>
  <dd>A robust library of stylized components, ensuring a unified design system across all apps.</dd>

  <dt>Styling with UnoCSS:</dt>
  <dd>Lightweight and customizable utility-first CSS framework for seamless component styling.</dd>

  <dt>Unit Testing with Vitest:</dt>
  <dd>Ensures reliable and high-quality components through fast and modern testing capabilities.</dd>

  <dt>Documentation with Storybook:</dt>
  <dd>A fully integrated Storybook setup for visually showcasing and documenting components in isolation.</dd>

  <dt>Shared Composables and Utilities:</dt>
  <dd>Includes reusable logic and utility functions to reduce duplication and simplify development.</dd>
</dl>

<img src="" alt="storybook and vitest results">

<h3>SpiritCode</h3>

<p>This web component provides a visually appealing and interactive way to display code snippets for JavaScript, HTML, and CSS. Designed to enhance the standard code tag, it adds syntax highlighting with vibrant colors, making code easier to read and understand at a glance.</p>

<h4>Key Features</h4>

<ul>
  <li>Portability: Can be easily used within any web project, requiring minimal setup.</li>
  <li>Perfect for displaying code examples in documentation or tutorials.</li>
</ul>

<img src="" alt="preview of the component with some code">
`
const data = {
  attrs: [],
}

class TMDVC extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = template
  }
}

window.customElements.define(getPrefix('tm-dvc'), TMDVC)

export { data }
