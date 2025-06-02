import { gColors, getPrefix, tool } from './head.js'

customElements.define(
  getPrefix('drlogic'),
  class extends HTMLElement {
    constructor() {
      super()
    }

    #tools = [tool.bootstrap, tool.sass, tool.rails, tool.jQuery, tool.haml]
      .map(t => `<li><nn-pill color="${gColors.canary.hex}">${t}</nn-pill></li>`)
      .join('')

    #features = [
      [
        'Polished Landing Experience',
        'A clean, responsive homepage that quickly communicates Dr Logic’s mission and personality, optimized for both desktop and mobile users.',
      ],
      [
        'About Page with a Human Touch',
        'Highlights the team’s story, values, and Apple expertise, helping users connect with the brand on a personal level.',
      ],
      [
        'Portfolio Integration',
        'A visually rich portfolio section showcasing real client work and practical case studies, reinforcing credibility and technical expertise.',
      ],
      [
        'Accessible Contact Pathways',
        'A prominently placed Contact Us link and form, making it easy for prospective clients to get in touch or request support.',
      ],
      [
        'Consistent Visual Identity',
        'Cohesive use of color, typography, and layout across pages to reflect a professional yet approachable Apple-aligned brand.',
      ],
    ]
      .map(li => `<li><strong>${li[0]}${li?.[1] && ':'}</strong> ${li[1]}</li>`)
      .join('')

    #template = `
      <blockquote>
        Pixel Perfect Tree is a data-driven web and app development company that span a wide spectrum of audiences, technologies, and platforms, from consumer facing mobile apps to large government and enterprise custom web applications.
      </blockquote>

      <h3>DrLogic</h3>

      <ul class="flex-row">
      ${this.#tools}
      </ul>

      <p>Dr Logic provides specialized Mac IT support for forward-thinking companies that value simplicity, creativity, and performance. Established in 2003, they are passionate about all things Apple, with a mission to help the clients do amazing things with technology.</p>
      
      <nn-video url="./videos/drlogic.mp4"></nn-video>

      <h4>Key Features</h4>

      <ul>
        ${this.#features}
      </ul>

      <h3>My Role</h3>

      <ul>
        <li>Defined project structure and boilerplates.</li>
        <li>
          Installed the missing gems for <em>bootstrap</em> and
          <em>rail-sass</em>.
        </li>
        <li>
          Optimized and resized all the images to the minimum width &
          height.
        </li>
        <li>
          Designed and implemented missing elements like OG image
          (Facebook preview), page 404, loading and terms and conditions’s
          document.
        </li>
        <li>Suggested and implemented all the css animations.</li>
      </ul>`

    connectedCallback() {
      this.innerHTML = this.#template
    }
  }
)
