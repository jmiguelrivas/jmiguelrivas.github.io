import nano from 'https://cdn.jsdelivr.net/gh/nano-grid/nano-grid@pombo_poderoso/dist/nanogrid.js'

const { nnCode } = nano

class BounceRange extends HTMLElement {
  static get observedAttributes() {
    return ['min', 'max']
  }

  constructor() {
    super()
    this.min = Number(this.getAttribute('min')) || 50
    this.max = Number(this.getAttribute('max')) || 150

    // No shadow so existing CSS & nano-grid styles apply
    this.container = document.createElement('section')
    this.container.classList.add('workarea')
    this.appendChild(this.container)
  }

  attributeChangedCallback(name, _, newValue) {
    this[name] = Number(newValue)
    this.render()
  }

  connectedCallback() {
    this.render()
  }

  limitBounce({ min, max, value }) {
    const degreesToRadians = Math.PI / 180
    return Math.abs(Math.sin(value * degreesToRadians)) * (max - min) + min
  }

  generateBounceTable(min, max) {
    const increment = 90 / (max - 1)
    let table = ''

    for (let i = min, deg = min; i < max; i++, deg += increment) {
      const radians = deg * (Math.PI / 180)
      const sine = Math.sin(radians)
      const result = this.limitBounce({ min, max, value: deg })

      table += `
        <tr>
          <td>${i - min}</td>
          <td>${deg.toFixed(2)}</td>
          <td>${radians.toFixed(2)}</td>
          <td>${sine.toFixed(2)}</td>
          <td>${result.toFixed(2)}</td>
        </tr>
      `
    }

    return table
  }

  render() {
    const min = this.min
    const max = this.max

    this.container.innerHTML = `
      <nn-caja padding="1rem" max-width="1200px">
        <h2>Bounce Range</h2>
        <p>This experiment simplifies a range that oscillates between a minimum and maximum value using sine functions.</p>

        <dl>
          <dt>Min:</dt><dd>${min}</dd>
          <dt>Max:</dt><dd>${max}</dd>
          <dt>Test Range:</dt><dd>[${min}, ${max}]</dd>
          <dt>X:</dt><dd id="x-axis">0</dd>
        </dl>

        <canvas id="bounce-canvas" height="300" style="width: 100%; margin-bottom: 1rem;"></canvas>

        <nn-code>${nnCode.compressText(`
function limitBounce({ min, max, value }) {
  const degreesToRadians = Math.PI / 180
  return Math.abs(Math.sin(value * degreesToRadians)) * (max - min) + min
}`)}
        </nn-code>

        <math>
          <mrow>
            <mo>&forall;</mo><mi>x</mi><mo>&#x2208;</mo><mi>&Qopf;</mi><mo>;</mo>
            <mo>|</mo>
            <mi>sin</mi><mo>(</mo><mi>x</mi>
            <mo>&#x22C5;</mo><mfrac><mi>&pi;</mi><mn>180</mn></mfrac>
            <mo>)</mo><mo>&#x22C5;</mo>
            <mo>(</mo><mi>max</mi><mo>-</mo><mi>min</mi><mo>)</mo>
            <mo>+</mo><mi>min</mi><mo>|</mo>
          </mrow>
        </math>

        <p>I adjusted the counter so reaching the maximum takes exactly <strong>max</strong> steps.</p>

        <nn-code>${nnCode.compressText(`
const max = ${max}
const min = ${min}
const maxSineValue = 90
const increment = maxSineValue / (max - 1)
        `)}</nn-code>

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
          <tbody>${this.generateBounceTable(min, max)}</tbody>
        </table>
      </nn-caja>
    `

    this.startAnimation()
  }

  startAnimation() {
    const canvas = this.container.querySelector('#bounce-canvas')
    const ctx = canvas.getContext('2d')
    const xDisplay = this.container.querySelector('#x-axis')

    let counter = 0
    const min = this.min
    const max = this.max

    canvas.width = canvas.offsetWidth
    canvas.height = 300

    const animate = () => {
      counter++
      const x = this.limitBounce({ min, max, value: counter })

      xDisplay.textContent = x.toFixed(2)

      ctx.clearRect(0, 140, canvas.width, 20)
      ctx.beginPath()
      ctx.fillStyle = '#fff'
      ctx.arc(x, 150, 8, 0, Math.PI * 2)
      ctx.fill()

      requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }
}

customElements.define('bounce-range', BounceRange)
