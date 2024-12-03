import { getPrefix, createNode } from '../../_global/js/global.js'
import { iconos } from './db-iconos.js'

const template = `
  <nn-caja padding="4">
    <ul></ul>
  </nn-caja>
`
const data = {
  attrs: [],
  iconos,
}

class Iconos extends HTMLElement {
  constructor() {
    super()
  }

  generateList() {
    const list = this.querySelector('ul')

    data.iconos.forEach(icono => {
      const li = createNode({
        type: 'li',
        parent: list,
      })

      li.innerHTML = `
      <nn-fila>
        <nn-pilar size="100%" class="header">
          <nn-icono class="${icono}"></nn-icono>
        </nn-pilar>

        <nn-pilar size="100%" class="value">
          <p>${icono}</p>
        </nn-pilar>

        <nn-pilar size="25%" class="key">
          0
        </nn-pilar>
        <nn-pilar size="25%" class="key">
          45
        </nn-pilar>
        <nn-pilar size="25%" class="key">
          90
        </nn-pilar>
        <nn-pilar size="25%" class="key">
          135
        </nn-pilar>

        <nn-pilar size="25%" class="value">
          <nn-icono class="${icono} d0"></nn-icono>
        </nn-pilar>
        <nn-pilar size="25%" class="value">
          <nn-icono class="${icono} d45"></nn-icono>
        </nn-pilar>
        <nn-pilar size="25%" class="value">
          <nn-icono class="${icono} d90"></nn-icono>
        </nn-pilar>
        <nn-pilar size="25%" class="value">
          <nn-icono class="${icono} d135"></nn-icono>
        </nn-pilar>

        <nn-pilar size="25%" class="key">
          180
        </nn-pilar>
        <nn-pilar size="25%" class="key">
          225
        </nn-pilar>
        <nn-pilar size="25%" class="key">
          270
        </nn-pilar>
        <nn-pilar size="25%" class="key">
          315
        </nn-pilar>

        <nn-pilar size="25%" class="value">
          <nn-icono class="${icono} d180"></nn-icono>
        </nn-pilar>
        <nn-pilar size="25%" class="value">
          <nn-icono class="${icono} d225"></nn-icono>
        </nn-pilar>
        <nn-pilar size="25%" class="value">
          <nn-icono class="${icono} d270"></nn-icono>
        </nn-pilar>
        <nn-pilar size="25%" class="value">
          <nn-icono class="${icono} d315"></nn-icono>
        </nn-pilar>
      </nn-fila>
      `
    })
  }

  connectedCallback() {
    this.innerHTML = template
    this.generateList()
  }
}

window.customElements.define(getPrefix('iconos'), Iconos)

export { data }
