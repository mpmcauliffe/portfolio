import React, { Fragment } from 'react'
import { createGlobalStyle, ThemeProvider, } from 'styled-components'
import MenuProvider from './navbar/context/MenuProvider'
import { BodyContainer, GradientShield, } from './appStyles'
import { Bio, Blog, Contact, Honeycomb, Navbar, Portfolio, } from '../components'


const CanvasPrime = () => 
    <Fragment>
        <Honeycomb />

        <BodyContainer>
            <MenuProvider>
                <Navbar />
                {/** <div className='up-chev' />
                <div className='up-chev' style={{ top: '213vh' }} />*/}
                <Portfolio />
                <Bio />
                <Blog />

                {/**<div 
                    style={{ height: '30vh', 
                        width: '100%', 
                        background: '#05090A', }} /> */}

                {/*<GradientShield top={''} bottom={'90vh'} style={{ transform: 'rotate(180deg)', }} /> */}

                <Contact />
            </MenuProvider>    
        </BodyContainer>
    </Fragment>


export default CanvasPrime 


/**
 <div 
    style={{ display: 'flex', 
        height: '200vh', 
        width: '100vw', 
        justifyContent: 'space-between',
        alignItems: 'center', 
        padding: '60vh 10rem', }} >

    
</div>
 */
