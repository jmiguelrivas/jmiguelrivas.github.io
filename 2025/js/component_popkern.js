import { getPrefix } from '../../0_global/js/global_helpers.js'
import { gColor } from '../../0_global/js/class_gcolor.js'
import { tool } from './db_tools.js'

const color = new gColor('purple-heart', '#7d32b0')

const tools = [tool.vue2, tool.sass, tool.rails, tool.nodeModule]
  .map(t => `<li><nn-pill color="var(--accent-color)">${t}</nn-pill></li>`)
  .join('')

const features = [
  [
    'Centralized Component Library',
    'Provides reusable Vue components and styles to ensure a consistent look and feel across apps.',
  ],
  [
    'Visual Documentation',
    'Integrated as a Ruby Gem, Popkern offers built-in visual documentation to showcase and preview components, making it easier for developers and designers to collaborate.',
  ],
  [
    'Node Module Distribution',
    'All code is packaged into a Node module, ensuring easy integration and updates across projects.',
  ],
  [
    'Color Database with Contrast Testing',
    'Includes a robust color database that dynamically tests contrast ratios for accessibility across six different backgrounds (three for light mode and three for dark mode), ensuring compliance with WCAG standards and delivering an inclusive user experience.',
  ],
  [
    'Serves as the backbone for unified design and development workflows, enhancing productivity and accessibility across the organization’s ecosystem.',
  ],
]
  .map(li => `<li><strong>${li[0]}${li?.[1] && ':'}</strong> ${li[1]}</li>`)
  .join('')

const cubeFeatures = [
  ['Enables designers to visualize the current color palette within the app.'],
  ['Highlights unused colors to assist in defining new, balanced color sets.'],
  [
    'Offers an interactive preview to make color selection and refinement more efficient.',
  ],
  [
    'This tool is particularly useful when introducing new colors, ensuring that all additions are thoughtfully integrated into the existing palette.',
  ],
]
  .map(li => `<li><strong>${li[0]}${li?.[1] && ':'}</strong> ${li[1]}</li>`)
  .join('')

const template = `
<blockquote>
  Enovational is a data-driven web and app development company that span a wide spectrum of audiences, technologies, and platforms, from consumer facing mobile apps to large government and enterprise custom web applications.
</blockquote>

<h3>Popkern</h3>

<ul class="flex-row">
  ${tools}
</ul>

<p>Popkern is a shared component and style library built with Vue2, SCSS, Ruby on Rails, as a Node module, designed to streamline design consistency across multiple applications within an organization.</p>

<nn-video url="./videos/popkern.mp4"></nn-video>

<h4>Key Features</h4>

<ul>
  ${features}
</ul>

<h3>Color Database</h3>

<p>The Color Database is a structured array of classes where each class uses a constructor to expand and enrich color attributes. The constructor takes two parameters: the color’s name and its hexadecimal code.</p>

<p>For example, providing:</p>
<nn-code>new gColor('purple-heart', '#7d32b0')</nn-code>

<p>Would produce the following attributes:</p>

<nn-code>
  {
  /* Name properties */
  label: "${color.label}",
  spinalCase: "${color.spinalCase}",
  titleName: "${color.titleCase}",
  pascalCase: "${color.pascalCase}",
  camelCase: "${color.camelCase}",

  /* Color Properties */
  red: ${color.red},
  blue: ${color.blue},
  green: ${color.green},
  hue: ${color.hue},
  lightness: ${color.lightness},
  opacity: ${color.opacity},
  saturation: ${color.saturation},

  /* Formatted Representations */
  hex: "${color.hex}",
  hsl: "${color.hsl}",
  rgb: "${color.rgb}",
  }
</nn-code>

<h3>3D Cube</h3>

<p>The 3D Cube is a visualization tool created to help designers better understand and manage the colors used in the application. By rendering colors in a 3D space, the cube provides an intuitive overview of color distribution and usage.</p>

<nn-video url="./videos/cube.mp4"></nn-video>

<mr-cube></mr-cube>

<h4>Key Features:</h4>

<ul>
  ${cubeFeatures}
</ul>

<h3>My Role</h3>

<p>I created the node module and gem to actively maintained consistency across the organization's frontend and keep all the components visually documented.</p>
`

customElements.define(
  getPrefix('popkern'),
  class extends HTMLElement {
    constructor() {
      super()
    }

    connectedCallback() {
      this.innerHTML = template
    }
  }
)
