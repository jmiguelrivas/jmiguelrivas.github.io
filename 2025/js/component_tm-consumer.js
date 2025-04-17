import { getPrefix } from '../../0_global/js/global.js'
import { tool } from './db_tools.js'

const tools = [tool.vue3, tool.unoCss, tool.storybook]
  .map(t => `<li>${t}</li>`)
  .join('')

const contributions = [
  'Payment list functionality',
  'On-demand service implementation',
  'Management profile forms',
  'Schedule calendar integration',
]
  .map(t => `<li>${t}</li>`)
  .join('')

const features = [
  [
    'Personalized Profile Management',
    'Easily manage your profile, update your information, and customize your preferences. Family managers can oversee and update profiles for all family members.',
  ],
  [
    'Streamlined Membership Management',
    'View, track, and manage all active memberships for you and your family, ensuring everyone has access to the classes and services they need.',
  ],
  [
    'Flexible Payment Options',
    'Handle payments effortlessly with support for multiple methods, including cash and credit card. Keep track of payment receipts and view pending payments to stay on top of your account.',
  ],
  [
    'Document Management',
    'Sign, review, and store important documents such as forms and waivers directly in the app, making it easy to stay compliant with requirements.',
  ],
  [
    'Stay Connected with Notifications',
    'Customize your notifications to ensure you never miss an update, class reminder, or important announcement.',
  ],
  [
    'Personalized Calendar Management',
    'Organize your schedule by booking classes, courses or appointments. Keep track of all your upcoming activities with a user-friendly calendar.',
  ],
  [
    'On-Demand Content Access',
    'Stream and enjoy your favorite on-demand fitness content anytime, anywhere. Save your top picks to a personalized favorites list for quick access.',
  ],
]
  .map(li => `<li><strong>${li[0]}${li?.[1] && ':'}</strong> ${li[1]}</li>`)
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

<h4>Key Features</h4>

<ul>
  ${features}
</ul>

<h3>My Role</h3>

<p>Implemented frontend features and integrated a RESTful API developed by the backend team. Key contributions include:</p>

<ul>
  ${contributions}
</ul>
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
