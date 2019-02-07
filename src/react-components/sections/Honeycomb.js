import React, { Component, Fragment, } from 'react'
import threeEntryPoint from '../../assets/three/threeEntryPoint'
import { NameTape, Shield } from '../components'
import { HexCanvas, Top, } from '../../assets/styled-components'


class Honeycomb extends Component {
    componentDidMount() {
        threeEntryPoint(this.threeRootElement);
    }
    render () {
        return (
            <Top>
                <HexCanvas 
                    ref={element => this.threeRootElement = element} 
                />
                <NameTape />
                <Shield />
            </Top>
            
        );
    }
}


export { Honeycomb }
