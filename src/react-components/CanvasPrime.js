import React, { Fragment } from 'react'
import { BodyContainer, GradientShield, } from './appStyles'
import { Bio, Blog, Contact, Honeycomb, Navbar, Portfolio, } from './sections'


const CanvasPrime = () => 
    <Fragment>
        <Honeycomb />

        <BodyContainer>

            <Navbar />
            
            <Bio />
            <Portfolio />

            {/**<Blog /> */}

            
            <div 
                style={{ height: '30vh', 
                    width: '100%', 
                    background: '#05090A', }} />

            {/*<GradientShield top={''} bottom={'90vh'} style={{ transform: 'rotate(180deg)', }} /> */}

            <Contact />
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
