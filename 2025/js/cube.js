import { getPrefix } from '../../_global/js/global.js'
import * as THREE from '../../_global/modules/threejs/three.module.js'
// import "../../_global/modules/OrbitControls.js"

const data = {
  attrs: [],
  winHeight: undefined,
  winWidth: undefined,
  camera: undefined,
  scene: undefined,
  geometry: undefined,
  material: undefined,
  mesh: undefined,
  rendered: undefined,
}

class Cube extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    data.size = this.getBoundingClientRect().width

    data.camera = new THREE.PerspectiveCamera(
      70,
      data.winWidth / data.winHeight,
      0.01,
      10
    )
    data.camera.position.z = 1

    data.scene = new THREE.Scene()

    data.geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2)
    data.material = new THREE.MeshNormalMaterial()

    data.mesh = new THREE.Mesh(data.geometry, data.material)
    data.scene.add(data.mesh)

    data.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.resizeWindow()
    data.renderer.setAnimationLoop(this.animate)
    this.appendChild(data.renderer.domElement)

    window.addEventListener('resize', this.resizeWindow)
  }

  animate(time) {
    data.mesh.rotation.x = time / 2000
    data.mesh.rotation.y = time / 1000
    data.renderer.render(data.scene, data.camera)
  }

  resizeWindow() {
    data.winHeight = window.innerHeight
    data.winWidth = window.innerWidth
    data.renderer.setSize(data.winWidth, data.winHeight)
    data.camera.aspect = data.winWidth / data.winHeight
    data.camera.updateProjectionMatrix()
  }
}

window.customElements.define(getPrefix('cube'), Cube)

export { data }
