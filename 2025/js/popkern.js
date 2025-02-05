import { getPrefix } from '../../_global/js/global.js'
import { gColor } from '../../_global/js/gcolor.js'
import { tool } from './tools.js'

const color = new gColor('purple-heart', '#7d32b0')

const tools = [tool.vue2, tool.sass, tool.rails, tool.nodeModule]
  .map(t => `<li>${t}</li>`)
  .join('')

const template = `
<blockquote>
  Enovational is a data-driven web and app development company that span a wide spectrum of audiences, technologies, and platforms, from consumer facing mobile apps to large government and enterprise custom web applications.
</blockquote>

<h3>Popkern</h3>

<ul class="pill-container">
  ${tools}
</ul>

<p>Popkern is a shared component and style library built with Vue2, SCSS, Ruby on Rails, as a Node module, designed to streamline design consistency across multiple applications within an organization.</p>

<h4>Key Features</h4>

<ul>
  <li>Centralized Component Library: Provides reusable Vue components and styles to ensure a consistent look and feel across apps.</li>
  <li>Visual Documentation: Integrated as a Ruby Gem, Popkern offers built-in visual documentation to showcase and preview components, making it easier for developers and designers to collaborate.</li>
  <li>Node Module Distribution: All code is packaged into a Node module, ensuring easy integration and updates across projects.</li>
  <li>Color Database with Contrast Testing: Includes a robust color database that dynamically tests contrast ratios for accessibility across six different backgrounds (three for light mode and three for dark mode), ensuring compliance with WCAG standards and delivering an inclusive user experience.</li>
  <li>Serves as the backbone for unified design and development workflows, enhancing productivity and accessibility across the organization’s ecosystem.</li>
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

<mr-cube></mr-cube>

<h4>Key Features:</h4>

<ul>
  <li>Enables designers to visualize the current color palette within the app.</li>
  <li>Highlights unused colors to assist in defining new, balanced color sets.</li>
  <li>Offers an interactive preview to make color selection and refinement more efficient.</li>
  <li>This tool is particularly useful when introducing new colors, ensuring that all additions are thoughtfully integrated into the existing palette.</li>
</ul>
`
const data = {
  attrs: [],
}

class Popkern extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = template
  }
}

window.customElements.define(getPrefix('popkern'), Popkern)

export { data }
