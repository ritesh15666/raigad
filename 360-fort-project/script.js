let scene, camera, renderer, controls

init()

function init(){

scene = new THREE.Scene()

camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
1,
1100
)

renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const geometry = new THREE.SphereGeometry(500,60,40)
geometry.scale(-1,1,1)

const texture = new THREE.TextureLoader().load("raigad360.jpg")

const material = new THREE.MeshBasicMaterial({
map:texture
})

const mesh = new THREE.Mesh(geometry,material)
scene.add(mesh)

controls = new THREE.DeviceOrientationControls(camera)

animate()

}

function animate(){

requestAnimationFrame(animate)

controls.update()

renderer.render(scene,camera)

}