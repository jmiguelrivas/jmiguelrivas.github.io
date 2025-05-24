import{S as o}from"./main-DHuDOF0U.js";/* empty css             */const l={parameters:{layout:"fullscreen"},controls:{disable:!0}},n=`
nn-caja.preview {
  background: #224157;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 700px;

  * {
    box-sizing: content-box;
  }

  #minibus {
    position: relative;
    width: 640px;
    height: 270px;
    border-radius: 70px 120px 40px 30px;
    background-color: #369ecb;

    .door_base {
      width: 200px;
      height: 80%;
      position: relative;
      margin: 0 250px;
      top: 45px;
      background-color: #292b33;
      perspective: 1000px;
      z-index: 1;
    }

    .door {
      width: 100%;
      height: 100%;
      transition: 500ms;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #ffa432;
      transform: translateZ(0);
    }

    &:hover .door {
      left: -95%;
      background-color: #ffc632;
      transform: translateZ(40px);
    }

    .window {
      height: 80px;
      position: absolute;
      background-color: #444;

      &.w01 {
        width: 160px;
        border-radius: 10px 70px 10px 10px;
        top: 55px;
        right: 12px;
      }

      &.w02 {
        width: 170px;
        border-radius: 10px;
        top: 10px;
        right: 15px;
      }

      &.w03 {
        width: 160px;
        border-radius: 30px 10px 10px 10px;
        top: 55px;
        left: 70px;

        .air_dust {
          --index: 0;
          top: calc(2% + 12px * var(--index));
          width: 35px;
          height: 9%;
          position: absolute;
          border-radius: 10px;
          background-color: #444;
          left: -45px;

          &.dust01 {
            --index: 0;
          }    
          &.dust02 {
            --index: 1;
          }
          &.dust03 {
            --index: 2;
          }
          &.dust04 {
            --index: 3;
          }
          &.dust05 {
            --index: 4;
          }
          &.dust06 {
            --index: 5;
          }
          &.dust07 {
            --index: 6;
          }
          &.dust08 {
            --index: 7;
          }
        }
      }
    }

    .handle {
      width: 47px;
      height: 8px;
      position: absolute;
      background-color: #242424;
      border-radius: 10px;

      &.h01 {
        top: 155px;
        right: 124px;
      }

      &.h02 {
        top: 110px;
        right: 15px;
      }
    }

    .roller {
      width: 50px;
      height: 50px;
      position: absolute;
      background-color: #bbb;
      border: solid 30px #2d2d2d;
      border-radius: 50%;
      bottom: -50px;

      &.r01 {
        right: 50px;
        animation: css-minivan-rolling-01 200ms alternate infinite;
      }
      &.r02 {
        left: 50px;
        animation: css-minivan-rolling-02 200ms alternate infinite;
      }
    }

    .bumper {
      width: 50px;
      height: 30px;
      bottom: 4px;
      position: absolute;
      border-radius: 20px;
      background-color: #b62c0b;

      &.front {
        right: -10px;
      }

      &.back {
        left: -13px;
      }
    }

    .shadow {
      width: 100%;
      height: 10px;
      bottom: -55px;
      position: absolute;
      border-radius: 20px;
      background-color: rgba(34, 34, 34, 0.45);
      animation: css-minivan-rolling-03 200ms alternate infinite;
      z-index: 0;
    }
  }
}

@keyframes css-minivan-rolling-01 {
  0% {
    right: 50px;
    bottom: -50px;
  }
  25% {
    right: 45px;
    bottom: -45px;
  }
  50% {
    right: 50px;
    bottom: -45px;
  }
  75% {
    right: 45px;
    bottom: -50px;
  }
}

@keyframes css-minivan-rolling-02 {
  0% {
    left: 50px;
    bottom: -50px;
  }
  25% {
    left: 45px;
    bottom: -45px;
  }
  50% {
    left: 50px;
    bottom: -45px;
  }
  75% {
    left: 45px;
    bottom: -50px;
  }
}

@keyframes css-minivan-rolling-03 {
  0% {
    bottom: -55px;
  }
  25% {
    bottom: -60px;
  }
  50% {
    bottom: -50px;
  }
  75% {
    bottom: -55px;
  }
}
`,p=Array.from({length:8}).map((d,t)=>`<div class="air_dust dust0${t+1}"></div>`).join(""),e=`
<nn-caja padding="1rem" class="preview">
  <div id="minibus">
    <div class="window w01"></div>
    <div class="window w03">
      ${p}
    </div>
    <div class="door_base">
      <div class="door">
        <div class="window w02"></div>
        <div class="handle h02"></div>
      </div>
    </div>
    <div class="roller r01"></div>
    <div class="roller r02"></div>
    <div class="handle h01"></div>
    <div class="bumper front"></div>
    <div class="bumper back"></div>
    <div class="shadow"></div>
  </div>
</nn-caja>`,i=d=>{const t=document.createElement("section");return t.classList.add("workarea"),t.innerHTML+=`
<style>${n}</style>
${e}

<nn-caja padding="1rem" max-width="1200px">
  <h1>CSS Output:</h1>
  <nn-code>${o.compressText(`${n}`)}</nn-code>

  <h1>HTML Output:</h1>
  <nn-code>${o.compressText(`${e}`)}</nn-code>
</nn-caja>
`,t};var r,s,a;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
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
}`,...(a=(s=i.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const m=["Minivan"];export{i as Minivan,m as __namedExportsOrder,l as default};
