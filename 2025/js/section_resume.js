import { getPrefix, createNode } from '../../0_global/js/global_helpers.js'
import { tool } from './db_tools.js'
// import gColors from 'https://cdn.jsdelivr.net/gh/nano-grid/nano-grid@pombo_poderoso/dist/gcolors.js'

const template = `
  <nn-caja padding="2rem" max-width="900px">
    <section class="header">
      <h1>Miguel Rivas</h1>
      <p>Frontend Developer</p>
    </section>

    <section>
      <h2>SUMMARY</h2>  
      <p>
        Frontend Developer with 10+ years of experience building modern, performant web apps using Vue, React, and native Web Components. Strong background in UI systems, testing, and cross-team collaboration.
      </p>
    </section>

    <section class="body">
      
      <h2>CONTACT</h2>
      <ul class="contact"></ul>

      <h2>SKiLLS</h2>
      <ul class="skills"></ul>

      <h2>EXPERIENCE</h2>
      <div class="experience"></div>
      
      <h2>EDUCATION</h2>
      <div class="education"></div>

      <h2>PROJECTS</h2>
      <div class="projects"></div>

  </section>
`
const data = {
  attrs: [],
  skills: [
    tool.html,
    tool.css,
    tool.sass,
    tool.unoCss,
    tool.javascript,
    tool.vue,
    tool.react,
    tool.redux,
    tool.vitest,
    tool.webComponents,
    tool.storybook,
    tool.git,
  ],
  contact: {
    location: {
      // icon: 'globe',
      label: 'Spokane, WA',
      // url: 'https://www.google.com/maps/place/Spokane,+WA/@47.7080732,-117.6633178,10z',
    },
    email: {
      // icon: 'envelope-o',
      label: 'miguelrivas57@proton.me',
      url: 'mailto:miguelrivas57@proton.me',
    },
    'cell-phone': {
      // icon: 'phone',/
      label: '202-983-0839',
      url: 'tel:2029830839',
    },
    website: {
      // icon: 'user',
      label: 'jmiguelrivas.github.io',
      url: 'https://jmiguelrivas.github.io',
    },
    github: {
      // icon: 'github',
      label: 'github@jmiguelrivas',
      url: 'https://github.com/jmiguelrivas',
    },
    linkedin: {
      // icon: 'linkedin',
      label: 'linkedin@jemiguelrivas',
      url: 'https://www.linkedin.com/in/jemiguelrivas/',
    },
  },
  experience: [
    {
      date: '2022/09/19',
      name: 'Teamup',
      position: 'Frontend Developer',
      description: [
        // 'Implement foundational product design & design system concepts for reuse across the platform.',
        // 'Build, maintain, and improve core customer-facing features that enable and support all of the product groups.',
        // 'Develop tools that improve frontend development productivity and minimize developer friction.',
        // 'Develop elegant and responsive user interfaces using the latest front-end technologies.',
        // 'Work with Product, UX design, and backend development teams to radically simplify the user experience for non-technical users.',
        // 'Implemented foundational product design and design system concepts for platform-wide reuse.',
        // 'Developed tools to boost frontend development productivity and minimize friction.',

        'Developed elegant, responsive user interfaces utilizing modern frontend technologies, including Vue3 and UnoCSS, to deliver seamless user experiences.',
        'Integrated RESTful APIs using Vue 3 components to fetch and display dynamic data.',
        'Contributed to the creation of a UI frontend library used across the organization, promoting consistency and reusability in design and development.',
        'Performed comprehensive component testing and validation using Storybook and Vitest, achieving high reliability and consistency across features.',
        'Collaborated cross-functionally with Product Managers, UX Designers, and backend developers to simplify and enhance the user experience for non-technical audiences.',
      ],
    },
    {
      date: '2018/04/01',
      name: 'Enovational',
      position: 'Frontend Developer',
      description: [
        // `Build government apps with ${tool.html}/${tool.slim}, ${tool.sass}, ${tool.bootstrap} and ${tool.jQuery}/${tool.vue} on a ${tool.rails} environment with ${tool.webpack}.`,
        // `Make sure applications are following conventions and extending them according to the complexity of the project and frameworks being used.`,
        // `Collaborate with UI/UX Designers, Full Stack Developers, Project Managers, QA Testers and Business Analysts to improve usability.`,

        'Developed government applications using HTML/Slim, SCSS, Bootstrap, and jQuery/Vue2 within a Ruby on Rails environment with Webpack.',
        'Ensured adherence to coding standards and extended applications as per project complexity and frameworks.',
        'Creation of a UI frontend library used across the organization, promoting consistency and reusability in design and development.',
        'Worked closely with UI/UX Designers, Full Stack Developers, Project Managers, QA Testers, and Business Analysts to enhance usability.',
      ],
    },
    {
      date: '2017/07/01',
      name: 'Plant Therapy',
      position: 'Frontend Developer',
      noPrint: true,
      description: [
        // `Build prototypes and landing pages with ${tool.pug}, ${tool.sass}, ${tool.jQuery} and ${tool.miva}.`,
        // `Maintain and optimize the website.`,
        // `Create wireframes and users flow with ${tool.illustrator}.`,
        'Created prototypes and landing pages using Pug, SCSS, jQuery, and Miva.',
        'Optimized and maintained website performance.',
        'Designed wireframes and user flows using Adobe Illustrator.',
      ],
    },
    {
      date: '2016/01/01',
      name: 'Pixel Perfect Tree',
      position: 'Frontend Developer',
      description: [
        // `Design and develop applications with ${tool.haml}, ${tool.sass}, ${tool.bootstrap}, ${tool.jQuery}/${tool.react} on a ${tool.rails} environment with ${tool.webpack}.`,
        // `Collaborate with Full Stack Developers and Project Managers to improve usability.`,

        'Designed and developed applications with Haml, SCSS, Bootstrap, and jQuery/React on Ruby on Rails with Webpack.',
        'Collaborated with Full Stack Developers and Project Managers to improve usability.',
      ],
    },
    {
      date: '2014/05/01',
      name: 'Capital',
      position: 'Frontend Developer',
      noPrint: true,
      description: [
        // `Build applications with ${tool.pug}, ${tool.sass}, ${tool.jQuery} on a ${tool.php} environment with ${tool.grunt}.`,
        // `Create wireframes and users flow with ${tool.illustrator}.`,
        // `Collaborate with Backend Developers, Designers and Project Managers to improve usability.`,
        // `Animate ad banners for websites with ${tool.flash}.`,
        // `Create motion graphics for social media with ${tool.flash}.`,
        'Developed applications with Pug, SCSS, and jQuery on PHP environment with GruntJS.',
        'Created wireframes and user flows using Adobe Illustrator.',
        'Collaborated with Backend Developers, Designers, and Project Managers to enhance usability.',
        'Animated ad banners and created motion graphics for social media using Adobe Flash.',
      ],
    },
    {
      date: '2013/07/15',
      name: 'Avante Group',
      position: 'Frontend Developer',
      noPrint: true,
      description: [
        // `Design and build applications with ${tool.html}, ${tool.css}, ${tool.jQuery} on a ${tool.php} environment.`,
        'Designed and built applications using HTML, CSS, and jQuery within a PHP environment.',
        'Optimized frontend performance to improve application speed and user experience.',
      ],
    },
    {
      date: '2013/05/01',
      name: 'Several Solutions',
      position: 'Graphic designer/Web Designer',
      noPrint: true,
      description: [
        // `Retouch pictures with ${tool.photoshop}`,
        // `Design yearbooks with ${tool.indesign} and ${tool.photoshop}`,
        // `Design applications UI with ${tool.illustrator}.`,
        // `Design social media assets with ${tool.illustrator}, ${tool.photoshop} and ${tool.indesign}.`,
        'Retouched images and optimized visual assets using Adobe Photoshop.',
        'Designed and produced yearbooks utilizing Adobe InDesign and Adobe Photoshop.',
        'Created user interface designs for applications with Adobe Illustrator.',
        'Developed social media assets, including graphics and layouts, using Adobe Illustrator, Adobe Photoshop, and Adobe InDesign.',
      ],
    },
  ],
  education: [
    {
      date: '2009/09/01',
      name: 'ITLA',
      position: 'Asociates of Art, Multimedia',
      description: [
        // 'Digital Illustration',
        // 'Visual Communication',
        // 'Bitmap Graphics',
        // 'Vector Graphics',
        // 'Desktop Publishing',
        // 'Digital Video',
        // 'Website Creation',
        // 'Flash Animation with Action Script',
        // '3D Graphics & Animation',
        // 'Digital Audio',
        // 'Branding',
        'Specialized in Website Creation, Flash Animation with Action Script, Digital Illustration, Visual Communication, Bitmap Graphics, Vector Graphics, Desktop Publishing, and Digital Video.',
      ],
    },
  ],
  projects: [
    {
      date: '2021/03/17',
      name: 'Nano Grid',
      position: 'Creator/Maintainer',
      link: 'https://nano-grid.github.io',
      linkTitle: 'Nano Grid :: Website',
      description: [
        // 'Nano Grid is a lightweight set of custom elements designed to provide minimal yet powerful UI primitives without relying on any framework. Each component is built using native Web Components and encapsulates its behavior and styling, making it easy to drop into any project (React, Vue, Svelte, plain HTML, or otherwise).',
        // 'These components embrace progressive enhancement, low overhead, and modern browser standards. They are declarative, styleable via CSS variables, and interoperable with design systems.',

        'A lightweight set of native Web Components that serve as minimal yet powerful UI primitives. Built without any framework, Nano Grid components are encapsulated, framework-agnostic, and easily integrable into projects using React, Vue, Svelte, or plain HTML.',
        'Designed component APIs and styling with performance and usability in mind.',
        'Continuously maintained and updated.',
      ],
    },
  ],
}

