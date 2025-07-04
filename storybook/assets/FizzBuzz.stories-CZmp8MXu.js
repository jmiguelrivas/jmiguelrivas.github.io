import"./main-BCPhkg1V.js";import z from"https://cdn.jsdelivr.net/gh/nano-grid/nano-grid@pombo_poderoso/dist/nanogrid.js";/* empty css             */import"https://cdn.jsdelivr.net/gh/nano-grid/nano-grid@pombo_poderoso/dist/gcolors.js";const{nnCode:o}=z,F={parameters:{layout:"fullscreen"},args:{n:19},argTypes:{n:{control:"number"}}},r=c=>{const{n:t}=c,e=document.createElement("section");e.classList.add("workarea");const s=Array.from({length:t}).map((m,u)=>{const n=u+1;return n%5===0&&n%3===0?"FizzBuzz":n%3===0?"Fizz":n%5===0?"Buzz":n}).join(`
`);return e.innerHTML=`
<nn-caja padding="1rem" max-width="1200px">
  <h1>FizzBuzz</h1>
  
  <p>Input</p>
  <nn-code>Number of items: ${t}</nn-code>

  <p>Solution</p>
  <nn-code>${o.compressText(`Array.from({
  length: n,
})
.map((n, i) => {
  const p = i + 1
  if (p % 5 === 0 && p % 3 === 0) return 'FizzBuzz'
  if (p % 3 === 0) return 'Fizz'
  if (p % 5 === 0) return 'Buzz'
  return p
})
.join('')`)}</nn-code>

  <p>Output</p>
  <nn-code>${o.compressText(`${s}`)}</nn-code>
</nn-caja>
`,e};var i,p,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  const {
    n
  } = args;
  const container = document.createElement('section');
  container.classList.add('workarea');
  const result = Array.from({
    length: n
  }).map((n, i) => {
    const p = i + 1;
    if (p % 5 === 0 && p % 3 === 0) return 'FizzBuzz';
    if (p % 3 === 0) return 'Fizz';
    if (p % 5 === 0) return 'Buzz';
    return p;
  }).join('\\n');
  container.innerHTML = \`
<nn-caja padding="1rem" max-width="1200px">
  <h1>FizzBuzz</h1>
  
  <p>Input</p>
  <nn-code>Number of items: \${n}</nn-code>

  <p>Solution</p>
  <nn-code>\${nnCode.compressText(\`Array.from({
  length: n,
})
.map((n, i) => {
  const p = i + 1
  if (p % 5 === 0 && p % 3 === 0) return 'FizzBuzz'
  if (p % 3 === 0) return 'Fizz'
  if (p % 5 === 0) return 'Buzz'
  return p
})
.join('')\`)}</nn-code>

  <p>Output</p>
  <nn-code>\${nnCode.compressText(\`\${result}\`)}</nn-code>
</nn-caja>
\`;
  return container;
}`,...(a=(p=r.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};const g=["FizzBuzz"];export{r as FizzBuzz,g as __namedExportsOrder,F as default};
