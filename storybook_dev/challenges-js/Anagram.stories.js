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
    str1: 'a gentleman',
    str2: 'elegant man',
  },
  argTypes: {
    str1: {
      control: 'text',
    },
    str2: {
      control: 'text',
    },
  },
}

function processWord(str) {
  return str.split('').sort().join('').toLowerCase().replace(/\s*/, '')
}

function isAnagram(str1, str2) {
  const s1 = processWord(str1)
  const s2 = processWord(str2)
  return s1 === s2
}

export const Anagram = args => {
  const { str1, str2 } = args
  const container = document.createElement('section')
  container.classList.add('workarea')

  container.innerHTML = `
<nn-caja padding="1rem" max-width="1200px">
  <h1>Anagram Checker</h1>

  <p>Input</p>
  <nn-code>${nnCode.compressText(`[str1]: "${str1}" = "${processWord(str1)}"`)}</nn-code>
  <nn-code>${nnCode.compressText(`[str2]: "${str2}" = "${processWord(str2)}"`)}</nn-code>
  
  <p>Solution</p>
  <nn-code>${nnCode.compressText(`
function processWord(str) {
  return str
    .split('')
    .sort()
    .join('')
    .toLowerCase()
    .replace(/\s*/, '')
}

function isAnagram(str1, str2) {
  const s1 = processWord(str1)
  const s2 = processWord(str2)
  return s1 === s2
}
    `)}</nn-code>

  <p>Output</p>
  <nn-code>${nnCode.compressText(`"${processWord(str1)}" = "${processWord(str2)}" = ${isAnagram(str1, str2)}`)}</nn-code>
</nn-caja>
`
  return container
}
