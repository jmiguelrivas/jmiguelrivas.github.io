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
    str: 'abcdefedcba',
  },
  argTypes: {
    str: {
      control: 'text',
    },
  },
}

function isPalindrome(str) {
  const result = str
    .split('')
    .map((e, index) => {
      return e === str[str.length - index - 1]
    }).reduce((a,b) => a && b)
  return result
}

export const Palindrome = args => {
  const { str } = args
  const container = document.createElement('section')
  container.classList.add('workarea')

  container.innerHTML = `
<nn-caja padding="1rem" max-width="1200px">
  <h1>Palindrome Checker</h1>
  
  <p>Input</p>
  <nn-code>${nnCode.compressText(`[str]: ${str}`)}</nn-code>

  <p>Solution 1</p>
  <nn-code>${nnCode.compressText(`
function isPalindrome(str) {
  let result = true
  for (let c = 0; c < str.length; c++) {
    if (str[c] !== str[str.length - c - 1]) {
      result = false
    }
  }
  return result
}
`)}</nn-code>

<p>Solution 2</p>
  <nn-code>${nnCode.compressText(`
function isPalindrome(str) {
  const result = str
    .split('')
    .map((e, index) => {
      return e === str[str.length - index - 1]
    }).reduce((a,b) => a && b)
  return result
}
`)}</nn-code>

  <p>Output</p>
  <nn-code>${nnCode.compressText(`${isPalindrome(str)}`)}</nn-code>
</nn-caja>
`
  return container
}
