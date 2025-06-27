import"./main-BCPhkg1V.js";import i from"https://cdn.jsdelivr.net/gh/nano-grid/nano-grid@pombo_poderoso/dist/nanogrid.js";/* empty css             */import"https://cdn.jsdelivr.net/gh/nano-grid/nano-grid@pombo_poderoso/dist/gcolors.js";const{nnCode:o}=i,x={parameters:{layout:"fullscreen"},args:{str1:"a gentleman",str2:"elegant man"},argTypes:{str1:{control:"text"},str2:{control:"text"}}};function s(t){return t.split("").sort().join("").toLowerCase().replace(/\s*/,"")}function m(t,n){const r=s(t),e=s(n);return r===e}const c=t=>{const{str1:n,str2:r}=t,e=document.createElement("section");return e.classList.add("workarea"),e.innerHTML=`
<nn-caja padding="1rem" max-width="1200px">
  <h1>Anagram Checker</h1>

  <p>Input</p>
  <nn-code>${o.compressText(`[str1]: "${n}" = "${s(n)}"`)}</nn-code>
  <nn-code>${o.compressText(`[str2]: "${r}" = "${s(r)}"`)}</nn-code>
  
  <p>Solution</p>
  <nn-code>${o.compressText(`
function processWord(str) {
  return str
    .split('')
    .sort()
    .join('')
    .toLowerCase()
    .replace(/s*/, '')
}

function isAnagram(str1, str2) {
  const s1 = processWord(str1)
  const s2 = processWord(str2)
  return s1 === s2
}
    `)}</nn-code>

  <p>Output</p>
  <nn-code>${o.compressText(`"${s(n)}" = "${s(r)}" = ${m(n,r)}`)}</nn-code>
</nn-caja>
`,e};var a,p,d;c.parameters={...c.parameters,docs:{...(a=c.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  const {
    str1,
    str2
  } = args;
  const container = document.createElement('section');
  container.classList.add('workarea');
  container.innerHTML = \`
<nn-caja padding="1rem" max-width="1200px">
  <h1>Anagram Checker</h1>

  <p>Input</p>
  <nn-code>\${nnCode.compressText(\`[str1]: "\${str1}" = "\${processWord(str1)}"\`)}</nn-code>
  <nn-code>\${nnCode.compressText(\`[str2]: "\${str2}" = "\${processWord(str2)}"\`)}</nn-code>
  
  <p>Solution</p>
  <nn-code>\${nnCode.compressText(\`
function processWord(str) {
  return str
    .split('')
    .sort()
    .join('')
    .toLowerCase()
    .replace(/\\s*/, '')
}

function isAnagram(str1, str2) {
  const s1 = processWord(str1)
  const s2 = processWord(str2)
  return s1 === s2
}
    \`)}</nn-code>

  <p>Output</p>
  <nn-code>\${nnCode.compressText(\`"\${processWord(str1)}" = "\${processWord(str2)}" = \${isAnagram(str1, str2)}\`)}</nn-code>
</nn-caja>
\`;
  return container;
}`,...(d=(p=c.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const T=["Anagram"];export{c as Anagram,T as __namedExportsOrder,x as default};
