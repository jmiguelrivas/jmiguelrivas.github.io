import"./main-BCPhkg1V.js";import i from"https://cdn.jsdelivr.net/gh/nano-grid/nano-grid@pombo_poderoso/dist/nanogrid.js";/* empty css             */import"https://cdn.jsdelivr.net/gh/nano-grid/nano-grid@pombo_poderoso/dist/gcolors.js";const{nnCode:t}=i,x={parameters:{layout:"fullscreen"},args:{str:"abcdefghijklmnopqrstuvwxyz"},argTypes:{str:{control:"text"}}},n=a=>{const{str:r}=a,e=document.createElement("section");e.classList.add("workarea");const p=r.split("").sort(()=>-1).join("");return e.innerHTML=`
<nn-caja padding="1rem" max-width="1200px">
  <h1>String Reverse</h1>

  <p>Input</p>
  <nn-code>${t.compressText(`${r}`)}</nn-code>
  
  <p>Solution</p>
  <nn-code>${t.compressText(`str
 .split('')
 .sort(() => -1)
 .join('')`)}</nn-code>

  <p>Output</p>
  <nn-code>${t.compressText(`${p}`)}</nn-code>
</nn-caja>
`,e};var o,s,c;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  const {
    str
  } = args;
  const container = document.createElement('section');
  container.classList.add('workarea');
  const result = str.split('').sort(() => -1).join('');
  container.innerHTML = \`
<nn-caja padding="1rem" max-width="1200px">
  <h1>String Reverse</h1>

  <p>Input</p>
  <nn-code>\${nnCode.compressText(\`\${str}\`)}</nn-code>
  
  <p>Solution</p>
  <nn-code>\${nnCode.compressText(\`str
 .split('')
 .sort(() => -1)
 .join('')\`)}</nn-code>

  <p>Output</p>
  <nn-code>\${nnCode.compressText(\`\${result}\`)}</nn-code>
</nn-caja>
\`;
  return container;
}`,...(c=(s=n.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const g=["StringReverse"];export{n as StringReverse,g as __namedExportsOrder,x as default};
