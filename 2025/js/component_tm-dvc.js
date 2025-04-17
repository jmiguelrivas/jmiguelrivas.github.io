import { getPrefix } from '../../0_global/js/global.js'
import { compressText } from '../../0_global/js/nano/spirit.js'
import { tool } from './db_tools.js'

const tools = [
  tool.vue3,
  tool.unoCss,
  tool.vitest,
  tool.storybook,
  tool.webComponents,
  tool.nodeModule,
]
  .map(t => `<li>${t}</li>`)
  .join('')

  const contributions = [
    'DSIcon',
    'DSLineClamp',
    'DSDateRangeInput',
    'DSNumberInput',
    'DSPersonComboboxInput',
    'DSTimeInput',
    'Time::FormKit',
    'Checkbox::FormKit (select all implementation)',
    'SpiritCode::WebComponent',
  ]
    .map(t => `<li>${t}</li>`)
    .join('')

const features = [
  [
    'Reusable Vue 3 Components',
    'A robust library of stylized components, ensuring a unified design system across all apps.',
  ],
  [
    'Styling with UnoCSS',
    'Lightweight and customizable utility-first CSS framework for seamless component styling.',
  ],
  [
    'Unit Testing with Vitest',
    'Ensures reliable and high-quality components through fast and modern testing capabilities.',
  ],
  [
    'Documentation with Storybook',
    'A fully integrated Storybook setup for visually showcasing and documenting components in isolation.',
  ],
  [
    'Shared Composables and Utilities',
    'Includes reusable logic and utility functions to reduce duplication and simplify development.',
  ],
]
  .map(li => `<li><strong>${li[0]}${li?.[1] && ':'}</strong> ${li[1]}</li>`)
  .join('')

const vitest = `
describe('DSNumberInput Unit Tests', () => {
  let wrapper, el

  beforeEach(() => {
    wrapper = mount(DSNumberInput)

    el = {
      increaseBtn: wrapper.getByTestId('ds-number-input-increase-btn'),
      decreaseBtn: wrapper.getByTestId('ds-number-input-decrease-btn'),
      input: wrapper.getByTestId('ds-number-input-input').wrapperElement,
    }

    wrapper.setProps({
      modelValue: ref(5),
    })
  })

  test('should render component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  test('should increase the counter when the button is clicked', async () => {
    await el.increaseBtn.trigger('click')
    await nextTick()
    expect(el.input.value).toBe('6')
  })

  test('should decrease the counter when the button is clicked', async () => {
    await el.decreaseBtn.trigger('click')
    await nextTick()
    expect(el.input.value).toBe('4')
  })
})
`

const template = `
<blockquote>
  TeamUp is a fitness management software designed to empower service providers in franchises, studios, gyms, and boxes.
</blockquote>

<h3>DaysmartVueComponents</h3>

<ul class="pill-container">
${tools}
</ul>

<p>
  This npm module serves as a centralized library for all Vue 3 components shared across applications within the organization. Designed to promote consistency and efficiency, the module also includes shared composables and utilities to streamline development workflows.
</p>

<h4>Key Features</h4>

<ul>
${features}
</ul>

<h3>SpiritCode</h3>

<p>This web component provides a visually appealing and interactive way to display code snippets for JavaScript, HTML, and CSS. Designed to enhance the standard code tag, it adds syntax highlighting with vibrant colors, making code easier to read and understand at a glance.</p>

<nn-code>
${compressText(vitest)}
</nn-code>

<h4>Key Features</h4>

<ul>
  <li>Portability: Can be easily used within any web project, requiring minimal setup.</li>
  <li>Perfect for displaying code examples in documentation or tutorials.</li>
</ul>

<h3>My Role</h3>

<p>Create/Migrate (from option API to composition API), test and document vue components and composables. Key contributions include:</p>

<ul>
  ${contributions}
</ul>
`
const data = {
  attrs: [],
}

class TMDVC extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = template
  }
}

window.customElements.define(getPrefix('tm-dvc'), TMDVC)

export { data }
