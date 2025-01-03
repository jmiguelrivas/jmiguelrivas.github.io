import { getPrefix } from '../../_global/js/global.js'
// import { compressText } from '../../_global/js/nano/spirit.js'

const data = {
  attrs: [],
  slot: undefined,
  template: `
    <nn-caja padding="4">
      <h2>Bounce Range</h2>

      <dl>
        <dt>Max:</dt>
        <dd>150</dd>
        <dt>Min:</dt>
        <dd>0</dd>
        <dt>Test Range:</dt>
        <dd>[0, 299]</dd>
        <dt>X:</dt>
        <dd id="x-axis">0</dd>
      </dl>

      <canvas heigh="300"></canvas>

      <table/>
        <thead>
          <tr>
            <th>Index</th>
            <th>Counter</th>
            <th>Counter in Radians</th>
            <th>sin( Counter )</th>
            <th>[ sin( Counter ) ]</th>
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
  return (Math.abs(Math.sin(value * (Math.PI / 180))) * (max - min)) + min
}

class BounceRange extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = data.template

    const tableBody = this.querySelector('tbody')

    const max = 150
    const min = 1
    const increment = 90 / (max - 1) // so we can have 1024 steps in order to reach 90, otherwise it's going to be too fast

    tableBody.innerHTML = ''
    let index = 0

    for (let c = 0; index < 300; c += increment) {
      const counterRadians = c * (Math.PI / 180)
      const sine = Math.sin(counterRadians)
      const sinePos = Math.abs(sine)
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
			<td>${sinePos.toFixed(2)}</td>
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
    let min = canvas.width / 2
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