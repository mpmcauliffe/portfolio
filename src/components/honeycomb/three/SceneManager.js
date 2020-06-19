import * as THREE from 'three'
import ColladaLoader from 'three-collada-loader'
import threeEntryPoint from './threeEntryPoint';


export default canvas => {

    // uncomment to view performance stats on three.js
    //(function(){var script=document.createElement('script');script.onload=function(){var stats=new Stats();document.body.appendChild(stats.dom);requestAnimationFrame(function loop(){stats.update();requestAnimationFrame(loop)});};script.src='//mrdoob.github.io/stats.js/build/stats.min.js';document.head.appendChild(script);})()
    
    
    const screenDimensions = {
        width: canvas.width,
        height: canvas.height,
    }

    const buildScene = () => {
        const scene = new THREE.Scene()
        scene.background = new THREE.Color("#0E1A1D")

        return scene
    }

    const buildRender = ({ width, height }) => {
        const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true }) 
        const DPR = window.devicePixelRatio ? window.devicePixelRatio : 1
        renderer.setPixelRatio(DPR)
        renderer.setSize(width, height)

        renderer.gammaInput = true
        renderer.gammaOutput = true 

        return renderer
    }

    const buildCamera = ({ width, height }) => {
        const aspectRatio = width / height
        const camera = new THREE.PerspectiveCamera(45, aspectRatio, 0.001, 4)

        camera.position.set(0, -.387, .012)

        return camera
    }

    const scene = buildScene()
    const renderer = buildRender(screenDimensions)
    const camera = buildCamera(screenDimensions)
    

    let loader = new ColladaLoader()
    /* DEVELOPMENT: uncomment 52 - 61 */
    loader.load('src/components/honeycomb/three/3Dhex-3/3Dhex.dae', (collada) => {
        let hexon = collada.scene

        hexon.children[2].children[0].material.materials[0] = new THREE.MeshLambertMaterial({ color: new THREE.Color('#010101') })
        //hexon.children[2].children[0].material.materials[0] = new THREE.MeshPhysicalMaterial({ color: new THREE.Color('#000000') })
        hexon.children[2].children[0].material.materials[1] = new THREE.MeshPhongMaterial({ color: new THREE.Color(0x0) })
        //hexon.children[2].children[0].material.materials[2] = new THREE.ExtrudeGeometry({ depth: 1 })
        scene.add(hexon)
    })

    /* PRODUCTION: uncomment 64 - 73 */
    loader.load('./3Dhex.dae', (collada) => {
        let hexon = collada.scene

        hexon.children[2].children[0].material.materials[0] = new THREE.MeshLambertMaterial({ color: new THREE.Color('#010101') })
        //hexon.children[2].children[0].material.materials[0] = new THREE.MeshPhysicalMaterial({ color: new THREE.Color('#000000') })
        hexon.children[2].children[0].material.materials[1] = new THREE.MeshPhongMaterial({ color: new THREE.Color(0x0) })
        //hexon.children[2].children[0].material.materials[2] = new THREE.ExtrudeGeometry({ depth: 1 })
        scene.add(hexon)
    })

  
    let blue1 = new THREE.PointLight(0x0000FF, 18, 50)
    let yellow1 = new THREE.PointLight(0xFAFF00, 18, 50)
    let red1 = new THREE.PointLight(0xFF0000, 18, 50)
    let green1 = new THREE.PointLight(0x00FF00, 18, 50)
    
    scene.add(blue1, yellow1, red1, green1)
    

    const update = () => {
        let time = Date.now() * 0.0005

        blue1.position.x = Math.sin(time * 0.7) * 30
        blue1.position.y = Math.cos(time * 0.5) * 40
        blue1.position.z = Math.cos(time * 0.3) * 30

        yellow1.position.x = Math.cos(time * 0.3) * 30
        yellow1.position.y = Math.sin(time * 0.7) * 40
        yellow1.position.z = Math.sin(time * 0.3) * 30

        red1.position.x = Math.sin(time * 0.3) * 30
        red1.position.y = Math.cos(time * 0.5) * 40
        red1.position.z = Math.sin(time * 0.7) * 30
        
        green1.position.x = Math.cos(time * 0.4) * 40
        green1.position.y = Math.cos(time * 0.6) * 30
        green1.position.z = Math.sin(time * 0.5) * 40
        
    }
    const render = () => {
        renderer.render(scene, camera)
    }
    const onWindowResize = () => {
        const { width, height } = canvas
        
        screenDimensions.width = width
        screenDimensions.height = height

        camera.aspect = width / height
        camera.updateProjectionMatrix()
        
        renderer.setSize(width, height)
    }
    const GameLoop = () =>{
        requestAnimationFrame(GameLoop)
    
        update()
        render()
    }
    GameLoop();

    return {
        update,
        onWindowResize,
    }
}

    // let blue1 = new THREE.PointLight(0x78C0E0, 18, 50)
    // let yellow1 = new THREE.PointLight(0xE09F3E, 18, 50)
    // let red1 = new THREE.PointLight(0x9E2A2B, 18, 50)
    // let green1 = new THREE.PointLight(0x53917E, 18, 50)

    // let testLight = new THREE.PointLight(0xff0000, 25, 50)
    // testLight.position.set(0,0,35) // (x -21, 21) (y 0, 30) (z 0, 35)
    // scene.add(testLight)

    //let blue2 = new THREE.PointLight(0x78C0E0, 36, .1)
    //let yellow2 = new THREE.PointLight(0xE09F3E, 36, .1)
    //let green2 = new THREE.PointLight(0x53917E, 36, .1)
    //let red2 = new THREE.PointLight(0x9E2A2B, 36, .1)
    //scene.add(blue1, blue2, yellow1, yellow2, red1, red2, green1, green2)


        // blue2.position.x = Math.sin(time * 0.7) * 30
        // blue2.position.y = Math.cos(time * 0.5) * 40
        // blue2.position.z = Math.cos(time * 0.3) * 30

        // yellow2.position.x = Math.cos(time * 0.3) * 30
        // yellow2.position.y = Math.sin(time * 0.7) * 40
        // yellow2.position.z = Math.sin(time * 0.3) * 30

        // red2.position.x = Math.sin(time * 0.3) * 30
        // red2.position.y = Math.cos(time * 0.5) * 40
        // red2.position.z = Math.sin(time * 0.7) * 30

        // green2.position.x = Math.cos(time * 0.4) * 40
        // green2.position.y = Math.cos(time * 0.6) * 30
        // green2.position.z = Math.sin(time * 0.5) * 40

        //console.log(red1.position)