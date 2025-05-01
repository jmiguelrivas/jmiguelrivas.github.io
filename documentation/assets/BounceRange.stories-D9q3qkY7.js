import{c as u}from"./main-Bpn0YcEd.js";const v={title:"Research/Bounce Range",args:{min:50,max:150},argTypes:{min:{control:"number"},max:{control:"number"}},parameters:{layout:"fullscreen"}};function g({min:a,max:n,value:i}){const e=Math.PI/180;return Math.abs(Math.sin(i*e))*(n-a)+a}function p(a,n){const i=90/(n-1);let e="";for(let o=a,t=a;o<n;o++,t+=i){const s=t*(Math.PI/180),m=Math.sin(s),c=g({min:a,max:n,value:t});e+=`
      <tr>
        <td>${o-a}</td>
        <td>${t.toFixed(2)}</td>
        <td>${s.toFixed(2)}</td>
        <td>${m.toFixed(2)}</td>
        <td>${c.toFixed(2)}</td>
      </tr>
    `}return e}const d=a=>{const{min:n,max:i}=a,e=document.createElement("section");return e.classList.add("workarea"),e.innerHTML=`
  <nn-caja padding="4" size="1200">
    <h2>Bounce Range</h2>
    <p>This experiment simplifies a range that oscillates between a minimum and maximum value using sine functions.</p>

    <dl>
      <dt>Min:</dt><dd>${n}</dd>
      <dt>Max:</dt><dd>${i}</dd>
      <dt>Test Range:</dt><dd>[${n}, ${i}]</dd>
      <dt>X:</dt><dd id="x-axis">0</dd>
    </dl>

    <canvas id="bounce-canvas" height="300" style="width: 100%; margin-bottom: 1rem;"></canvas>

    <nn-code>${u(`
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

      <nn-code>${u(`
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
      <tbody>${p(n,i)}</tbody>
    </table>
    </nn-caja>
  `,requestAnimationFrame(()=>{const o=e.querySelector("#bounce-canvas"),t=o.getContext("2d"),s=e.querySelector("#x-axis");let m=0;const c=()=>{m++;const r=g({min:n,max:i,value:m});s.textContent=r.toFixed(2),t.clearRect(0,142,o.width,16),t.beginPath(),t.fillStyle="#fff",t.arc(r,150,8,0,2*Math.PI),t.fill(),requestAnimationFrame(c)};o.width=o.offsetWidth,o.height=300,c()}),e};var l,h,x;d.parameters={...d.parameters,docs:{...(l=d.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  const {
    min,
    max
  } = args;
  const container = document.createElement('section');
  container.classList.add('workarea');
  container.innerHTML = \`
  <nn-caja padding="4" size="1200">
    <h2>Bounce Range</h2>
    <p>This experiment simplifies a range that oscillates between a minimum and maximum value using sine functions.</p>

    <dl>
      <dt>Min:</dt><dd>\${min}</dd>
      <dt>Max:</dt><dd>\${max}</dd>
      <dt>Test Range:</dt><dd>[\${min}, \${max}]</dd>
      <dt>X:</dt><dd id="x-axis">0</dd>
    </dl>

    <canvas id="bounce-canvas" height="300" style="width: 100%; margin-bottom: 1rem;"></canvas>

    <nn-code>\${compressText(\`
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

      <nn-code>\${compressText(\`
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
}`,...(x=(h=d.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const b=["BounceRange"];export{d as BounceRange,b as __namedExportsOrder,v as default};
