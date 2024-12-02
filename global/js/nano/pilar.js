import { nano } from './helpers.js'

const sizes = [
  '1/20',
  '1/19',
  '1/18',
  '1/17',
  '1/16',
  '1/15',
  '1/14',
  '1/13',
  '1/12',
  '1/11',
  '1/10',
  '1/9',
  '1/8',
  '1/7',
  '3/20',
  '1/6',
  '1/5',
  '1/4',
  '3/10',
  '1/3',
  '7/20',
  '2/5',
  '5/12',
  '9/20',
  '1/2',
  '11/20',
  '7/12',
  '3/5',
  '13/20',
  '2/3',
  '7/10',
  '3/4',
  '4/5',
  '5/6',
  '17/20',
  '9/10',
  '11/12',
  '19/20',
  '1/1',
].map(size => ({
  str: size,
  value: size.split('/').reduce((a, b) => a / b),
}))

function formatClass(fraction) {
  return (
    fraction &&
    fraction.str
      .split('/')
      .reduce((numerator, denominator) =>
        ['n', numerator, 'd', denominator].join('')
      )
  )
}

function percent2Class(percent) {
  const percentValue = percent.split('%')[0] / 100
  return formatClass(sizes.find(size => size.value === percentValue))
}

function fraction2Class(fraction) {
  return formatClass(sizes.find(size => size.str === fraction))
}

class Pilar extends HTMLElement {
  constructor() {
    super()
  }

  removeCustomClass(regex) {
    ;[...this.classList].forEach(
      currentClass =>
        regex.test(currentClass) && this.classList.remove(currentClass)
    )
  }

  updateAttr(name, regex) {
    this.removeCustomClass(regex)

    const size = this.getAttribute(name)

    const isCalc = /[-+*]/g.test(size)
    const hasPercent = /(\d)*%/g.test(size)
    const hasFraction = /(\d)*\/(\d)*/g.test(size)
    const isStyle =
      /([mc]m)|(ex)|(ch)|(v[wh])|(v(min|max))|(p[ctx])|(r?em)|[-+*]/g.test(size)

    let newClass, newStyle

    if (hasPercent && !isStyle) {
      newClass = percent2Class(size)
    } else if (hasFraction && !isStyle) {
      newClass = fraction2Class(size)
    }

    if (isStyle && isCalc) {
      newStyle = `calc(${size})`
    } else if (isStyle) {
      // px sizes
      newStyle = size
    }

    if (newClass) {
      this.classList.add(newClass)
    } else if (newStyle) {
      this.style.width = newStyle
      this.style.maxWidth = newStyle
      this.style.flexBasis = newStyle
    }
  }

  connectedCallback() {
    this.updateAttr('size', /n(\d)*d(\d)*/g)
  }

  static get observedAttributes() {
    return ['size']
  }

  attributeChangedCallback(prop) {
    switch (prop) {
      case 'size':
        this.updateAttr('size', /n(\d)*d(\d)*/g)
        break
    }
  }
}

window.customElements.define(`${nano}pilar`, Pilar)
