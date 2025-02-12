import { getPrefix, createNode } from '../../_global/js/global.js'
import { tool } from './tools.js'

const template = `
  <nn-caja padding="4" size="900">
    <header>
      <h1>Miguel Rivas</h1>
      <p>Frontend Developer</p>
    </header>
    <nn-fila>
      <nn-pilar size="30%" class="skills">
        <h2>Contact</h2>
        <address>
          <dl></dl>
        </address>
        <h2>Skills</h2>
        <ul></ul>
      </nn-pilar>
      <nn-pilar size="70%" class="experience">
        <h2>Experience</h2>
    </nn-fila>
  </nn-caja>
`
const data = {
  attrs: [],
  skills: [
    tool.html,
    tool.css,
    tool.javascript,
    tool.vue,
    tool.vitest,
    tool.webComponents,
    tool.storybook,
    tool.git,
  ],
  contact: {
    location: {
      label: 'Spokane, WA',
      url: 'https://www.google.com/maps/place/Spokane,+WA/@47.7080732,-117.6633178,10z',
    },
    email: {
      label: 'miguelrivas.kkqym@simplelogin.fr',
      url: 'mailto:miguelrivas.kkqym@simplelogin.fr',
    },
    'cell-phone': { label: '202-983-0839', url: 'tel:2029830839' },
    website: {
      label: 'jmiguelrivas.github.io',
      url: 'https://jmiguelrivas.github.io',
    },
    github: { label: 'jmiguelrivas', url: 'https://github.com/jmiguelrivas' },
    linkedin: {
      label: 'jemiguelrivas',
      url: 'https://www.linkedin.com/in/jemiguelrivas/',
    },
  },
  experience: [
    {
      date: '2022/09/19',
      company: 'Teamup',
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
        'Consuming a RESTful API with frontend components.',
        'Contributed to the creation of a UI frontend library used across the organization, promoting consistency and reusability in design and development.',
        'Performed comprehensive component testing and validation using Storybook and Vitest, achieving high reliability and consistency across features.',
        'Collaborated cross-functionally with Product Managers, UX Designers, and backend developers to simplify and enhance the user experience for non-technical audiences.',
      ],
    },
    {
      date: '2018/04/01',
      company: 'Enovational',
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
      company: 'Plant Therapy',
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
      company: 'Pixel Perfect Tree',
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
      company: 'Capital',
      position: 'Frontend Developer',
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
      company: 'Avante Group',
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
      company: 'Several Solutions',
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
    {
      date: '2009/09/01',
      company: 'ITLA',
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
}

class Resume extends HTMLElement {
  constructor() {
    super()
  }

  generateContact() {
    const contact = this.querySelector('.skills dl')

    Object.entries(data.contact).forEach(([key, value]) => {
      createNode({
        type: 'dt',
        parent: contact,
        text: key,
      })

      const dd = createNode({
        type: 'dd',
        parent: contact,
      })

      createNode({
        type: 'a',
        parent: dd,
        text: value.label,
        attrs: {
          target: '_blank',
          href: value.url,
        },
      })
    })
  }

  generateSkills() {
    const skills = this.querySelector('.skills ul')

    data.skills.forEach(skill => {
      createNode({
        type: 'li',
        parent: skills,
        text: skill,
      })
    })
  }

  generateExperience() {
    const experience = this.querySelector('.experience')

    data.experience.forEach(exp => {
      const article = createNode({
        type: 'article',
        parent: experience,
        attrs: {
          class: exp.noPrint ? 'no-print' : ''
        }
      })

      const icono = createNode({
        type: 'nn-icono',
        parent: article,
        attrs: {
          class: 'circle-o',
        },
      })

      const h3 = createNode({
        type: 'h3',
        parent: article,
        text: exp.company,
      })

      const h4 = createNode({
        type: 'h4',
        parent: article,
        text: exp.position,
      })

      const time = createNode({
        type: 'time',
        parent: h3,
        text: `(${exp.date.split('/')[0]})`,
        attrs: {
          datetime: exp.date,
        },
      })

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
    this.generateSkills()
    this.generateExperience()
    this.generateContact()
  }
}

window.customElements.define(getPrefix('resume'), Resume)

export { data }
