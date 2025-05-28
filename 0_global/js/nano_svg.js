class nanoSVG extends HTMLElement {
  constructor() {
    super()
  }

  static parseSvgPath(d) {
    const tokens = d.match(/[a-zA-Z]|-?\d*\.?\d+(?:e[-+]?\d+)?/g)
    const result = []
    let i = 0
    let lastCmd = null

    const getNum = () => parseFloat(tokens[i++])

    while (i < tokens.length) {
      let token = tokens[i]

      // Detect command or continue last
      if (/[a-zA-Z]/.test(token)) {
        lastCmd = tokens[i++]
      }

      const cmd = lastCmd
      const isRel = cmd === cmd.toLowerCase()
      const command = cmd.toUpperCase()

      if (command === 'M') {
        const x = getNum(),
          y = getNum()
        result.push({ move: { x, y }, relative: isRel })
        lastCmd = isRel ? 'l' : 'L' // Subsequent pairs are implicit "lineto"
      } else if (command === 'L') {
        const x = getNum(),
          y = getNum()
        result.push({ line: { x, y }, relative: isRel })
      } else if (command === 'C') {
        const control1 = { x: getNum(), y: getNum() }
        const control2 = { x: getNum(), y: getNum() }
        const end = { x: getNum(), y: getNum() }
        result.push({ curve: { control1, control2, end }, relative: isRel })
      } else if (command === 'Z') {
        i++ // No numbers to consume
        result.push({ closePath: true, relative: isRel })
      } else {
        throw new Error(`Unsupported SVG path command: ${token}`)
      }
    }

    return result
  }

  static parseStyleAttr(styleString) {
    const style = {}
    for (const part of styleString.split(';')) {
      const [key, value] = part.split(':').map(s => s.trim())
      if (key && value) {
        style[key] = value
      }
    }
    return style
  }

  static parseSvgTag(svgTag) {
    const tagMatch = svgTag.match(/^<(\w+)\s([^>]+)>?$/)
    if (!tagMatch) throw new Error('Invalid SVG tag')

    const tag = tagMatch[1]
    const attrString = tagMatch[2]

    const attrRegex = /([\w:-]+)\s*=\s*"(.*?)"/g
    const attrs = {}
    let dValue = null
    let styleAttrs = {}

    let match
    while ((match = attrRegex.exec(attrString)) !== null) {
      const [, key, val] = match
      if (key === 'style') {
        styleAttrs = nanoSVG.parseStyleAttr(val)
      } else if (key === 'd') {
        dValue = val
      } else {
        attrs[key] = val
      }
    }

    // Merge style keys into attributes, overriding existing attrs
    for (const [k, v] of Object.entries(styleAttrs)) {
      if (k === 'transform') {
        attrs[k] = v // example: transform="translateX(12px)"
      } else {
        attrs[k] = v
      }
    }

    if (!dValue) throw new Error("Missing 'd' attribute in path")

    return JSON.stringify({
      tag,
      attrs,
      paths: nanoSVG.parseSvgPath(dValue),
    })
  }

  static drawObj(obj) {
    const { tag = 'path', attrs = {}, paths = [] } = obj

    let d = ''
    for (const segment of paths) {
      const isRel = segment.relative === true

      if (segment.move) {
        const { x, y } = segment.move
        d += `${isRel ? 'm' : 'M'} ${x},${y} `
      } else if (segment.line) {
        const { x, y } = segment.line
        d += `${isRel ? 'l' : 'L'} ${x},${y} `
      } else if (segment.curve) {
        const { control1, control2, end } = segment.curve
        d += `${isRel ? 'c' : 'C'} ${control1.x},${control1.y} ${control2.x},${control2.y} ${end.x},${end.y} `
      } else if (segment.closePath) {
        d += `${isRel ? 'z' : 'Z'} `
      }
    }

    const attrString = Object.entries(attrs)
      .map(([key, val]) => `${key}="${val}"`)
      .join(' ')

    return `<${tag} d="${d.trim()}" ${attrString} />`
  }
}

export { nanoSVG }

const input = `<path style="transform:translateX(12px)" transform="translateX(12px)" class="p1" d="m 10,10 l 20,0 z">`
console.log(nanoSVG.parseSvgTag(input))