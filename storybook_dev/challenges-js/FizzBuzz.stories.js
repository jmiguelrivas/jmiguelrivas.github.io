import '../../0_global/js/index.js'
import '../../0_global/css/main.css'
import '../assets/docs.css'
import { nano } from '../assets/head.js'

const { nnCode } = nano

export default {
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    n: 19,
  },
  argTypes: {
    n: {
      control: 'number',
    },
  },
}

export const FizzBuzz = args => {
  const { n } = args
  const container = document.createElement('section')
  container.classList.add('workarea')

  const result = Array.from({
    length: n,
  })
    .map((n, i) => {
      const p = i + 1
      if (p % 5 === 0 && p % 3 === 0) return 'FizzBuzz'
      if (p % 3 === 0) return 'Fizz'
      if (p % 5 === 0) return 'Buzz'
      return p
    })
    .join('\n')

  container.innerHTML = `
<nn-caja padding="1rem" max-width="1200px">
  <h1>FizzBuzz</h1>
  
  <p>Input</p>
  <nn-code>Number of items: ${n}</nn-code>

  <p>Solution</p>
  <nn-code>${nnCode.compressText(`Array.from({
  length: n,
})
.map((n, i) => {
  const p = i + 1
  if (p % 5 === 0 && p % 3 === 0) return 'FizzBuzz'
  if (p % 3 === 0) return 'Fizz'
  if (p % 5 === 0) return 'Buzz'
  return p
})
.join('')`)}</nn-code>

  <p>Output</p>
  <nn-code>${nnCode.compressText(`${result}`)}</nn-code>
</nn-caja>
`
  return container
}
