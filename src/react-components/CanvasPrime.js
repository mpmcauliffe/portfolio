import React, { Fragment } from 'react'
import { Honeycomb } from './sections'
import { Nav } from '../assets/styled-components'


const CanvasPrime = () => 
    <Fragment>
        <Honeycomb />
        <Nav />
        <div 
            style={{
                height: '150vh',
                width: '100vw',
                background: '#F6F3EC'
            }}
        />
    </Fragment>


export default CanvasPrime 
