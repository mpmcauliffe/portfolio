import React, { Component, } from 'react'
import threeEntryPoint from '../../../assets/three/threeEntryPoint'
import { DownArrow,
    Fog, 
    GradientShield, 
    HexCanvas, 
    NamePlaque,
    NavButton, 
    Top,  } from './styles'
import scrolling from '../../../assets/helpers/scrolling'


class Honeycomb extends Component {
    // componentDidMount() {
    //     threeEntryPoint(this.threeRootElement);
    // }


    render () {
        return (
            <Top>
                {/*<HexCanvas 
                ref={element => this.threeRootElement = element} />*/}

                <div 
                    style={{ height: '150vh',
                        width: '100vw',
                        background: '#05090A', }} /> 

                <NamePlaque>
                    <h1>Michael McAuliffe</h1>
                    <h2>Fullstack Developer</h2>
                    <NavButton onClick={() => scrolling(window.innerHeight + (window.innerHeight / 2))}>
                        <h3>Check This Out &emsp; </h3>
                        <DownArrow />
                    </NavButton>
                </NamePlaque>

                <GradientShield />

                <Fog />

                <GradientShield 
                    style={{ top: '159vh',
                        transform: 'rotate(180deg)', }} />
            </Top>   
        )
    }
}
//880

export { Honeycomb }
