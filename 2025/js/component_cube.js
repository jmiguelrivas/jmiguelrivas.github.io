import {
  getPrefix
} from '../../0_global/js/global.js'
import * as THREE from '../../0_global/modules/threejs/three.module.js'
import {
  wikiColors
} from '../../0_global/js/db_wiki-colors.js'

import {
  OrbitControls
} from '../../0_global/modules/OrbitControls.js'

const template = /*html*/ `
<div id="cube"></div>
<nn-fila gap="2">
  <nn-pilar>
    <button id="grid" role="button" class="btn shamrock" data-color="hsl(149deg, 61%, 51%)">
      Toggle Grid
    </button>
  </nn-pilar>
  <nn-pilar>
    <button id="guides" role="button" class="btn sunglow" data-color="hsl(47deg, 100%, 57%)">
      Toggle Guides
    </button>
  </nn-pilar>
</nn-fila>
`

const rad = Math.PI / 180

const data = {
  attrs: [],
  winHeight: undefined,
  winWidth: undefined,
  camera: undefined,
  scene: undefined,
  renderer: undefined,
  colors: Object.values(wikiColors),
  linesGroup: undefined,
  gridHelper: undefined,
  gridToggle: false,
  guidesToggle: true,
  active: false,

  minPolarAngle: 0,
  maxPolarAngle: 120 * rad,
  minDistance: 120,
  maxDistance: 500,

  controls: undefined,
}

class Cube extends HTMLElement {
  constructor() {
    super()
  }

  createLine(color, origin, destination) {
    const lineMaterial = new THREE.LineBasicMaterial({
      color: `rgb(${color})`,
    })
    const points = []
    points.push(new THREE.Vector3(origin[0], origin[1], origin[2]))
    points.push(new THREE.Vector3(destination[0], destination[1], destination[2]))
    const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)
    const line = new THREE.Line(lineGeometry, lineMaterial)
    return line
  }

  createGuides() {
    const red = this.createLine('255,0,0', [-255 / 2, 0, -255 / 2], [255 / 2, 0, -255 / 2])
    const blue = this.createLine('0,0,255', [-255 / 2, 0, -255 / 2], [-255 / 2, 0, 255 / 2])
    const green = this.createLine('0,255,0', [-255 / 2, 0, -255 / 2], [-255 / 2, 255, -255 / 2])
    const cyan = this.createLine('0,255,255', [-255 / 2, 0, -255 / 2], [-255 / 2, 255, 255 / 2])
    const magenta = this.createLine('255,0,255', [-255 / 2, 0, -255 / 2], [255 / 2, 0, 255 / 2])
    const yellow = this.createLine('255,255,0', [-255 / 2, 0, -255 / 2], [255 / 2, 255, -255 / 2])
    const white = this.createLine('255,255,255', [-255 / 2, 0, -255 / 2], [255 / 2, 255, 255 / 2])

    const boxGroup = new THREE.Group()
    boxGroup.add(
      this.createLine('80,80,80', [255 / 2, 0, -255 / 2], [255 / 2, 255, -255 / 2]),
      this.createLine('80,80,80', [255 / 2, 0, -255 / 2], [255 / 2, 0, 255 / 2]),
      this.createLine('80,80,80', [255 / 2, 0, 255 / 2], [255 / 2, 255, 255 / 2]),
      this.createLine('80,80,80', [-255 / 2, 0, 255 / 2], [255 / 2, 0, 255 / 2]),
      this.createLine('80,80,80', [-255 / 2, 255, -255 / 2], [255 / 2, 255, -255 / 2]),
      this.createLine('80,80,80', [-255 / 2, 255, -255 / 2], [-255 / 2, 255, 255 / 2]),
      this.createLine('80,80,80', [-255 / 2, 0, 255 / 2], [-255 / 2, 255, 255 / 2]),
      this.createLine('80,80,80', [255 / 2, 255, -255 / 2], [255 / 2, 255, 255 / 2]),
      this.createLine('80,80,80', [255 / 2, 255, 255 / 2], [-255 / 2, 255, 255 / 2])
    )

    data.linesGroup = new THREE.Group()
    data.linesGroup.add(red, blue, green, cyan, magenta, yellow, white, boxGroup)

    data.scene.add(data.linesGroup)

    data.gridHelper = new THREE.GridHelper(255, 25)
  }

  createCubes() {
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const distanceBetweenCubes = 1
    const maxValue = 255

    for (const value of data.colors) {
      const x = value.red
      const y = value.green
      const z = value.blue
      const material = new THREE.MeshBasicMaterial({
        color: value.hex,
      })
      const mesh = new THREE.Mesh(geometry, material)
      mesh.position.x = x * distanceBetweenCubes - maxValue * distanceBetweenCubes * 0.5
      mesh.position.y = y * distanceBetweenCubes
      mesh.position.z = z * distanceBetweenCubes - maxValue * distanceBetweenCubes * 0.5
      mesh.name = value.spinalCase
      data.scene.add(mesh)
    }
  }

  connectedCallback() {
    this.innerHTML = template

    data.camera = new THREE.PerspectiveCamera(70, data.winWidth / data.winHeight, 0.01, 1000)
    data.camera.position.z = 400

    data.scene = new THREE.Scene()
    data.scene.rotation.x = 100 / 1000
    data.scene.position.y = -125

    this.createGuides()
    this.createCubes()

    data.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    })
    this.resizeWindow()
    this.querySelector('#cube').appendChild(data.renderer.domElement)

    data.controls = new OrbitControls(data.camera, data.renderer.domElement)

    data.controls.minPolarAngle = data.minPolarAngle
    data.controls.maxPolarAngle = data.maxPolarAngle

    // data.controls.minDistance = data.minDistance;
    data.controls.maxDistance = data.maxDistance

    this.querySelector('#guides').addEventListener('click', () => {
      data.guidesToggle = !data.guidesToggle
      data.guidesToggle ? data.scene.add(data.linesGroup) : data.scene.remove(data.linesGroup)
    })

    this.querySelector('#grid').addEventListener('click', () => {
      data.gridToggle = !data.gridToggle
      data.gridToggle ? data.scene.add(data.gridHelper) : data.scene.remove(data.gridHelper)
    })

    document.querySelector('.popkern-details').addEventListener('toggle', function() {
      data.active = this.hasAttribute('open')

      if (data.active) {
        data.renderer.setAnimationLoop(time => {
          data.scene.rotation.y = time / 5000
          data.renderer.render(data.scene, data.camera)
        })
      } else {
        data.renderer.setAnimationLoop(null)
      }
    })

    window.addEventListener('resize', this.resizeWindow)
  }

  resizeWindow() {
    data.winWidth = Math.min(1200, window.innerWidth)
    data.winHeight = data.winWidth * 0.75
    data.renderer.setSize(data.winWidth, data.winHeight)
    data.camera.aspect = data.winWidth / data.winHeight
    data.camera.updateProjectionMatrix()
  }
}

window.customElements.define(getPrefix('cube'), Cube)

export {
  data
}