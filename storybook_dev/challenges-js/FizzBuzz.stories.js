import '../../0_global/js/index.js'
import '../../0_global/css/main.css'
import '../assets/docs.css'
import {
  compressText
} from '../../0_global/js/nano_spirit.js'

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
  const {
    n
  } = args
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
<nn-caja padding="4" size="1200">
  <h1>FizzBuzz</h1>
  
  <p>Input</p>
  <nn-code>Number of items: ${n}</nn-code>

  <p>Solution</p>
  <nn-code>${compressText(`Array.from({
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
  <nn-code>${compressText(`${result}`)}</nn-code>
</nn-caja>
`
  return container
}