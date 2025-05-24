import '../../0_global/js/index.js'
import '../../0_global/css/main.css'
import '../assets/docs.css'
import Spirit from '../../0_global/js/nano_spirit.js'

export default {
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    str: 'abcdefghijklmnopqrstuvwxyz',
  },
  argTypes: {
    str: {
      control: 'text',
    },
  },
}
export const StringReverse = args => {
  const { str } = args
  const container = document.createElement('section')
  container.classList.add('workarea')

  const result = str
    .split('')
    .sort(() => -1)
    .join('')

  container.innerHTML = `
<nn-caja padding="1rem" max-width="1200px">
  <h1>String Reverse</h1>

  <p>Input</p>
  <nn-code>${Spirit.compressText(`${str}`)}</nn-code>
  
  <p>Solution</p>
  <nn-code>${Spirit.compressText(`str
 .split('')
 .sort(() => -1)
 .join('')`)}</nn-code>

  <p>Output</p>
  <nn-code>${Spirit.compressText(`${result}`)}</nn-code>
</nn-caja>
`
  return container
}
