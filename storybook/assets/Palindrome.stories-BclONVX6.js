import{S as r}from"./main-DjYwuoDZ.js";/* empty css             */const u={parameters:{layout:"fullscreen"},args:{str:"abcdefedcba"},argTypes:{str:{control:"text"}}};function d(e){return e.split("").map((n,o)=>n===e[e.length-o-1]).reduce((n,o)=>n&&o)}const t=e=>{const{str:s}=e,n=document.createElement("section");return n.classList.add("workarea"),n.innerHTML=`
<nn-caja padding="1rem" max-width="1200px">
  <h1>Palindrome Checker</h1>
  
  <p>Input</p>
  <nn-code>${r.compressText(`[str]: ${s}`)}</nn-code>

  <p>Solution 1</p>
  <nn-code>${r.compressText(`
function isPalindrome(str) {
  let result = true
  for (let c = 0; c < str.length; c++) {
    if (str[c] !== str[str.length - c - 1]) {
      result = false
    }
  }
  return result
}
`)}</nn-code>

<p>Solution 2</p>
  <nn-code>${r.compressText(`
function isPalindrome(str) {
  const result = str
    .split('')
    .map((e, index) => {
      return e === str[str.length - index - 1]
    }).reduce((a,b) => a && b)
  return result
}
`)}</nn-code>

  <p>Output</p>
  <nn-code>${r.compressText(`${d(s)}`)}</nn-code>
</nn-caja>
`,n};var c,a,i;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  const {
    str
  } = args;
  const container = document.createElement('section');
  container.classList.add('workarea');
  container.innerHTML = \`
<nn-caja padding="1rem" max-width="1200px">
  <h1>Palindrome Checker</h1>
  
  <p>Input</p>
  <nn-code>\${Spirit.compressText(\`[str]: \${str}\`)}</nn-code>

  <p>Solution 1</p>
  <nn-code>\${Spirit.compressText(\`
function isPalindrome(str) {
  let result = true
  for (let c = 0; c < str.length; c++) {
    if (str[c] !== str[str.length - c - 1]) {
      result = false
    }
  }
  return result
}
\`)}</nn-code>

<p>Solution 2</p>
  <nn-code>\${Spirit.compressText(\`
function isPalindrome(str) {
  const result = str
    .split('')
    .map((e, index) => {
      return e === str[str.length - index - 1]
    }).reduce((a,b) => a && b)
  return result
}
\`)}</nn-code>

  <p>Output</p>
  <nn-code>\${Spirit.compressText(\`\${isPalindrome(str)}\`)}</nn-code>
</nn-caja>
\`;
  return container;
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const m=["Palindrome"];export{t as Palindrome,m as __namedExportsOrder,u as default};
