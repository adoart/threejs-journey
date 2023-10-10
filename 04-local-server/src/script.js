import * as THREE from 'three'
console.log(THREE)

//Scene
const scene = new THREE.Scene()

// Red cube
const boxGeo = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color: 0xff0000})
const cube = new THREE.Mesh(boxGeo,material)
scene.add(cube)

//Sizes
const sizes = {
    width: 800,
    height: 600
}

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height)
camera.position.z = 3
camera.position.x = 1
camera.position.y = 1
scene.add(camera)



//Renderer
const canvas = document.querySelector('canvas.webgl')
console.log(canvas)
const renderer = new THREE.WebGLRenderer({
    canvas : canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene,camera)
