import{c as t}from"./main-CGAxX0ND.js";/* empty css             */const u={parameters:{layout:"fullscreen"},args:{str:"abcdefghijklmnopqrstuvwxyz"},argTypes:{str:{control:"text"}}},n=a=>{const{str:r}=a,e=document.createElement("section");e.classList.add("workarea");const p=r.split("").sort(()=>-1).join("");return e.innerHTML=`
<nn-caja padding="4" size="1200">
  <h1>String Reverse</h1>

  <p>Input</p>
  <nn-code>${t(`${r}`)}</nn-code>
  
  <p>Solution</p>
  <nn-code>${t(`str
 .split('')
 .sort(() => -1)
 .join('')`)}</nn-code>

  <p>Output</p>
  <nn-code>${t(`${p}`)}</nn-code>
</nn-caja>
`,e};var s,o,c;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  const {
    str
  } = args;
  const container = document.createElement('section');
  container.classList.add('workarea');
  const result = str.split('').sort(() => -1).join('');
  container.innerHTML = \`
<nn-caja padding="4" size="1200">
  <h1>String Reverse</h1>

  <p>Input</p>
  <nn-code>\${compressText(\`\${str}\`)}</nn-code>
  
  <p>Solution</p>
  <nn-code>\${compressText(\`str
 .split('')
 .sort(() => -1)
 .join('')\`)}</nn-code>

  <p>Output</p>
  <nn-code>\${compressText(\`\${result}\`)}</nn-code>
</nn-caja>
\`;
  return container;
}`,...(c=(o=n.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const l=["StringReverse"];export{n as StringReverse,l as __namedExportsOrder,u as default};
