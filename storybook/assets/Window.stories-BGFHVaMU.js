import"./main-BCPhkg1V.js";import l from"https://cdn.jsdelivr.net/gh/nano-grid/nano-grid@pombo_poderoso/dist/nanogrid.js";/* empty css             */import"https://cdn.jsdelivr.net/gh/nano-grid/nano-grid@pombo_poderoso/dist/gcolors.js";const{nnCode:a}=l,f={parameters:{layout:"fullscreen"},controls:{disable:!0}},t=`
nn-caja.preview {
  --doorColor: #04aaea;
  --hingeColor: #8e760e;
  --screwColor: #776512;
  --backgroundColor: #3da978;
  --hingeMargin: 70px;
  --backColor: rgba(20, 20, 20, 1);
  --shadowColor: rgba(34, 34, 34, 0.1);
  --windowsWidth: 250px;
  --windowsHeight: 400px;
  --flowerpotHeight: 100px;
  --flowerpotExtraWidth: 40px;
  --flowerpotDepth: 50px;
  --flowerpotColor: #9d5f31;

  background: #222;
  position: relative;
  height: 700px;

  #background {
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--backgroundColor);
    top: 0;
    left: 0;
    text-align: center;

    .stripe {
      width: 15%;
      height: 100%;
      background: color-mix(in srgb, var(--backgroundColor) 80%, black 5%);
      display: inline-block;
      margin: 0 6%;
    }
  }

  #windows {
    position: relative;
    width: var(--windowsWidth);
    height: var(--windowsHeight);
    margin: 5% auto 0;
    background-color: var(--backColor);
    perspective: 1000px;

    --frameOutWidth: 7px;
    --frameInWidth: 10px;
    --frameInWidthBorder: 2px;
    .frame {
      z-index: -1;
      position: absolute;
      &.out {
        background: #fffdff;
        width: var(--windowsWidth);
        height: var(--windowsHeight);
        padding: var(--frameOutWidth);
      }
      &.in {
        background: #f2f2f2;
        border: var(--frameInWidthBorder) solid #ddd;
        width: calc(var(--windowsWidth) - var(--frameOutWidth)  * 2);
        height: calc(var(--windowsHeight) - var(--frameOutWidth) * 2);
        padding: var(--frameInWidth);
      }
    }

    .interior {
      background: var(--backColor);
      width: calc(var(--windowsWidth) - var(--frameOutWidth) * 2 - var(--frameInWidth) * 2 - var(--frameInWidthBorder));
      height: calc(var(--windowsHeight) - var(--frameOutWidth) * 2 - var(--frameInWidth) * 2 - var(--frameInWidthBorder) * 2);
      padding: 0;
      margin: 0;
    }

    .hinge {
      position: absolute;
      width: 10px;
      height: 20px;

      .screw {
        border-radius: 50%;
        width: 3px;
        height: 3px;
        background: var(--screwColor);
        margin: 40% auto;
      }

      &.right {
        right: 0;
        transform: skewY(-5deg);
      }
      &.left {
        left: 0;
        transform: skewY(5deg);
      }
      &.top {
        top: var(--hingeMargin);
      }
      &.bottom {
        bottom: var(--hingeMargin);
      }

      &.outside {

        background: color-mix(in srgb, var(--hingeColor) 80%, black 10%);
      }
      &.inside {
        background: var(--hingeColor);
      }
    }

    .shadow {
      top: 0;
      position: absolute;
      width: 50%;
      height: 100%;
      background: var(--shadowColor);
      transition: 800ms;
      filter: blur(2px);

      &.right {
        right: 0;
        transform-origin: 100% 0;
      }
      &.left {
        left: 0;
        transform-origin: 0 0;
      }
    }

    .door {
      top: 0;
      position: absolute;
      width: 49.8%;
      height: 100%;
      transition: 1000ms;
      transform-style: preserve-3d;

      .base {
        width: 70%;
        height: 44%;
        padding-top: 2px;
        display: block;
        margin: 15px auto 20px auto;

        .hole {
          width: 100%;
          height: 3px;
  
          background: color-mix(in srgb, var(--doorColor) 80%, white 20%);
          display: block;
          margin: 0 0 7px 0;
          transform-origin: 50% 50%;
          transition: 300ms;
        }
      }

      &.right {
        right: 0;
        transform-origin: 100% 0;

        .face.top {
          transform: translate3D(0, 0, 10px) rotateY(90deg);
        }
      }

      &.left {
        left: 0;
        transform-origin: 0 0;

        .face.top {
          transform: translate3D(125px, 0, 10px) rotateY(90deg);
        }
      }
    }

    .face {
      position: absolute;
      transform-origin: 0 0;

      &.front,
      &.back {
        width: 100%;
        height: 100%;
      }
      &.front {
        background-color: var(--doorColor);
        transform: translate3D(0, 0, 10px);
        .base {
  
          background: color-mix(in srgb, var(--backColor) 80%, black 10%);
        }
      }
      &.back {

        background: color-mix(in srgb, var(--doorColor) 80%, black 5%);
        transform: translate3D(0, 0, 0);
        .base {
  
          background: color-mix(in srgb, var(--backColor) 80%, black 10%);
        }
      }

      &.top {
        width: 10px;
        height: 100%;

        background: color-mix(in srgb, var(--doorColor) 80%, black 10%);
      }
    }

    .flowerpot {
      width: calc(var(--windowsWidth) + var(--flowerpotExtraWidth));
      height: var(--flowerpotHeight);
      position: absolute;
      bottom: calc(-1 * var(--flowerpotHeight) - 40px);
      left: calc(-1 * var(--flowerpotExtraWidth) / 2);
      perspective: 1000px;

      .hook {
        width: 7px;
        height: 80px;
        position: absolute;

        background: color-mix(in srgb, var(--flowerpotColor) 80%, black 20%);
        top: -65px;
        border-radius: 6px;
        &.right {
          right: 40px;
          transform: skewX(5deg);
        }
        &.left {
          left: 40px;
          transform: skewX(-5deg);
        }
      }

      .flowers {
        width: 327px;
        height: 136px;
        position: absolute;
        z-index: 3;
        top: -27px;
        left: -12px;

      }

      .head {
        width: calc(var(--windowsWidth) + var(--flowerpotExtraWidth) + 10px);
        height: 20px;
        top: 0;
        left: -5px;
        position: absolute;
        background: color-mix(in srgb, var(--flowerpotColor) 80%, black 5%);
      }

      .frontFace {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 2;
        background: var(--flowerpotColor);
        transform-origin: 0 100%;
        transform: translateZ(var(--flowerpotDepth)) rotateX(-30deg);
      }

      .leftFace,
      .rightFace {
        width: var(--flowerpotDepth);
        height: 20px;
        position: absolute;
        z-index: 1;
        background: var(--flowerpotColor);
      }

      .leftFace {
        left: -5px;
        transform-origin: 0 100%;
        transform: rotateY(117deg) skewY(9deg);
      }

      .rightFace {
        right: -5px;
        transform-origin: 100% 100%;
        transform: rotateY(-117deg) skewY(-9deg);
      }

      .backFace {
        width: calc(var(--windowsWidth) + var(--flowerpotExtraWidth) + 10px);
        height: 20px;
        position: absolute;
        background: color-mix(in srgb, var(--flowerpotColor) 80%, black 14%);
        transform-origin: 0 100%;
        left: -5px;
      }
    }

    &:hover > .door .hole {
      background: color-mix(in srgb, var(--doorColor) 80%, white 5%);
      transform: scaleY(3);
    }

    &:hover > .frame form fieldset {
      opacity: 1;
    }

    &:hover > .door.right {
      transform: rotateY(170deg);
    }

    &:hover > .door.left {
      transform: rotateY(-170deg);
    }

    &:hover > .shadow.right {
      transform: scaleX(-1) translateY(20px) skewY(-5deg);
    }

    &:hover > .shadow.left {
      transform: scaleX(-1) translateY(20px) skewY(5deg);
    }

    &:target {
      & .door .hole {

        background: color-mix(in srgb, var(--doorColor) 80%, white 5%);
        transform: scaleY(3);
      }

      & .frame form fieldset {
        opacity: 1;
      }

      & .door.right {
        transform: rotateY(170deg);
      }

      & .door.left {
        transform: rotateY(-170deg);
      }

      & .shadow.right {
        transform: scaleX(-1) translateY(20px) skewY(-5deg);
      }

      & .shadow.left {
        transform: scaleX(-1) translateY(20px) skewY(5deg);
      }
    }
  }
}
`,r=Array.from({length:18}).map(c=>'<div class="hole"></div>').join(""),e=`
<nn-caja padding="1rem" class="preview">
  <div id="background">
    <div class="stripe"></div>
    <div class="stripe"></div>
    <div class="stripe"></div>
  </div>
  <div id="windows">
    <div class="shadow right"></div>
    <div class="shadow left"></div>
    <div class="flowerpot">
      <div class="hook right"></div>
      <div class="hook left"></div>
      <div class="flowers"></div>
      <div class="frontFace">
        <div class="head"></div>
      </div>
      <div class="backFace"></div>
      <div class="leftFace"></div>
      <div class="rightFace"></div>
    </div>
      <div class="hinge top right outside">
        <div class="screw"></div>
        <div class="screw"></div>
      </div>
      <div class="hinge bottom right outside">
        <div class="screw"></div>
        <div class="screw"></div>
      </div>
      <div class="hinge top left outside">
        <div class="screw"></div>
        <div class="screw"></div>
      </div>
      <div class="hinge bottom left outside">
        <div class="screw"></div>
        <div class="screw"></div>
      </div>
    <div class="frame out">
      <div class="frame in">
        <div class="interior"></div>
      </div>
    </div>
      <div class="door right">
        <div class="face front">
            <div class="base">
              ${r}
            </div>
            <div class="base">
              ${r}
            </div>
        </div>
        <div class="face back">
            <div class="hinge top right inside">
              <div class="screw"></div>
              <div class="screw"></div>
            </div>
            <div class="hinge bottom right inside">
              <div class="screw"></div>
              <div class="screw"></div>
            </div>
            <div class="base">
              ${r}
            </div>
            <div class="base">
              ${r}
            </div>
        </div>
        <div class="face top"></div>
      </div>
      <div class="door left">
        <div class="face front">
            <div class="base">
              ${r}
            </div>
            <div class="base">
              ${r}
            </div>
        </div>
        <div class="face back">
            <div class="hinge top left inside">
              <div class="screw"></div>
              <div class="screw"></div>
            </div>
            <div class="hinge bottom left inside">
              <div class="screw"></div>
              <div class="screw"></div>
            </div>
            <div class="base">
              ${r}
            </div>
            <div class="base">
              ${r}
            </div>
        </div>
        <div class="face top"></div>
      </div>
  </div>
</nn-caja>
`,o=c=>{const i=document.createElement("section");return i.classList.add("workarea"),i.innerHTML+=`
<style>${t}</style>
${e}

<nn-caja padding="1rem" max-width="1200px">
  <h1>CSS Output:</h1>
  <nn-code>${a.compressText(`${t}`)}</nn-code>

  <h1>HTML Output:</h1>
  <nn-code>${a.compressText(`${e}`)}</nn-code>
</nn-caja>
`,i};var s,d,n;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  const container = document.createElement('section');
  container.classList.add('workarea');
  container.innerHTML += \`
<style>\${style}</style>
\${html}

<nn-caja padding="1rem" max-width="1200px">
  <h1>CSS Output:</h1>
  <nn-code>\${nnCode.compressText(\`\${style}\`)}</nn-code>

  <h1>HTML Output:</h1>
  <nn-code>\${nnCode.compressText(\`\${html}\`)}</nn-code>
</nn-caja>
\`;
  return container;
}`,...(n=(d=o.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};const w=["Window"];export{o as Window,w as __namedExportsOrder,f as default};
