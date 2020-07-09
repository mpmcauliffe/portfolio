import React, { Fragment, useEffect, } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Partition, } from '../../appStyles'
import { CardBacking, IconSet, Info, LinkLabel, NavLinks, StyledCarousel, } from './styles'
import { Card } from './stylesCard'
import { projects } from './projects'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'


const CardWrapper = props => {
    console.log('wrapper')
    return (
        <Partition portfolio>
            {/**{window.innerWidth < 481
                ? <StyledCarousel>{props.children}</StyledCarousel>
                : <Fragment>{props.children}</Fragment>
            } */}
            {props.children}
        </Partition>
    )
}

// ${full.path} vs `../someDirectory/${filename}.png`
export default() => {
    return (
        <CardWrapper>
            {projects.map(project => (
                <Card key={project.name}>
                    <div className='card-inner'>
                        <div className='card-front'>
                            <img src={require(`../images/${project.coverImg}.png`).default} alt={project.alt} />
                        </div>
                        <div className='card-back'>
                            <CardBacking 
                                color={project.textColor}
                                background={project.backgroundColor} >
                                
                                <Info>{project.info}</Info>

                                {project.logos &&
                                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                        {project.logos.map(logo => (
                                            <img 
                                                key={logo}
                                                alt='logo'
                                                src={require(`../images/logos/${logo}.png`).default}
                                                style={{ height: 75, width: 75, }} />
                                        ))}
                                    </div>
                                }

                                <NavLinks>
                                <Router>
                                    <a href={project.codeLink} style={{ textDecoration: 'none',}}>
                                        <IconSet hov={project.hov}>
                                            <i className='fa fa-code fa-2x' aria-hidden='true' />
                                            <LinkLabel>Code</LinkLabel>
                                        </IconSet>
                                    </a>     
                                    {project.deployed && 
                                        <Fragment>
                                            <a href={project.instructionsLink} style={{ textDecoration: 'none',}}>
                                                <IconSet hov={project.hov}>
                                                    <i className='fa fa-info fa-2x' aria-hidden='true' />
                                                    <LinkLabel>Instructions</LinkLabel>
                                                </IconSet>
                                            </a>
                                            
                                            <a href={project.visitLink} style={{ textDecoration: 'none',}}>
                                                <IconSet hov={project.hov}>
                                                    <i 
                                                        className='fa fa-arrow-up fa-2x' 
                                                        aria-hidden='true' 
                                                        style={{ transform: 'rotate(45deg)'}} />
                                                    <LinkLabel>Visit</LinkLabel>
                                                </IconSet>
                                            </a>
                                        </Fragment>
                                    }
                                </Router>
                                                                            
                                </NavLinks>
                            </CardBacking>
                        </div>
                    </div>
                </Card>
            ))}
        </CardWrapper>
    )
}
