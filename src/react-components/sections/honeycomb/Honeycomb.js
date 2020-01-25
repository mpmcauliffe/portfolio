import React, { Component, } from 'react'
import threeEntryPoint from '../../../assets/three/threeEntryPoint'
import { Link, animateScroll as scroll } from 'react-scroll'
import { GradientShield, } from '../../appStyles'
import { DownArrow,
    Fog, 
    HexCanvas, 
    NamePlaque,
    NavButton, 
    Top,  } from './styles'


class Honeycomb extends Component {
    componentDidMount() {
        threeEntryPoint(this.threeRootElement);
    }


    render () {
        return (
            <Top>
                <HexCanvas 
                    id='honeycomb'
                    ref={element => this.threeRootElement = element} />

                {/*<div 
                    id='honeycomb'
                    style={{ height: '150vh',
                        width: '100vw',
                        background: '#05090A', }} />  */}
                

                <NamePlaque>
                    <h1 style={{ color: '#20343d', }}>Michael McAuliffe</h1>
                    <h2 style={{ color: '#20343d', }}>Fullstack Developer</h2>

                    <Link
                        activeClass='active'
                        to='about'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500} >

                        <NavButton>
                            <h3>Check This Out &emsp; </h3>
                            <DownArrow />
                        </NavButton>
                    </Link>
                    
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


export { Honeycomb }
