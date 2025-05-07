import{c as o}from"./main-CGAxX0ND.js";/* empty css             */const f={parameters:{layout:"fullscreen"},args:{n:19},argTypes:{n:{control:"number"}}},r=s=>{const{n:t}=s,e=document.createElement("section");e.classList.add("workarea");const z=Array.from({length:t}).map((u,a)=>{const n=a+1;return n%5===0&&n%3===0?"FizzBuzz":n%3===0?"Fizz":n%5===0?"Buzz":n}).join(`
`);return e.innerHTML=`
<nn-caja padding="4" size="1200">
  <h1>FizzBuzz</h1>
  
  <p>Input</p>
  <nn-code>Number of items: ${t}</nn-code>

  <p>Solution</p>
  <nn-code>${o(`Array.from({
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
  <nn-code>${o(`${z}`)}</nn-code>
</nn-caja>
`,e};var i,c,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
<nn-caja padding="4" size="1200">
  <h1>FizzBuzz</h1>
  
  <p>Input</p>
  <nn-code>Number of items: \${n}</nn-code>

  <p>Solution</p>
  <nn-code>\${compressText(\`Array.from({
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
  <nn-code>\${compressText(\`\${result}\`)}</nn-code>
</nn-caja>
\`;
  return container;
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const l=["FizzBuzz"];export{r as FizzBuzz,l as __namedExportsOrder,f as default};
