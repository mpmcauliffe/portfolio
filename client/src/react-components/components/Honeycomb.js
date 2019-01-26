import React, { Component } from 'react'
import * as THREE from 'three.js'
import ColladaLoader from 'three-collada-loader'
import { HexCanvas, } from '../../assets/styled-components/components'


class Honeycomb extends Component {
    componentDidMount() {

        const width = this.mount.clientWidth
        const height = this.mount.clientHeight

        //ADD SCENE
        this.scene = new THREE.Scene()

        //ADD CAMERA
        this.camera = new THREE.PerspectiveCamera(35, width / height, 0.001, 4)
        this.camera.position.set(0, .4, .5)

        //ADD RENDERER
        this.renderer = new THREE.WebGLRenderer({ antialias: true })
        this.renderer.setClearColor(0x0E1A1D)
        this.renderer.setSize(width, height)
        this.mount.appendChild(this.renderer.domElement)

        //ADD CUBE
        let loader = new THREE.ColladaLoader()
        loader.load('../../assets/models/3Dhex-1/3Dhex.dae', (collada) => {
            let hexon = collada.scene
            this.scene.add(hexon)
        })
    }
    componentWillUnmount() {
        this.stop()
        this.mount.removeChild(this.renderer.domElement)
    }
   
    stop = () => {
        cancelAnimationFrame(this.frameId)
    }
    renderScene = () => {
        this.renderer.render(this.scene, this.camera)
    }
    
    render() {
        return (
            <HexCanvas
                ref={(mount) => { this.mount = mount }}
            />
        )
    }
    
}


export { Honeycomb }
