import"./main-BCPhkg1V.js";import i from"https://cdn.jsdelivr.net/gh/nano-grid/nano-grid@pombo_poderoso/dist/nanogrid.js";/* empty css             */import"https://cdn.jsdelivr.net/gh/nano-grid/nano-grid@pombo_poderoso/dist/gcolors.js";const{nnCode:t}=i,f={parameters:{layout:"fullscreen"},args:{str:"abcdefedcba"},argTypes:{str:{control:"text"}}};function l(e){return e.split("").map((n,o)=>n===e[e.length-o-1]).reduce((n,o)=>n&&o)}const r=e=>{const{str:s}=e,n=document.createElement("section");return n.classList.add("workarea"),n.innerHTML=`
<nn-caja padding="1rem" max-width="1200px">
  <h1>Palindrome Checker</h1>
  
  <p>Input</p>
  <nn-code>${t.compressText(`[str]: ${s}`)}</nn-code>

  <p>Solution 1</p>
  <nn-code>${t.compressText(`
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
  <nn-code>${t.compressText(`
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
  <nn-code>${t.compressText(`${l(s)}`)}</nn-code>
</nn-caja>
`,n};var c,a,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  const {
    str
  } = args;
  const container = document.createElement('section');
  container.classList.add('workarea');
  container.innerHTML = \`
<nn-caja padding="1rem" max-width="1200px">
  <h1>Palindrome Checker</h1>
  
  <p>Input</p>
  <nn-code>\${nnCode.compressText(\`[str]: \${str}\`)}</nn-code>

  <p>Solution 1</p>
  <nn-code>\${nnCode.compressText(\`
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
  <nn-code>\${nnCode.compressText(\`
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
  <nn-code>\${nnCode.compressText(\`\${isPalindrome(str)}\`)}</nn-code>
</nn-caja>
\`;
  return container;
}`,...(d=(a=r.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const h=["Palindrome"];export{r as Palindrome,h as __namedExportsOrder,f as default};
