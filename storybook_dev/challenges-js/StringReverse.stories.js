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
    str: 'a gentleman',
  },
  argTypes: {
    str: {
      control: 'text',
    },
  },
}
export const StringReverse = args => {
  const {
    str
  } = args
  const container = document.createElement('section')
  container.classList.add('workarea')

  const result = str
    .split('')
    .sort(() => -1)
    .join('')

  console.log(result)

  container.innerHTML = /*html*/ `
<nn-caja padding="4" size="1200">
  <h1>String Reverse</h1>
  <nn-code>${compressText(`${str}`)}</nn-code>
  <nn-code>${compressText(`${result}`)}</nn-code>
</nn-caja>
`
  return container
}