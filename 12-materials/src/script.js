import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import {Color, MeshBasicMaterial, Sphere, SphereGeometry} from "three";
import * as dat from 'lil-gui'

THREE.ColorManagement.enabled = false

/**
 * Debug
 */
const gui = new dat.GUI()

/**
 * Textures
 */
const cubeTextureLoader = new THREE.CubeTextureLoader()
const environmentMapTexture = cubeTextureLoader.load([
    '/textures/environmentMaps/0/px.jpg',
    '/textures/environmentMaps/0/nx.jpg',
    '/textures/environmentMaps/0/py.jpg',
    '/textures/environmentMaps/0/ny.jpg',
    '/textures/environmentMaps/0/pz.jpg',
    '/textures/environmentMaps/0/nz.jpg'
])

const textureLoader = new THREE.TextureLoader()
const doorColorTexture = textureLoader.load('/textures/door/color.jpg')
const doorAlphaTexture = textureLoader.load('/textures/door/alpha.jpg')
const doorAmbientOcclusionTexture = textureLoader.load('/textures/door/ambientOcclusion.jpg')
const doorHeightTexture = textureLoader.load('/textures/door/height.jpg')
const doorNormalTexture = textureLoader.load('/textures/door/normal.jpg')
const doorMetalnessTexture = textureLoader.load('/textures/door/metalness.jpg')
const doorRoughnessTexture = textureLoader.load('/textures/door/roughness.jpg')
const doorMatCapTexture = textureLoader.load('/textures/matcaps/3.png')
const doorGradientTexture = textureLoader.load('/textures/gradients/5.jpg')
doorGradientTexture.minFilter = THREE.NearestFilter
doorGradientTexture.magFilter = THREE.NearestFilter
doorGradientTexture.generateMipmaps = false

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
// const material = new MeshBasicMaterial({color: 0xff00ff})
// const material = new THREE.MeshNormalMaterial()
// const material = new THREE.MeshMatcapMaterial()
// const material = new THREE.MeshDepthMaterial()
// const material = new THREE.MeshLambertMaterial()
// const material = new THREE.MeshPhongMaterial()
// material.shininess = 100
// material.specular = new THREE.Color(0x0000ff)
// const material = new THREE.MeshToonMaterial()
// material.gradientMap = doorGradientTexture
const material = new THREE.MeshStandardMaterial()
material.metalness = 0.7
gui.add(material, 'metalness').min(0).max(1).step(0.001)
material.roughness = 0.2
gui.add(material, 'roughness').min(0).max(1).step(0.001)
material.envMap = environmentMapTexture

// material.metalnessMap = doorMetalnessTexture
// material.roughnessMap = doorRoughnessTexture
// material.map = doorColorTexture
// material.aoMap = doorAmbientOcclusionTexture
// material.aoMapIntensity = 2
// gui.add(material, 'aoMapIntensity').min(0).max(10).step(0.001)
// material.displacementMap = doorHeightTexture
// material.displacementScale = 0.05
// gui.add(material, 'displacementScale').min(0).max(1).step(0.001)
// material.normalMap = doorNormalTexture
// material.normalScale.set(0.5,0.5)
// gui.add(material.normalScale, 'x').min(0).max(1).step(0.001)
// gui.add(material.normalScale, 'y').min(0).max(1).step(0.001)
// material.alphaMap = doorAlphaTexture
// material.transparent = true

// material.map = doorColorTexture
// material.wireframe = true
// material.transparent = true
// material.opacity = 0.5
// material.alphaMap = doorAlphaTexture
material.side = THREE.DoubleSide
// material.flatShading = true
// material.matcap = doorMatCapTexture
const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 64,64),
    material
)
sphere.position.x = -1.5
const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(1,1, 100, 100)
    ,material
)
const torus = new THREE.Mesh(
    new THREE.TorusGeometry(0.3,0.2, 64,128),
    material
)
torus.position.x = 1.5
scene.add(sphere, plane, torus)

/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
const pointLight = new THREE.PointLight(0xffffff, 0.5)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(ambientLight, pointLight)
/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 2
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.outputColorSpace = THREE.LinearSRGBColorSpace
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update object
    sphere.rotation.y = 0.1 * elapsedTime
    plane.rotation.y = 0.1 * elapsedTime
    torus.rotation.y = 0.1 * elapsedTime

    sphere.rotation.x = 0.15 * elapsedTime
    plane.rotation.x = 0.15 * elapsedTime
    torus.rotation.x = 0.15 * elapsedTime

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()