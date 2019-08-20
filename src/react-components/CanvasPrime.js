import React, { Fragment } from 'react'
import { Bio, Honeycomb, Navbar, } from './sections'


const CanvasPrime = () => 
    <Fragment>
        <Honeycomb />

        <div 
            style={{ height: '500vh',
                width: '100vw',
                //paddingTop: '60vh',
                background: '#05090A', }} >

            <Navbar />
            
            <Bio />
            <div 
                style={{ display: 'flex', 
                    height: '200vh', 
                    width: '100vw', 
                    justifyContent: 'space-between',
                    alignItems: 'center', 
                    padding: '60vh 10rem', }} >

                
            </div>
        </div>

        
    </Fragment>


export default CanvasPrime 
