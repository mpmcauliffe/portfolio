import React, { Component } from 'react'
import threeEntryPoint from '../../assets/three/threeEntryPoint'
import { HexCanvas } from '../../assets/styled-components/components'


class Honeycomb extends Component {
    componentDidMount() {
        threeEntryPoint(this.threeRootElement);
    }
    render () {
        return (
            <HexCanvas 
                ref={element => this.threeRootElement = element} 
            />
        );
    }
}


export { Honeycomb }
