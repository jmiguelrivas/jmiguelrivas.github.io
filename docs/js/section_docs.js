import { getPrefix } from '../../0_global/js/global_helpers.js'
import { compressText } from '../../0_global/js/nano_spirit.js'

const docs = [
  {
    title: 'Cleaning an array [Array.Filter]',
    input: 'const arr = [1, 2, 3, 4, 5, undefined, 7, 8, 9, 10]',
    code: `return arr.filter(e => e)`,
    output: `[1, 2, 3, 4, 5, 7, 8, 9, 10]`,
  },
  {
    title: 'Remove duplicated items',
    input: 'const arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]',
    code: `return new Set(arr)`,
    output: `[1, 2, 3, 4, 5]`,
  },
  {
    title: 'Get Min/Max [Math.min/Math.max]',
    input: 'const arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]',
    code: `
return {
  min: Math.min(...arr),
  max: Math.max(...arr),
}
      `,
    output: `{ min: 1, max: 5 }`,
  },
  {
    title: 'Get Min/Max [Array.Reduce]',
    input: 'const arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]',
    code: `
return {
  min: arr.reduce((a, b) => a < b ? a : b),
  max: arr.reduce((a, b) => a > b ? a : b),
}
      `,
    output: `{ min: 1, max: 5 }`,
  },
  {
    title: 'Count number of instances [Array.Filter]',
    input: 'const arr = [1, 1, 1, 2, 2, 3, 4, 5, 6, 7]',
    code: `
function countInstances(arr, value) {
  return arr.filter(a => a === value).length
}

return countInstances(arr, 1)
    `,
    output: `3`,
  },
]

const data = {
  attrs: [],
  slot: undefined,
  template: `
    <nn-caja padding="4">      
      ${docs
        .map(
          doc => `
          <article>
            <h2>${doc.title}</h2>
            <h3>Input:</h3>
            <nn-code>${compressText(doc.input)}</nn-code>
            <h3>Process:</h3>
            <nn-code>${compressText(doc.code)}</nn-code>
            <h3>Output:</h3>
            <nn-code>${compressText(doc.output)}</nn-code>
          </article>
      `
        )
        .join('')}
    </nn-caja>
  `,
}

class Docs extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = data.template
  }
}

window.customElements.define(getPrefix('docs'), Docs)

export { data }
