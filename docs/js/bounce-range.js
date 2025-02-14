import { getPrefix } from '../../_global/js/global.js'
import { compressText } from '../../_global/js/nano/spirit.js'

const fn = compressText(`
function limitBounce({ min, max, value } = {}) {
  const degreesToRadians = Math.PI / 180
  /*
    I'm using the absolute value to prevent the sine function from oscillating into negative values:
    [1, 0, -1, 0] -> [1, 0, 1, 0]
   
    Next, I multiply by the maximum value to expand the range:
    [1, 0, 1, 0] -> [max, 0, max, 0]
   
    Finally, I subtract the minimum value from the maximum and add the minimum back at the end to translate the vector.
    [max, 0, max, 0] -> [max, min, max, min]
  */
  return Math.abs(Math.sin(value * degreesToRadians)) * (max - min) + min
}
`)

const counterCode = compressText(`
const max = 300
const min = 0
/* 90 is the peak value for the sine function; beyond that, it begins to decrease. */
const maxSineValue = 90
const increment = maxSineValue / (max - 1)
`)

const data = {
  attrs: [],
  slot: undefined,
  template: `
    <nn-caja padding="4" size="1200">
      <h2>Bounce Range</h2>

      <p>This experiment aims to simplify a range that oscillates between a minimum and maximum value using a loop that runs from 0 to infinity, leveraging trigonometric functions.</p>

      <dl>
        <dt>Max:</dt>
        <dd>300</dd>
        <dt>Min:</dt>
        <dd>0</dd>
        <dt>Test Range:</dt>
        <dd>[0, 299]</dd>
        <dt>X:</dt>
        <dd id="x-axis">0</dd>
      </dl>

      <canvas heigh="300"></canvas>

      <nn-code>${fn}</nn-code>

      <p>I adjusted the counter to slow down how quickly it reaches the limits. Now, the number of steps required to reach the maximum value is equal to the maximum itself.</p>

      <p>For example, if the maximum is 1200, it will take 1200 steps to reach the limit.</p>

      <nn-code>${counterCode}</nn-code>

      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Counter::Degrees</th>
            <th>Counter::Radians</th>
            <th>sin( Counter )</th>
            <th>Fn</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </nn-caja>
  `,
}

function limitBounce({ min, max, value } = {}) {
  const degreesToRadians = Math.PI / 180
  /*
    I'm using the absolute value to prevent the sine function from oscillating into negative values:
    [1, 0, -1, 0] -> [1, 0, 1, 0]
   
    Next, I multiply by the maximum value to expand the range:
    [1, 0, 1, 0] -> [max, 0, max, 0]
   
    Finally, I subtract the minimum value from the maximum and add the minimum back at the end to translate the vector.
    [max, 0, max, 0] -> [max, min, max, min]
  */
  return Math.abs(Math.sin(value * degreesToRadians)) * (max - min) + min
}

class BounceRange extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = data.template

    const tableBody = this.querySelector('tbody')

    const max = 300
    const min = 0
    const increment = 90 / (max - 1) // so we can have 1024 steps in order to reach 90, otherwise it's going to be too fast

    tableBody.innerHTML = ''
    let index = 0

    for (let c = 0; index < 300; c += increment) {
      const counterRadians = c * (Math.PI / 180)
      const sine = Math.sin(counterRadians)
      // const sinePos = Math.abs(sine)
      const fn = limitBounce({
        min: min,
        max: max,
        value: c,
      })

      tableBody.innerHTML += `
		<tr>
			<td>${index}</td>
			<td>${c.toFixed(2)}</td>
			<td>${counterRadians.toFixed(2)}</td>
			<td>${sine.toFixed(2)}</td>
			<td>${fn.toFixed(2)}</td>
		</tr>
	`

      index++
    }

    this.drawCanvas()
  }

  drawCanvas() {
    const xElement = document.getElementById('x-axis')

    const canvas = document.querySelector('canvas')
    const ctx = canvas.getContext('2d')

    canvas.width = screen.width
    canvas.height = 300

    let counter = 0
    let x = 0
    let min = 0 //canvas.width / 2
    let max = 300

    setInterval(() => {
      ctx.clearRect(0, 142, canvas.width, 16)
      counter++
      x = limitBounce({
        min: min,
        max: max,
        value: counter,
      })

      xElement.innerHTML = x.toFixed(2)

      ctx.beginPath()
      ctx.fillStyle = '#fff'
      ctx.arc(x, 150, 8, 0, 2 * Math.PI)
      ctx.fill()
    }, 20)
  }
}

window.customElements.define(getPrefix('bounce-range'), BounceRange)

export { data }
