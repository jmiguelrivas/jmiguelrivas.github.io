const q="mr";function S(t){return[q,t].join("-")}function u({type:t,parent:e,text:n,attrs:a,innerHTML:r}){const s=document.createElement(t||"div");return s.innerHTML=r||"",n&&s.appendChild(document.createTextNode(n)),a&&Object.entries(a).forEach(([i,l])=>{const c=document.createAttribute(i);c.value=l,s.setAttributeNode(c)}),e&&e.appendChild(s),s}const H=[{name:"Home",url:"2025/index",icon:"home"}],j=[{name:"LOM Merged Servers Timeline",url:"lom/timeline",icon:"gamepad",hidden:!0},{name:"LOM Merged Servers",url:"lom/merged",icon:"gamepad",hidden:!0},{name:"LOM Merged Gaps Tracker",url:"lom/gaps",icon:"gamepad",hidden:!0},{name:"LOM Users",url:"lom/users",icon:"gamepad",hidden:!0}],z=[{name:"Iconos",url:"nano/iconos",icon:"paint-brush",hidden:!0}],F=[{name:"13 Months Calendar",url:"calendar/calendar",icon:"calendar",tags:["react 19"]},{name:"Color Cube",url:"cube/cube",icon:"cube",tags:["web-components","threejs"]}],I=window.location.search,k=[H,F,j,z].map(t=>[t,{separator:!0,hidden:!0}]).flat(2).map(t=>({...t,...t!=null&&t.hidden?{}:{hidden:!1}})).map(t=>t.separator?{separator:!0,hidden:t.hidden}:{name:t.name,url:`../${t.url}.html${t!=null&&t.id?"#"+t.id:""}${I}`,icon:t.icon,hidden:t.hidden,tags:t.tags});k.pop();const R=`
<nn-fila>
  <nn-pilar size="50px" class="navigation">
    <nav></nav>
  </nn-pilar>
  <nn-pilar size="100% - 50px" class="workarea">
    <nn-desplazador>
      <main></main>
    </nn-desplazador>
  </nn-pilar>
</nn-fila>
`,C={routes:k,tools:[]},B={wip:"sunglow","react 19":"shamrock","web-components":"shamrock","vue 2":"shamrock",threejs:"royal-purple",konva:"royal-purple"};class P extends HTMLElement{constructor(){super()}generateNavItems(e){const n=this.querySelector("nav"),a=u({type:"ul",parent:n}),r=this.getAttribute("route");e.forEach(s=>{var l;const i=u({type:"li",parent:a});if(s!=null&&s.separator)u({type:"hr",parent:i});else{let c;(s==null?void 0:s.name)===r?c=u({type:"div",parent:i,attrs:{class:"btn-icon active"}}):s!=null&&s.url?c=u({type:"a",parent:i,attrs:{class:"btn-icon",href:s.url,target:"_self"}}):s.fn&&(c=u({type:"button",parent:i,attrs:{class:"btn-icon"}}),c.addEventListener("click",s.fn));const h=u({type:"span",parent:c,text:s.name,attrs:{class:"tooltip"}}),E=u({type:"span",parent:h,attrs:{class:"tags"}});(l=s==null?void 0:s.tags)==null||l.forEach(y=>{u({type:"span",parent:E,text:y,attrs:{class:["pill",B[y]].join(" ")}})}),u({type:"nn-icono",parent:c,attrs:{class:s.icon}})}})}insertSlot(e){const n=this.querySelector(".workarea > nn-desplazador > main");n.innerHTML=e}connectedCallback(){const e=this.innerHTML;this.innerHTML=R,this.generateNavItems(C.routes),this.generateNavItems(C.tools),this.insertSlot(e),document.body.classList.add("dark")}}window.customElements.define(S("app"),P);const N="nn-";function p(t){return[N,t].join("")}function O(t){const[e,n]=t.split("/").map(Number);return{str:t,value:e/n}}const $=["1/20","1/19","1/18","1/17","1/16","1/15","1/14","1/13","1/12","1/11","1/10","1/9","1/8","1/7","3/20","1/6","1/5","1/4","3/10","1/3","7/20","2/5","5/12","9/20","1/2","11/20","7/12","3/5","13/20","2/3","7/10","3/4","4/5","5/6","17/20","9/10","11/12","19/20","1/1"].map(O);function A(t){return t&&t.str.split("/").reduce((e,n)=>["n",e,"d",n].join(""))}const D=new Map($.map(t=>[t.value,t])),V=new Map($.map(t=>[t.str,t]));function _(t){const e=parseFloat(t)/100;return A(D.get(e))}function W(t){return A(V.get(t))}class J extends HTMLElement{constructor(){super()}removeCustomClass(e){[...this.classList].forEach(n=>e.test(n)&&this.classList.remove(n))}updateAttr(e,n){this.removeCustomClass(n);const a=this.getAttribute(e);if(!a)return;const r=/[-+*]/g.test(a),s=/\d+%/.test(a),i=/\d+\/\d+/.test(a),l=/([mc]m|ex|ch|v[wh]|v(min|max)|p[ctx]|r?em|[-+*])/.test(a);if(s&&!l){const c=_(a);c&&this.classList.add(c);return}if(i&&!l){const c=W(a);c&&this.classList.add(c);return}if(l){const c=r?`calc(${a})`:a;this.style.width=c,this.style.maxWidth=c,this.style.flexBasis=c}}connectedCallback(){this.updateAttr("size",/\d+\/\d+/)}static get observedAttributes(){return["size"]}attributeChangedCallback(e){switch(e){case"size":this.updateAttr("size",/\d+\/\d+/);break}}}window.customElements.define(p("pilar"),J);const b={attrs:[{name:"gap",regex:/gap-(\d)*/g,prefix:"gap"},{name:"padding-inline",regex:/pi-(\d)*/g,prefix:"pi"}]};class X extends HTMLElement{constructor(){super()}removeCustomClass(e){[...this.classList].forEach(n=>e.test(n)&&this.classList.remove(n))}updateAttr(e){this.removeCustomClass(e.regex);const n=this.getAttribute(e.name);e&&this.classList.add([e.prefix,n].join("-"))}connectedCallback(){b.attrs.forEach(e=>this.updateAttr(e))}static get observedAttributes(){return b.attrs.map(e=>e.name)}attributeChangedCallback(e){var a;const n=(a=b.attrs.find(r=>r.name===e))==null?void 0:a[0];n&&this.updateAttr(n)}}window.customElements.define(p("fila"),X);const x={attrs:[{name:"padding",regex:/p-(\d)*/g,prefix:"p"},{name:"size",regex:/mw-(\d)*/g,prefix:"mw"}]};class G extends HTMLElement{constructor(){super()}removeCustomClass(e){[...this.classList].forEach(n=>e.test(n)&&this.classList.remove(n))}updateAttr({name:e,regex:n,prefix:a}){this.removeCustomClass(n);const r=this.getAttribute(e);r&&this.classList.add([a,r].join("-"))}connectedCallback(){x.attrs.forEach(e=>this.updateAttr(e))}static get observedAttributes(){return x.attrs.map(e=>e.name)}attributeChangedCallback(e){var a;const n=(a=x.attrs.find(r=>r.name===e))==null?void 0:a[0];n&&this.updateAttr(n)}}window.customElements.define(p("caja"),G);const U=`
  <button
    type="button"
    aria-expanded="true"
    aria-controls="collapseOne">
  </button>
  <div></div>
`,m={content:"",attrs:[{name:"titulo"}]};class K extends HTMLElement{constructor(){super()}updateAttr(e,n,a){this.getAttribute(e)}connectedCallback(){m.attrs.forEach(e=>this.updateAttr(e)),m.content=this.innerHTML,this.innerHTML=U,this.querySelector("button").innerHTML=this.getAttribute("title"),this.querySelector("div").innerHTML=m.content}static get observedAttributes(){return m.attrs.map(e=>e.name)}attributeChangedCallback(e){var a;const n=(a=m.attrs.find(r=>r.name===e))==null?void 0:a[0];n&&this.updateAttr(n)}}window.customElements.define(p("paso"),K);class Q extends HTMLElement{constructor(){super()}}window.customElements.define(p("icono"),Q);const Y=`
  <nn-icono class="star"></nn-icono>
  <span class="content"></span>
`,f={content:"",attrs:{name:"icono"}};class Z extends HTMLElement{constructor(){super()}updateTooltip(){f.content=this.innerHTML,this.innerHTML=Y;const e=this.querySelector(".content");e.innerHTML=f.content}updateIcon(){const e=this.getAttribute("icono"),n=this.querySelector("nn-icono");n.className=e||"star"}connectedCallback(){this.updateTooltip(),this.updateIcon()}static get observedAttributes(){return Object.values(f.attrs).map(e=>e.name)}attributeChangedCallback(e){switch(e){case"icono":this.updateIcon();break}}}window.customElements.define(p("ayuda"),Z);class ee extends HTMLElement{constructor(){super()}}window.customElements.define(p("desplazador"),ee);class te extends HTMLElement{constructor(){super()}connectedCallback(){this.innerHTML=ae(this.innerHTML)}static get observedAttributes(){return["nn-text"]}}const d=(t,e)=>`<span class='nn-${e}'>${t}</span>`,o=t=>`♥♥${t}♥♥`;function v(t){return t.trim().replace(/\n/g,o("n-line")).replace(/\t/g,o("tab")).replace(/\s/g,o("space")).replace(/</g,o("lt")).replace(/>/g,o("gt")).replace(/&/g,o("amp")).replace(/\//g,o("slash")).replace(/\*/g,o("asterik")).replace(/\'/g,o("s-quote")).replace(/\"/g,o("d-quote")).replace(/\`/g,o("acute")).replace(/\(/g,o("parenthesis-o")).replace(/\[/g,o("bracket-o")).replace(/\{/g,o("brace-o")).replace(/\)/g,o("parenthesis-c")).replace(/\]/g,o("bracket-c")).replace(/\}/g,o("brace-c"))}function ne(t){return t.replace(/(♥♥n-line♥♥)/g,`${d("","n-line")}<br>`).replace(/(♥♥tab♥♥)/g,d("","tab")).replace(/(♥♥space♥♥)/g,d("","space")).replace(/(♥♥lt♥♥)/g,"&#60;").replace(/(♥♥gt♥♥)/g,"&#62;").replace(/(♥♥amp♥♥)/g,"&#38;").replace(/(♥♥slash♥♥)/g,"&#47;").replace(/(♥♥asterik♥♥)/g,"&#42;").replace(/(♥♥s-quote♥♥)/g,"&#39;").replace(/(♥♥d-quote♥♥)/g,"&#34;").replace(/(♥♥acute♥♥)/g,"&#180;").replace(/(♥♥parenthesis-o♥♥)/g,"&#40;").replace(/(♥♥bracket-o♥♥)/g,"&#91;").replace(/(♥♥brace-o♥♥)/g,"&#123;").replace(/(♥♥parenthesis-c♥♥)/g,"&#41;").replace(/(♥♥bracket-c♥♥)/g,"&#93;").replace(/(♥♥brace-c♥♥)/g,"&#125;")}function ae(t){return`${ne(v(t).replace(/(♥♥s-quote♥♥|♥♥d-quote♥♥|♥♥acute♥♥).*?(♥♥s-quote♥♥|♥♥d-quote♥♥|♥♥acute♥♥)/g,n=>d(n,"string")).replace(/(♥♥slash♥♥)(♥♥slash♥♥).*?(♥♥newline♥♥)/g,n=>d(n,"comment")).replace(/(new|import|from|get|set)/g,n=>d(n,"reserved")).replace(/(♥♥slash♥♥)(♥♥asterik♥♥).*?(♥♥asterik♥♥)(♥♥slash♥♥)/g,n=>d(n,"comment")).replace(/(true|false|undefined|null)/g,n=>d(n,"boolean")).replace(/[+-]?(\d+)?\.?(\d+)/g,n=>d(n,"number")).replace(/(♥♥lt♥♥).*?(♥♥gt♥♥)/g,n=>d(n,"type")).replace(/(♥♥parenthesis-o♥♥|♥♥bracket-o♥♥|♥♥brace-o♥♥|♥♥parenthesis-c♥♥|♥♥bracket-c♥♥|♥♥brace-c♥♥)/g,n=>d(n,"parenthesis")))}`}window.customElements.define("nn-code",te);const re={title:"Research/Bounce Range",args:{min:50,max:150},argTypes:{min:{control:"number"},max:{control:"number"}},parameters:{layout:"fullscreen"}};function w({min:t,max:e,value:n}){const a=Math.PI/180;return Math.abs(Math.sin(n*a))*(e-t)+t}function se(t,e){const n=90/(e-1);let a="";for(let r=t,s=t;r<e;r++,s+=n){const i=s*(Math.PI/180),l=Math.sin(i),c=w({min:t,max:e,value:s});a+=`
      <tr>
        <td>${r-t}</td>
        <td>${s.toFixed(2)}</td>
        <td>${i.toFixed(2)}</td>
        <td>${l.toFixed(2)}</td>
        <td>${c.toFixed(2)}</td>
      </tr>
    `}return a}const g=t=>{const{min:e,max:n}=t,a=document.createElement("section");return a.classList.add("workarea"),a.innerHTML=`
  <nn-caja padding="4" size="1200">
    <h2>Bounce Range</h2>
    <p>This experiment simplifies a range that oscillates between a minimum and maximum value using sine functions.</p>

    <dl>
      <dt>Min:</dt><dd>${e}</dd>
      <dt>Max:</dt><dd>${n}</dd>
      <dt>Test Range:</dt><dd>[${e}, ${n}]</dd>
      <dt>X:</dt><dd id="x-axis">0</dd>
    </dl>

    <canvas id="bounce-canvas" height="300" style="width: 100%; margin-bottom: 1rem;"></canvas>

    <nn-code>${v(`${w}`)}</nn-code>

     <p>I adjusted the counter to slow down how quickly it reaches the limits. Now, the number of steps required to reach the maximum value is equal to the maximum itself.</p>

      <p>For example, if the maximum is 1200, it will take 1200 steps to reach the limit.</p>

      <nn-code>${v(`
const max = ${n}
const min = ${e}
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
      <tbody>${se(e,n)}</tbody>
    </table>
    </nn-caja>
  `,requestAnimationFrame(()=>{const r=a.querySelector("#bounce-canvas"),s=r.getContext("2d"),i=a.querySelector("#x-axis");let l=0;const c=()=>{l++;const h=w({min:e,max:n,value:l});i.textContent=h.toFixed(2),s.clearRect(0,142,r.width,16),s.beginPath(),s.fillStyle="#fff",s.arc(h,150,8,0,2*Math.PI),s.fill(),requestAnimationFrame(c)};r.width=r.offsetWidth,r.height=300,c()}),a};var M,T,L;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
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

    <nn-code>\${compressText(\`\${limitBounce}\`)}</nn-code>

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
}`,...(L=(T=g.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};const ce=["BounceRange"];export{g as BounceRange,ce as __namedExportsOrder,re as default};
