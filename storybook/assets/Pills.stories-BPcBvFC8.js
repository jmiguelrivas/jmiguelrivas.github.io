import{S as i}from"./main-DjYwuoDZ.js";/* empty css             */const h={parameters:{layout:"fullscreen"},controls:{disable:!0}},o=`
nn-caja.preview {
  background: #b28256;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 700px;

  .box {
    width: 200px;
    position: relative;
    cursor: pointer;

    &:hover {
      .bottle {
        animation: 1400ms css-pills-bottle-jump linear infinite;
      }
      .shadow {
        animation: 1400ms css-pills-shadow-jump linear infinite;
      }
    }

    .shadow {
      background: rgba(96, 56, 19, 0.54);
      width: 100%;
      height: 50px;
      position: absolute;
      left: 0%;
      border-radius: 50%;
      top: 290px;
      z-index: 0;
      transition: all 1000ms ease;
    }

    .bottle {
      background: #f7931e;
      width: 80%;
      height: 320px;
      margin: auto;
      position: relative;
      transition: all 1000ms ease;
    }

    .cap {
      width: 120%;
      margin: 0 -10%;
      height: 30px;
      background: #fff;
      position: relative;
      text-align: center;
      padding-top: 4px;

      .crack {
        width: 4px;
        height: 20px;
        background: #ddd;
        margin: 0 2px;
        display: inline-block;
      }

      .level {
        background: #fff;
        width: 80%;
        height: 20px;
        position: absolute;
        top: -20px;
        left: 10%;

        &:before {
          content: "";
          display: block;
          background: #ddd;
          width: 100%;
          height: 8px;
          margin: 12px auto 0;
        }
      }
    }

    .inner_bottle {
      width: 80%;
      height: 80%;
      background: rgba(247, 207, 156, 0.3);
      margin: 7% auto;
      position: relative;
    }

    .brand {
      position: absolute;
      background: #e5e5e5;
      width: 80%;
      min-height: 180px;
      top: 25%;
      left: 10%;
      
      strong {
        display: block;
        font-size: 78pt;
        line-height: 0.7;
      }
    }
  }

  .capsule {
    background: #f2e322;
    width: 32px;
    height: 70px;
    border-radius: 15px;
    padding-top: 24%;
    position: absolute;

    &:before {
      content: "";
      background: #875912;
      display: block;
      width: 100%;
      height: 6px;
    }

    &.c01 {
      top: -5px;
      left: 60px;
      rotate: -80deg;
    }

    &.c02 {
      bottom: 0px;
      left: 8px;
      rotate: -20deg;
    }

    &.c03 {
      bottom: 8px;
      left: 43px;
      rotate: -10deg;
    }

    &.c04 {
      bottom: 0px;
      right: 10px;
      rotate: 20deg;
    }

    &.c05 {
      top: 5px;
      left: 10px;
      rotate: -20deg;
    }
  }

  .gloss {
    width: 15px;
    left: 30px;
    position: absolute;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 10px;

    &.g01 {
      top: 48px;
      height: 160px;
    }

    &.g02 {
      top: 220px;
      height: 50px;
    }
  }
}

@keyframes css-pills-bottle-jump {
  0% {
    top: 0px;
  }

  10% {
    top: -60px;
  }

  20% {
    top: 0px;
    rotate: 0deg;
  }

  30% {
    top: -40px;
    rotate: -10deg;
  }

  40% {
    top: 0px;
    rotate: 0deg;
  }

  50% {
    top: -20px;
    rotate: 6deg;
  }

  60% {
    top: 0px;
    rotate: 0deg;
  }

  70% {
    top: 0px;
    rotate: -2deg;
  }

  80% {
    top: 0px;
    rotate: 0deg;
  }

  90% {
    top: 0px;
    rotate: 0deg;
  }
}

@keyframes css-pills-shadow-jump {
  0% {
    width: 100%;
    left: 0%;
    opacity: 1;
  }

  10% {
    width: 70%;
    left: 15%;
    opacity: 0.5;
  }

  20% {
    width: 100%;
    left: 0%;
    opacity: 1;
  }

  30% {
    width: 140%;
    left: -40%;
    opacity: 0.7;
  }

  40% {
    width: 100%;
    left: 0%;
    opacity: 1;
  }

  50% {
    width: 130%;
    left: 0%;
    opacity: 0.8;
  }

  60% {
    width: 100%;
    left: 0%;
    opacity: 1;
  }

  70% {
    width: 105%;
    left: -5%;
    opacity: 1;
  }

  80% {
    width: 100%;
    left: 0%;
    opacity: 1;
  }

  90% {
    width: 100%;
    left: 0%;
    opacity: 1;
  }

  100% {
    width: 100%;
    left: 0%;
    opacity: 1;
  }
}
`,r=Array.from({length:15}).map(d=>'<div class="crack"></div>').join(""),a=`
<nn-caja padding="1rem" class="preview">
  <div class="box">
    <div class="shadow"></div>
    <div class="bottle">
      <div class="cap">
        ${r}
        <div class="level"></div>
      </div>
      <div class="inner_bottle">
        <div class="capsule c01"></div>
        <div class="capsule c02"></div>
        <div class="capsule c03"></div>
        <div class="capsule c04"></div>
        <div class="capsule c05"></div>
      </div>
      <div class="brand"></div>
      <div class="gloss g01"></div>
      <div class="gloss g02"></div>
    </div>
  </div>
</nn-caja>`,t=d=>{const e=document.createElement("section");return e.classList.add("workarea"),e.innerHTML+=`
<style>${o}</style>
${a}

<nn-caja padding="1rem" max-width="1200px">
  <h1>CSS Output:</h1>
  <nn-code>${i.compressText(`${o}`)}</nn-code>

  <h1>HTML Output:</h1>
  <nn-code>${i.compressText(`${a}`)}</nn-code>
  </nn-caja>
`,e};var s,n,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  const container = document.createElement('section');
  container.classList.add('workarea');
  container.innerHTML += \`
<style>\${style}</style>
\${html}

<nn-caja padding="1rem" max-width="1200px">
  <h1>CSS Output:</h1>
  <nn-code>\${Spirit.compressText(\`\${style}\`)}</nn-code>

  <h1>HTML Output:</h1>
  <nn-code>\${Spirit.compressText(\`\${html}\`)}</nn-code>
  </nn-caja>
\`;
  return container;
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const g=["Pills"];export{t as Pills,g as __namedExportsOrder,h as default};
