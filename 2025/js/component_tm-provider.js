import { gColors, getPrefix, tool } from './head.js'

const tools = [tool.vue3, tool.unoCss, tool.storybook]
  .map(t => `<li><nn-pill color="${gColors.canary.hex}">${t}</nn-pill></li>`)
  .join('')

const contributions = [
  'Instructor Hours Report',
  'Pay Rates (creation, editing, listing, and reporting)',
  'Penalty Management for No-Shows (creation, editing, listing, and reporting)',
  'Advanced Calendar Management',
  'Membership Management (creation, editing, sorting, listing, category sorting,and detailed membership view)',
]
  .map(t => `<li>${t}</li>`)
  .join('')

const template = `
<blockquote>
  TeamUp is a fitness management software designed to empower service providers in franchises, studios, gyms, and boxes.
</blockquote>

<h3>Provider App</h3>
<ul class="flex-row">
  ${tools}
</ul>

<nn-video url="./videos/instructors.mp4"></nn-video>

<h4>Key Features</h4>

<dl>
  <dt>Advanced Calendar Management:</dt>
  <dd>Seamlessly organize and schedule classes, courses, and appointments. Manage your team’s availability, set recurring schedules, and handle last-minute changes effortlessly.</dd>

  <dt>Comprehensive Reporting Tools:</dt>
  <dd>
    <ul>
      <li>Attendance tracking</li>
      <li>Instructor hours and pay rates</li>
      <li>Performance of classes and appointments</li>
      <li>Customer membership trends</li>
      <li>Signed waivers and agreements</li>
      <li>On-Demand Content Management</li>
    </ul>
  </dd>
  

  <dt>Flexible Membership Management:</dt>
  <dd>Customize membership plans, set pricing, and provide options that cater to your clients’ needs. From flexible drop-ins to long-term subscriptions, manage it all from one intuitive platform.</dd>

  <dt>Penalty Management for No-Shows:</dt>
  <dd>Reduce missed appointments with automated penalties for members who fail to attend scheduled classes. Keep your schedule optimized and ensure accountability among members.</dd>
</dl>

<h3>My Role</h3>

<p>Implemented frontend features and integrated a RESTful API developed by the backend team. Key contributions include:</p>

<ul>
  ${contributions}
</ul>
`

customElements.define(
  getPrefix('tm-provider'),
  class extends HTMLElement {
    constructor() {
      super()
    }

    connectedCallback() {
      this.innerHTML = template
    }
  }
)
