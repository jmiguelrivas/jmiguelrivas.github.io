class SpiritJs extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'closed' })
    const wrapper = document.createElement('code')
    const styles = document.createElement('style')

    wrapper.innerHTML = formatJs(this.innerHTML)
    this.innerHTML = ''

    styles.textContent = `
      code {
        display: block;
        background-color: #171922;
        color: #a38ce5;
        padding: 0.5rem;
        text-align: left;
        font-family: "Lucida Console", Courier, monospace;
        line-height: 1.5;
        overflow-x: auto;
      }

      .nn-newline:before {
        content: "⤵";
      }
      .nn-space:before {
        content: "·";
      }
      .nn-tab:before {
        content: "→";
      }

      .nn-string,
      .nn-boolean,
      .nn-number,
      .nn-type {
        transition: background 100ms ease, color 100ms ease;
        padding-block: 0.05rem;
        border-radius: 5px;
        font-weight: 600;
      }

      .nn-string * {
        padding: 0;
      }

      .nn-reserved { color: #88c8ff; }
      .nn-boolean { color: #88c8ff; }
      .nn-number { color: #e6b033; }
      .nn-type { color: #3f7fc3; }
      .nn-parenthesis { color: #e76464; }
      
      .nn-string,
      .nn-string * { color: #2edb35; }
      
      .nn-comment,
      .nn-comment * { color: #666; }
      
      .nn-space,
      .nn-tab,
      .nn-newline {
        color: rgba(255,255,255,0.1) !important;
        padding-inline: 0.1rem;
      }

      .nn-string:hover,
      .nn-boolean:hover,
      .nn-number:hover,
      .nn-type:hover {
        background: rgba(237,199,0, 0.13);
        
      }

      .nn-string:hover * {
        background: transparent;
        color: inherit;
      }
    `

    shadow.appendChild(styles)
    shadow.appendChild(wrapper)
  }

  static get observedAttributes() {
    return [
      'nn-text',
    ]
  }
}

const spirit = (word, klaso) => `<span class='nn-${klaso}'>${word}</span>`
const escapeChar = char => `♥♥${char}♥♥`

export function compressText(text) {
  return text
    .trim()
    .replace(/\n/g, escapeChar('n-line'))
    .replace(/\t/g, escapeChar('tab'))
    .replace(/\s/g, escapeChar('space'))
    .replace(/</g, escapeChar('lt'))
    .replace(/>/g, escapeChar('gt'))
    .replace(/&/g, escapeChar('amp'))
    .replace(/\//g, escapeChar('slash'))
    .replace(/\*/g, escapeChar('asterik'))
    .replace(/\'/g, escapeChar('s-quote'))
    .replace(/\"/g, escapeChar('d-quote'))
    .replace(/\`/g, escapeChar('acute'))
    .replace(/\(/g, escapeChar('parenthesis-o'))
    .replace(/\[/g, escapeChar('bracket-o'))
    .replace(/\{/g, escapeChar('brace-o'))
    .replace(/\)/g, escapeChar('parenthesis-c'))
    .replace(/\]/g, escapeChar('bracket-c'))
    .replace(/\}/g, escapeChar('brace-c'))
}

export function decompressText(text) {
  return text
    .replace(/(♥♥n-line♥♥)/g, `${spirit('', 'n-line')}<br>`)
    .replace(/(♥♥tab♥♥)/g, spirit('', 'tab'))
    .replace(/(♥♥space♥♥)/g, spirit('', 'space'))
    .replace(/(♥♥lt♥♥)/g, '&#60;')
    .replace(/(♥♥gt♥♥)/g, '&#62;')
    .replace(/(♥♥amp♥♥)/g, '&#38;')
    .replace(/(♥♥slash♥♥)/g, '&#47;')
    .replace(/(♥♥asterik♥♥)/g, '&#42;')
    .replace(/(♥♥s-quote♥♥)/g, '&#39;')
    .replace(/(♥♥d-quote♥♥)/g, '&#34;')
    .replace(/(♥♥acute♥♥)/g, '&#180;')
    .replace(/(♥♥parenthesis-o♥♥)/g, '&#40;')
    .replace(/(♥♥bracket-o♥♥)/g, '&#91;')
    .replace(/(♥♥brace-o♥♥)/g, '&#123;')
    .replace(/(♥♥parenthesis-c♥♥)/g, '&#41;')
    .replace(/(♥♥bracket-c♥♥)/g, '&#93;')
    .replace(/(♥♥brace-c♥♥)/g, '&#125;')
}

function formatJs(text) {
  const computedText = decompressText(
    compressText(text)

      .replace(/(♥♥s-quote♥♥|♥♥d-quote♥♥|♥♥acute♥♥).*?(♥♥s-quote♥♥|♥♥d-quote♥♥|♥♥acute♥♥)/g, (match) => {
        return spirit(match, 'string')
      })

      .replace(/(♥♥slash♥♥)(♥♥slash♥♥).*?(♥♥newline♥♥)/g, (match) => {
        return spirit(match, 'comment')
      })

      .replace(/(new|import|from|get|set)/g, (match) => {
        return spirit(match, 'reserved')
      })

      .replace(/(♥♥slash♥♥)(♥♥asterik♥♥).*?(♥♥asterik♥♥)(♥♥slash♥♥)/g, (match) => {
        return spirit(match, 'comment')
      })

      .replace(/(true|false|undefined|null)/g, (match) => {
        return spirit(match, 'boolean')
      })

      .replace(/[+-]?(\d+)?\.?(\d+)/g, (match) => {
        return spirit(match, 'number')
      })

      .replace(/(♥♥lt♥♥).*?(♥♥gt♥♥)/g, (match) => {
        return spirit(match, 'type')
      })

      .replace(/(♥♥parenthesis-o♥♥|♥♥bracket-o♥♥|♥♥brace-o♥♥|♥♥parenthesis-c♥♥|♥♥bracket-c♥♥|♥♥brace-c♥♥)/g, (match) => {
        return spirit(match, 'parenthesis')
      }),
  )

  return `${computedText}`
}

window.customElements.define('nn-code', SpiritJs)