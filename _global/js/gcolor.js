export const getCases = label => {
  const spinalCase = label

  const titleCase = label
    .replace(/_/g, ' ')
    .replace(/(?:^\w|[A-Z]|\b\w)/g, word => {
      return word.toUpperCase()
    })
    .trim()
    .replace(/-/g, ' ')

  const pascalCase = titleCase.replace(/[ ]/g, '')

  const camelCase = pascalCase.charAt(0).toLowerCase() + pascalCase.slice(1)

  return { spinalCase, titleCase, pascalCase, camelCase }
}

export class gColor {
  label
  hex

  constructor(label, hex) {
    this.label = label
    this.hex = hex.toUpperCase()
  }

  get opacity() {
    return parseInt(this.hex.substr(7, 2), 16) * (100 / 255) || 100
  }

  get red() {
    return parseInt(this.hex.substr(1, 2), 16)
  }

  get green() {
    return parseInt(this.hex.substr(3, 2), 16)
  }

  get blue() {
    return parseInt(this.hex.substr(5, 2), 16)
  }

  HSL() {
    const r = this.red / 255,
      g = this.green / 255,
      b = this.blue / 255,
      cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin

    let h = 0,
      s = 0,
      l = 0

    if (delta === 0) {
      h = 0
    } else if (cmax === r) {
      h = ((g - b) / delta) % 6
    } else if (cmax === g) {
      h = (b - r) / delta + 2
    } else {
      h = (r - g) / delta + 4
    }

    h = Math.round(h * 60)

    if (h < 0) {
      h += 360
    }

    l = (cmax + cmin) / 2
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))

    s = +(s * 100)
    l = +(l * 100)

    return { hue: h, saturation: s, lightness: l }
  }

  get hue() {
    return this.HSL().hue
  }

  get saturation() {
    return this.HSL().saturation
  }

  get lightness() {
    return this.HSL().lightness
  }

  get hsl() {
    return `hsl(${this.hue}deg ${this.saturation}% ${this.lightness}% / ${this.opacity}%)`
  }

  get rgb() {
    return `rgb(${this.red} ${this.green} ${this.blue} / ${this.opacity}%)`
  }

  get spinalCase() {
    return this.label
  }

  get pascalCase() {
    return getCases(this.label).pascalCase
  }

  get camelCase() {
    return getCases(this.label).camelCase
  }

  get titleCase() {
    return getCases(this.label).titleCase
  }
}
