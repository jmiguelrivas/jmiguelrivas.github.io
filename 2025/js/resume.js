import { getPrefix, createNode } from '../../global/js/global.js'
import { tool } from './tools.js'

const template = `
  <nn-caja padding="4" size="900">
    <header>
      <h1>Miguel Rivas</h1>
      <p>Frontend Developer</p>
    </header>
    <nn-fila>
      <nn-pilar size="35%" class="skills">
        <h2>Contact</h2>
        <address>
          <dl></dl>
        </address>
        <h2>Skills</h2>
        <ul></ul>
      </nn-pilar>
      <nn-pilar size="65%" class="experience">
        <h2 class="sr-only">Experience</h2>
    </nn-fila>
  </nn-caja>
`
const data = {
  attrs: [],
  skills: [
    tool.html,
    tool.pug,
    // tool.slim,
    // tool.haml,
    // separator,
    tool.css,
    tool.scss,
    // separator,
    tool.javascript,
    tool.vue,
    // tool.vuex,
    // tool.vueRouter,
    tool.svelte,
    tool.react,
    // tool.redux,
    // tool.angular,
    // tool.jQuery,
    // separator,
    tool.git,
    // separator,
    tool.cypress,
    tool.storybook,
    // separator,
    // tool.firebase,
    // separator,
    // tool.rails,
    // separator,
    tool.grunt,
    tool.gulp,
    tool.webpack,
    // separator,
    // tool.bootstrap,
    // separator,
    tool.figma,
    tool.photoshop,
    // tool.gimp,
    tool.illustrator,
    tool.inkscape,
    // tool.indesign,
    // tool.scribus,
    tool.flash,
    tool.blender,
  ],
  contact: {
    website: {
      label: 'miguel-rivas.github.io',
      url: 'https://miguel-rivas.github.io',
    },
    email: {
      label: 'miguelrivas.kgym@simplelogin.fr',
      url: 'mailto:miguelrivas.kgym@simplelogin.fr',
    },
    location: { label: 'Spokane, WA', url: 'Spokane, WA' },
    phoneNumber: { label: '202-983-0839', url: 'tel:2029830839' },
    github: { label: 'jmiguelrivas', url: 'https://github.com/jmiguelrivas' },
  },
  experience: [
    {
      date: '2022/09/19',
      company: 'Teamup',
      position: 'Frontend Developer',
      description: [
        'Implement foundational product design & design system concepts for reuse across the platform.',
        'Build, maintain, and improve core customer-facing features that enable and support all of the product groups.',
        'Develop tools that improve frontend development productivity and minimize developer friction.',
        'Develop elegant and responsive user interfaces using the latest front-end technologies.',
        'Work with Product, UX design, and backend development teams to radically simplify the user experience for non-technical users.',
      ],
    },
    {
      date: '2018/04/01',
      company: 'Enovational',
      position: 'Frontend Developer',
      description: [
        `Build government apps with ${tool.html}/${tool.slim}, ${tool.sass}, ${tool.bootstrap} and ${tool.jQuery}/${tool.vue} on a ${tool.rails} environment with ${tool.webpack}.`,
        `Make sure applications are following conventions and extending them according to the complexity of the project and frameworks being used.`,
        `Collaborate with UI/UX Designers, Full Stack Developers, Project Managers, QA Testers and Business Analysts to improve usability.`,
      ],
    },
    {
      date: '2017/07/01',
      company: 'Plant Therapy',
      position: 'Frontend Developer',
      description: [
        `Build prototypes and landing pages with ${tool.pug}, ${tool.sass}, ${tool.jQuery} and ${tool.miva}.`,
        `Maintain and optimize the website.`,
        `Create wireframes and users flow with ${tool.illustrator}.`,
      ],
    },
    {
      date: '2016/01/01',
      company: 'Pixel Perfect Tree',
      position: 'Frontend Developer',
      description: [
        `Design and develop applications with ${tool.haml}, ${tool.sass}, ${tool.bootstrap}, ${tool.jQuery}/${tool.react} on a ${tool.rails} environment with ${tool.webpack}.`,
        `Collaborate with Full Stack Developers and Project Managers to improve usability.`,
      ],
    },
    {
      date: '2014/05/01',
      company: 'Capital',
      position: 'Frontend Developer',
      description: [
        `Build applications with ${tool.pug}, ${tool.sass}, ${tool.jQuery} on a ${tool.php} environment with ${tool.grunt}.`,
        `Create wireframes and users flow with ${tool.illustrator}.`,
        `Collaborate with Backend Developers, Designers and Project Managers to improve usability.`,
        `Animate ad banners for websites with ${tool.flash}.`,
        `Create motion graphics for social media with ${tool.flash}.`,
      ],
    },
    {
      date: '2013/07/15',
      company: 'Avante Group',
      position: 'Frontend Developer',
      description: [
        `Design and build applications with ${tool.html}, ${tool.css}, ${tool.jQuery} on a ${tool.php} environment.`,
      ],
    },
    {
      date: '2013/05/01',
      company: 'Several Solutions',
      position: 'Graphic designer/Web Designer',
      description: [
        `Retouch pictures with ${tool.photoshop}`,
        `Design yearbooks with ${tool.indesign} and ${tool.photoshop}`,
        `Design applications UI with ${tool.illustrator}.`,
        `Design social media assets with ${tool.illustrator}, ${tool.photoshop} and ${tool.indesign}.`,
      ],
    },
    {
      date: '2009/09/01',
      company: 'ITLA',
      position: 'Asociates of Art, Multimedia',
      description: [
        'Digital Illustration',
        'Visual Communication',
        'Bitmap Graphics',
        'Vector Graphics',
        'Desktop Publishing',
        'Digital Video',
        'Website Creation',
        'Flash Animation with Action Script',
        '3D Graphics & Animation',
        'Digital Audio',
        'Branding',
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
      })

      const time = createNode({
        type: 'time',
        parent: article,
        text: exp.date.split('/')[0],
        attrs: {
          datetime: exp.date,
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
