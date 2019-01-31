import React, { Component, Fragment, } from 'react'
import threeEntryPoint from '../../assets/three/threeEntryPoint'
import { NameTape, } from '../components/NameTape'
import { HexCanvas, } from '../../assets/styled-components/components'


class Honeycomb extends Component {
    componentDidMount() {
        threeEntryPoint(this.threeRootElement);
    }
    render () {
        return (
            <Fragment>
                <HexCanvas 
                    ref={element => this.threeRootElement = element} 
                />
                <NameTape />
            </Fragment>
            
        );
    }
}


export { Honeycomb }
