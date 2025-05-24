import{S as u}from"./main-DHuDOF0U.js";/* empty css             */const b={args:{min:50,max:150},argTypes:{min:{control:"number"},max:{control:"number"}},parameters:{layout:"fullscreen"}};function p({min:a,max:n,value:i}){const t=Math.PI/180;return Math.abs(Math.sin(i*t))*(n-a)+a}function g(a,n){const i=90/(n-1);let t="";for(let o=a,e=a;o<n;o++,e+=i){const s=e*(Math.PI/180),m=Math.sin(s),r=p({min:a,max:n,value:e});t+=`
      <tr>
        <td>${o-a}</td>
        <td>${e.toFixed(2)}</td>
        <td>${s.toFixed(2)}</td>
        <td>${m.toFixed(2)}</td>
        <td>${r.toFixed(2)}</td>
      </tr>
    `}return t}const c=a=>{const{min:n,max:i}=a,t=document.createElement("section");return t.classList.add("workarea"),t.innerHTML=`
  <nn-caja padding="1rem" max-width="1200px">
    <h2>Bounce Range</h2>
    <p>This experiment simplifies a range that oscillates between a minimum and maximum value using sine functions.</p>

    <dl>
      <dt>Min:</dt><dd>${n}</dd>
      <dt>Max:</dt><dd>${i}</dd>
      <dt>Test Range:</dt><dd>[${n}, ${i}]</dd>
      <dt>X:</dt><dd id="x-axis">0</dd>
    </dl>

    <canvas id="bounce-canvas" height="300" style="width: 100%; margin-bottom: 1rem;"></canvas>

    <nn-code>${u.compressText(`
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

      <nn-code>${u.compressText(`
const max = ${i}
const min = ${n}
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
      <tbody>${g(n,i)}</tbody>
    </table>
    </nn-caja>
  `,requestAnimationFrame(()=>{const o=t.querySelector("#bounce-canvas"),e=o.getContext("2d"),s=t.querySelector("#x-axis");let m=0;const r=()=>{m++;const d=p({min:n,max:i,value:m});s.textContent=d.toFixed(2),e.clearRect(0,142,o.width,16),e.beginPath(),e.fillStyle="#fff",e.arc(d,150,8,0,2*Math.PI),e.fill(),requestAnimationFrame(r)};o.width=o.offsetWidth,o.height=300,r()}),t};var l,h,x;c.parameters={...c.parameters,docs:{...(l=c.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  const {
    min,
    max
  } = args;
  const container = document.createElement('section');
  container.classList.add('workarea');
  container.innerHTML = \`
  <nn-caja padding="1rem" max-width="1200px">
    <h2>Bounce Range</h2>
    <p>This experiment simplifies a range that oscillates between a minimum and maximum value using sine functions.</p>

    <dl>
      <dt>Min:</dt><dd>\${min}</dd>
      <dt>Max:</dt><dd>\${max}</dd>
      <dt>Test Range:</dt><dd>[\${min}, \${max}]</dd>
      <dt>X:</dt><dd id="x-axis">0</dd>
    </dl>

    <canvas id="bounce-canvas" height="300" style="width: 100%; margin-bottom: 1rem;"></canvas>

    <nn-code>\${Spirit.compressText(\`
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
      \`)}</nn-code>

     <p>I adjusted the counter to slow down how quickly it reaches the limits. Now, the number of steps required to reach the maximum value is equal to the maximum itself.</p>

      <p>For example, if the maximum is 1200, it will take 1200 steps to reach the limit.</p>

      <nn-code>\${Spirit.compressText(\`
const max = \${max}
const min = \${min}
/* 90 is the peak value for the sine function; beyond that, it begins to decrease. */
const maxSineValue = 90
const increment = maxSineValue / (max - 1)
      \`)}</nn-code>

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
      <tbody>\${generateBounceTable(min, max)}</tbody>
    </table>
    </nn-caja>
  \`;
  requestAnimationFrame(() => {
    const canvas = container.querySelector('#bounce-canvas');
    const ctx = canvas.getContext('2d');
    const xDisplay = container.querySelector('#x-axis');
    let counter = 0;
    const animate = () => {
      counter++;
      const x = limitBounce({
        min,
        max,
        value: counter
      });
      xDisplay.textContent = x.toFixed(2);
      ctx.clearRect(0, 142, canvas.width, 16);
      ctx.beginPath();
      ctx.fillStyle = '#fff';
      ctx.arc(x, 150, 8, 0, 2 * Math.PI);
      ctx.fill();
      requestAnimationFrame(animate);
    };
    canvas.width = canvas.offsetWidth;
    canvas.height = 300;
    animate();
  });
  return container;
}`,...(x=(h=c.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const y=["BounceRange"];export{c as BounceRange,y as __namedExportsOrder,b as default};
