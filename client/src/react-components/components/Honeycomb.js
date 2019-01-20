import React from 'react'
import { largeHexon } from '../../assets/javascript/largeHexon'
import '../../assets/themes/css/honeycomb.css'
//import * as THREE from 'three';


const Honeycomb = () => {

    return (
        <div 
            style={{ 
                background: '#17171B', 
                height: '100vh', 
                width: '100vw' 
            }}
        >
            <canvas onLoad={largeHexon} styles={{ height: '100vh', width: '100vw'}}></canvas>
        </div>
    )
}  


export { Honeycomb }
