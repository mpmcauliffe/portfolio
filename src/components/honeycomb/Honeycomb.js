import React, { Component, } from 'react'
import threeEntryPoint from './three/threeEntryPoint'
import { Link, animateScroll as scroll } from 'react-scroll'
import { GradientShield, } from '../appStyles'
import { DownArrow,
    Fog, 
    HexCanvas, 
    NamePlaque,
    NavButton, 
    SubTitle,
    Top, } from './styles'


class Honeycomb extends Component {
    componentDidMount() {
        threeEntryPoint(this.threeRootElement)
    }


    render () {
        return (
            <Top>
                {/**/}
                <HexCanvas 
                    id='honeycomb'
                    ref={element => this.threeRootElement = element} />
                
                {/*<div 
                    id='honeycomb'
                    style={{ height: '150vh',
                        width: '100vw',
                        background: '#05090A', }} />*/}
                 
                <NamePlaque>
                    <h1 style={{ marginBottom: 0, color: '#FAF9F5', }}>Michael P McAuliffe</h1>
                    <SubTitle>Frontend & React Developer</SubTitle>
                    {/*{window.innerWidth > 768 &&}*/}
                    
                        <Link
                            activeClass='active'
                            to='about'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500} >

                            <NavButton>
                                <h3>check this out &emsp; </h3>
                                <DownArrow />
                            </NavButton>
                        </Link>
                    
                </NamePlaque> 
                

                <GradientShield />
                <Fog />
                
                {/*<Topbar />
                    <GradientShield 
                    style={{ top: '159vh',
                        transform: 'rotate(180deg)', }} />*/}                
            </Top>   
        )
    }
}


export { Honeycomb }
