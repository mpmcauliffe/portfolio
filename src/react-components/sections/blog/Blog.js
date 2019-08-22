import React, { Fragment } from 'react'
import { Partition, SectionTitle, SmallContainer, } from '../../appStyles'


const Blog = () => {
    return (
        <Fragment>
            <SectionTitle>Blogs</SectionTitle>

            <Partition>
                <SmallContainer style={{ height: '30rem', background: '#E09F3E', }} />
                <SmallContainer style={{ height: '30rem', background: '#E09F3E', }} />
                <SmallContainer style={{ height: '30rem', background: '#E09F3E', }} />
                <SmallContainer style={{ height: '30rem', background: '#E09F3E', }} />
            </Partition>
        </Fragment>
    )
}


export { Blog }
