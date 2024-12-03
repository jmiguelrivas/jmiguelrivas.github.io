const home = {
  url: 'https://miguel-rivas.github.io/',
}

const modulePrefix = 'mr'

function getPrefix(name) {
  return [modulePrefix, name].join('-')
}

function createNode({ type, parent, text, attrs }) {
  const node = document.createElement(type || 'div')

  text && node.appendChild(document.createTextNode(text))

  if (attrs) {
    Object.entries(attrs).forEach(([key, value]) => {
      const attr = document.createAttribute(key)
      attr.value = value
      node.setAttributeNode(attr)
    })
  }

  parent && parent.appendChild(node)
  return node
}

export { home, modulePrefix, getPrefix, createNode }
