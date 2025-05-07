import '../../0_global/js/index.js'
import '../../0_global/css/main.css'
import '../assets/docs.css'
import { compressText } from '../../0_global/js/nano_spirit.js'

export default {
  parameters: {
    layout: 'fullscreen',
  },
  controls: {
    disable: true,
  },
}

const style = `
nn-caja.preview {
  background: #224157;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 520px;

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
      background-color: #111;
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
          width: 35px;
          height: 9%;
          position: absolute;
          border-radius: 10px;
          background-color: #444;
          left: -45px;

          $plus: 12;

          &.dust01 {
            top: 2%;
          }
          &.dust02 {
            top: 2% + $plus * 1;
          }
          &.dust03 {
            top: 2% + $plus * 2;
          }
          &.dust04 {
            top: 2% + $plus * 3;
          }
          &.dust05 {
            top: 2% + $plus * 4;
          }
          &.dust06 {
            top: 2% + $plus * 5;
          }
          &.dust07 {
            top: 2% + $plus * 6;
          }
          &.dust08 {
            top: 2% + $plus * 7;
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
      width: 100;
      height: 10px;
      bottom: -55px;
      position: absolute;
      border-radius: 20px;
      background-color: rgba(34, 34, 34, 0.45);
      animation: css-minivan-rolling-03 200ms alternate infinite;
      z-index: -1;
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
`

export const Minivan = args => {
  const container = document.createElement('section')
  container.classList.add('workarea')

  const airdust = Array.from({
    length: 8,
  })
    .map((e, i) => `<div class="air_dust dust0${i + 1}"></div>`)
    .join('')

  container.innerHTML += `
<style>${style}</style>
<nn-caja padding="4" class="preview">
  <div id="minibus">
    <div class="window w01"></div>
    <div class="window w03">
      ${airdust}
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
</nn-caja>

<nn-caja padding="4" size="1200">
<h1>CSS Output:</h1>
  <nn-code>${compressText(`${style}`)}</nn-code>
  </nn-caja>
`
  return container
}
