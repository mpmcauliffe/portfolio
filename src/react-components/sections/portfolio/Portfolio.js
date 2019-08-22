import React, { Fragment } from 'react'
import { Partition, SectionTitle, } from '../../appStyles'


const Portfolio = () => {
    return (
        <Fragment>
            <SectionTitle>Portfolio</SectionTitle>

            <Partition>
                <div
                    style={{ height: '85vh', width: '25rem', marginBottom: '3rem', background: '#9E2A2B', }} />
                
                <div
                    style={{ height: '85vh', width: '25rem', marginBottom: '3rem', background: '#9E2A2B', }} />

                <div
                    style={{ height: '85vh', width: '25rem', marginBottom: '3rem', background: '#9E2A2B', }} />
                
                <div
                    style={{ height: '85vh', width: '25rem', marginBottom: '3rem', background: '#9E2A2B', }} />
            </Partition>
        </Fragment>
        
    )
}


export { Portfolio }
