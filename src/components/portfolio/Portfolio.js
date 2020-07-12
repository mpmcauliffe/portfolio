import React, { Fragment } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import EmblaCarousel from './embla/EmblaCarousel'
import { Partition, SectionTitle, } from '../appStyles'
import { CardBacking, IconSet, Info, LinkLabel, NavLinks, } from './card/styles'
import { Card } from './card/stylesCard'
import PortfolioCards from './card/PortfolioCards'
import { projects } from './card/projects'



const Portfolio = () => {


    return (
        <Fragment>
            <SectionTitle id='portfolio'>Portfolio</SectionTitle>
            {/* coverImg info codeLink instructionsLink visitLink backgroundColor textColor hov */}
            <Partition 
                portfolio
                style={{ marginTop: window.innerWidth < 481 ? '2vh' : '',
                        paddingTop: window.innerWidth < 481 ? '' : '4rem', }} >
                {window.innerWidth < 481
                    ?   (
                        <EmblaCarousel>
                            {projects.map(project => (
                                <PortfolioCards
                                    key={project.name}
                                    project={project} />
                            ))}
                        </EmblaCarousel>
                    ) : (
                        <Fragment>
                            {projects.map(project => (
                                <PortfolioCards
                                    key={project.name}
                                    project={project} />
                            ))}
                        </Fragment>
                    )
                }
            </Partition>
            {/** <div style={{ display: 'flex', }}>
                                
                            </div>*/}
            
                   

        </Fragment>
    )
}


export { Portfolio }
