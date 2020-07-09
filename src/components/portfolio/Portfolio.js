import React, { Fragment } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Partition, SectionTitle, } from '../appStyles'
import { CardBacking, IconSet, Info, LinkLabel, NavLinks, } from './card/styles'
import { Card } from './card/stylesCard'
import PortfolioCard from './card/PortfolioCard'
import { projects, } from './card/projects'
//import './styles.css'


const Portfolio = () => {


    return (
        <Fragment>
            <SectionTitle id='portfolio'>Portfolio</SectionTitle>

            {/** */}
            <PortfolioCard />
                   

        </Fragment>
    )
}


export { Portfolio }