class Resume extends HTMLElement {
  constructor() {
    super()
  }

  generateContact() {
    const contact = this.querySelector('.contact')
    const entries = Object.entries(data.contact)

    entries.forEach(([key, value], index) => {
      const li = createNode({
        type: 'li',
        parent: contact,
      })

      if (value.url) {
        createNode({
          type: 'a',
          parent: li,
          text: value.label,
          attrs: {
            target: '_blank',
            href: value.url,
          },
        })
      } else {
        createNode({
          type: 'span',
          parent: li,
          text: value.label,
        })
      }

      if (index < entries.length - 1) {
        createNode({
          type: 'span',
          parent: contact,
          text: '•',
          attrs: {
            class: 'separator',
            'aria-hidden': true,
          },
        })
      }
    })
  }

  generateSkills() {
    const skills = this.querySelector('.skills')

    data.skills.forEach(skill => {
      const li = createNode({
        type: 'li',
        parent: skills,
      })

      createNode({
        type: 'nn-pill',
        parent: li,
        text: skill,
        attrs: {
          color: '#cfe0eb',
        },
      })
    })
  }

  generateArticles(selector, data) {
    const experience = this.querySelector(selector)

    data.forEach(exp => {
      const article = createNode({
        type: 'article',
        parent: experience,
        attrs: {
          class: exp.noPrint ? 'no-print' : '',
        },
      })

      const h3 = createNode({
        type: 'h3',
        parent: article,
        text: `${exp.position.toUpperCase()} - ${exp.name.toUpperCase()} | ${exp.date.split('/')[0]}`,
      })

      if (exp.link) {
        createNode({
          type: 'a',
          parent: article,
          text: exp.link,
          attrs: {
            href: exp.link,
            target: '_BLANK',
            class: 'website',
          },
        })
      }

      const ul = createNode({
        type: 'ul',
        parent: article,
      })

      exp.description.forEach(p => {
        createNode({
          type: 'li',
          parent: ul,
          text: p,
        })
      })
    })
  }

  connectedCallback() {
    this.innerHTML = template
    this.generateContact()
    this.generateSkills()
    this.generateArticles('.experience', data.experience)
    this.generateArticles('.education', data.education)
    this.generateArticles('.projects', data.projects)
  }
}

window.customElements.define(getPrefix('resume'), Resume)

export { data }
