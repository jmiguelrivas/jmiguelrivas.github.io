import{S as t}from"./main-DHuDOF0U.js";/* empty css             */const m={parameters:{layout:"fullscreen"},args:{str:"abcdefghijklmnopqrstuvwxyz"},argTypes:{str:{control:"text"}}},n=a=>{const{str:r}=a,e=document.createElement("section");e.classList.add("workarea");const p=r.split("").sort(()=>-1).join("");return e.innerHTML=`
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
`,e};var s,o,c;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
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
  <nn-code>\${Spirit.compressText(\`\${str}\`)}</nn-code>
  
  <p>Solution</p>
  <nn-code>\${Spirit.compressText(\`str
 .split('')
 .sort(() => -1)
 .join('')\`)}</nn-code>

  <p>Output</p>
  <nn-code>\${Spirit.compressText(\`\${result}\`)}</nn-code>
</nn-caja>
\`;
  return container;
}`,...(c=(o=n.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const u=["StringReverse"];export{n as StringReverse,u as __namedExportsOrder,m as default};
