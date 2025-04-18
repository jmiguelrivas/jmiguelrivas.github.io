import { getPrefix } from '../../0_global/js/global_helpers.js'
import { tool } from './db_tools.js'

const tools = [tool.vue2, tool.sass, tool.rails, tool.cucumber]
  .map(t => `<li>${t}</li>`)
  .join('')

const template = `
<blockquote>
  Enovational is a data-driven web and app development company that span a wide spectrum of audiences, technologies, and platforms, from consumer facing mobile apps to large government and enterprise custom web applications.
</blockquote>

<h3>Formability</h3>

<ul class="pill-container">
  ${tools}
</ul>

<p>Formability is a modern, centralized web application built with Vue2, SCSS, Cucumber, and Ruby on Rails, designed to revolutionize how agencies streamline public services.</p>

<img src="./img/wide/formability.webp" alt="preview of the form builder">

<h4>Key Features</h4>

<ul>
  <li>No-code platform.</li>
  <li>Build and manage forms effortlessly.</li>
  <li>Automate workflows for faster, more transparent processes.</li>
  <li>Generate customized documents branded to your organization.</li>
  <li>Manage records and data efficiently.</li>
  <li>Enable electronic signatures to eliminate paper-based delays.</li>
  <li>Access in-system reporting and analytics for process optimization.</li>
  <li>Ensure compliance with 508 and WCAG2 accessibility standards.</li>
</ul>

<h3>My Role</h3>

<p>Implemented frontend features and actively maintained consistency across the organization's frontend.</p>
`
// <h3>Maryland Department of Transportation / MDOT</h3>

// <h3>Maryland Financial Disclosures Portal / MSEC</h3>

// <p>This electronic system facilitates financial disclosure filing for state employees, elected and appointed officials, and board members. Private citizens may also use this site to access public disclosures after providing their name and home address.</p>

// <h3>Maryland Department of Agriculture / MDA</h3>

// <h3>OneStop</h3>

// <p>OneStop is the central hub for Maryland State licenses, forms, certificates, permits, applications, and registrations.</p>

const data = {
  attrs: [],
}

class Formability extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = template
  }
}

window.customElements.define(getPrefix('formability'), Formability)

export { data }
