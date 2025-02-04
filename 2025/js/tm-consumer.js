import { getPrefix } from '../../_global/js/global.js'
import { tool } from './tools.js'

const tools = [tool.vue3, tool.unoCss, tool.storybook]
  .map(t => `<li>${t}</li>`)
  .join('')

const template = `
<blockquote>
  TeamUp is a fitness management software designed to empower service providers in franchises, studios, gyms, and boxes.
</blockquote>

<h3>Consumer App</h3>
<ul class="pill-container">
  ${tools}
</ul>

<img src="./img/ondemand.png" alt="on-demand's index">

<p>
  Stay in control of your fitness journey with a powerful and intuitive app designed to simplify your experience. Whether you’re an individual member or managing a family’s fitness needs, this app offers everything you need to manage profiles, memberships, payments, and more—all in one place.
</p>

<h4>Key Features</h4>

<dl>
  <dt>Personalized Profile Management:</dt>
  <dd>Easily manage your profile, update your information, and customize your preferences. Family managers can oversee and update profiles for all family members.</dd>

  <dt>Streamlined Membership Management:</dt>
  <dd>View, track, and manage all active memberships for you and your family, ensuring everyone has access to the classes and services they need.</dd>

  <dt>Flexible Payment Options:</dt>
  <dd>Handle payments effortlessly with support for multiple methods, including cash and credit card. Keep track of payment receipts and view pending payments to stay on top of your account.</dd>

  <dt>Document Management:</dt>
  <dd>Sign, review, and store important documents such as forms and waivers directly in the app, making it easy to stay compliant with requirements.</dd>

  <dt>Stay Connected with Notifications:</dt>
  <dd>Customize your notifications to ensure you never miss an update, class reminder, or important announcement.</dd>

  <dt>Personalized Calendar Management:</dt>
  <dd>Organize your schedule by booking classes, courses or appointments. Keep track of all your upcoming activities with a user-friendly calendar.</dd>

  <dt>On-Demand Content Access:</dt>
  <dd>Stream and enjoy your favorite on-demand fitness content anytime, anywhere. Save your top picks to a personalized favorites list for quick access.</dd>
</dl>
`
const data = {
  attrs: [],
}

class TMConsumer extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = template
  }
}

window.customElements.define(getPrefix('tm-consumer'), TMConsumer)

export { data }
