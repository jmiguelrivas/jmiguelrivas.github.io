import{c as o}from"./main-CGAxX0ND.js";/* empty css             */const $={parameters:{layout:"fullscreen"},args:{str1:"a gentleman",str2:"elegant man"},argTypes:{str1:{control:"text"},str2:{control:"text"}}};function s(t){return t.split("").sort().join("").toLowerCase().replace(/\s*/,"")}function i(t,n){const r=s(t),e=s(n);return r===e}const c=t=>{const{str1:n,str2:r}=t,e=document.createElement("section");return e.classList.add("workarea"),e.innerHTML=`
<nn-caja padding="4" size="1200">
  <h1>Anagram Checker</h1>

  <p>Input</p>
  <nn-code>${o(`[str1]: "${n}" = "${s(n)}"`)}</nn-code>
  <nn-code>${o(`[str2]: "${r}" = "${s(r)}"`)}</nn-code>
  
  <p>Solution</p>
  <nn-code>${o(`
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
  <nn-code>${o(`"${s(n)}" = "${s(r)}" = ${i(n,r)}`)}</nn-code>
</nn-caja>
`,e};var a,p,d;c.parameters={...c.parameters,docs:{...(a=c.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  const {
    str1,
    str2
  } = args;
  const container = document.createElement('section');
  container.classList.add('workarea');
  container.innerHTML = \`
<nn-caja padding="4" size="1200">
  <h1>Anagram Checker</h1>

  <p>Input</p>
  <nn-code>\${compressText(\`[str1]: "\${str1}" = "\${processWord(str1)}"\`)}</nn-code>
  <nn-code>\${compressText(\`[str2]: "\${str2}" = "\${processWord(str2)}"\`)}</nn-code>
  
  <p>Solution</p>
  <nn-code>\${compressText(\`
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
  <nn-code>\${compressText(\`"\${processWord(str1)}" = "\${processWord(str2)}" = \${isAnagram(str1, str2)}\`)}</nn-code>
</nn-caja>
\`;
  return container;
}`,...(d=(p=c.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const l=["Anagram"];export{c as Anagram,l as __namedExportsOrder,$ as default};
