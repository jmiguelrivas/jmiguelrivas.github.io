import '../../0_global/js/index.js'
import '../../0_global/css/main.css'
import '../assets/docs.css'
import Spirit from '../../0_global/js/nano_spirit.js'

export default {
  args: {
    min: 50,
    max: 150,
  },
  argTypes: {
    min: { control: 'number' },
    max: { control: 'number' },
  },
  parameters: {
    layout: 'fullscreen',
  },
}

function limitBounce({ min, max, value }) {
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

function generateBounceTable(min, max) {
  const increment = 90 / (max - 1)
  let table = ''

  for (let i = (min), deg = min; i < max; i++, deg += increment) {
    const radians = deg * (Math.PI / 180)
    const sine = Math.sin(radians)
    const result = limitBounce({ min, max, value: deg })

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

export const BounceRange = args => {
  const { min, max } = args
  const container = document.createElement('section')
  container.classList.add('workarea')

  container.innerHTML = `
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

    <nn-code>${Spirit.compressText(`
function limitBounce({ min, max, value }) {
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
      `)}</nn-code>

     <p>I adjusted the counter to slow down how quickly it reaches the limits. Now, the number of steps required to reach the maximum value is equal to the maximum itself.</p>

      <p>For example, if the maximum is 1200, it will take 1200 steps to reach the limit.</p>

      <nn-code>${Spirit.compressText(`
const max = ${max}
const min = ${min}
/* 90 is the peak value for the sine function; beyond that, it begins to decrease. */
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
      <tbody>${generateBounceTable(min, max)}</tbody>
    </table>
    </nn-caja>
  `

  requestAnimationFrame(() => {
    const canvas = container.querySelector('#bounce-canvas')
    const ctx = canvas.getContext('2d')
    const xDisplay = container.querySelector('#x-axis')

    let counter = 0

    const animate = () => {
      counter++
      const x = limitBounce({ min, max, value: counter })

      xDisplay.textContent = x.toFixed(2)

      ctx.clearRect(0, 142, canvas.width, 16)
      ctx.beginPath()
      ctx.fillStyle = '#fff'
      ctx.arc(x, 150, 8, 0, 2 * Math.PI)
      ctx.fill()

      requestAnimationFrame(animate)
    }

    canvas.width = canvas.offsetWidth
    canvas.height = 300

    animate()
  })

  return container
}
