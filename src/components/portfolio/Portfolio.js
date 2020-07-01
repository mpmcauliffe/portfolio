import React, { Fragment } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Partition, SectionTitle, } from '../appStyles'
import { CardBacking, IconSet, Info, LinkLabel, NavLinks, } from './styles'
import { Card } from './stylesCard'
import { projects, } from './text'
//import './styles.css'


const Portfolio = () => {


    return (
        <Fragment>
            <SectionTitle id='portfolio'>Portfolio</SectionTitle>
        {/* coverImg info codeLink instructionsLink visitLink backgroundColor textColor hov */}
            <Partition portfolio>
                {projects.map(project => (
                    <Card key={project.name}>
                        <div className='card-inner'>
                            <div className='card-front'>
                                <img src={require(`${project.coverImg}`).default} alt={project.alt} />
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
                                                    src={require(`${logo}`).default}
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
                {/*<div className='card'>
                    <div className='card-inner'>
                        <div className='card-front'>

                        </div>
                        <div className='card-back'>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    <div className='card-inner'>
                        <div className='card-front'>

                        </div>
                        <div className='card-back'>
                        </div>
                    </div>
                </div> */}
                
            </Partition>
        </Fragment>
    )
}


export { Portfolio }


/**
 <div
                    style={{ height: '85vh', width: '25rem', marginBottom: '3rem', background: '#9E2A2B', }} />
                
                <div
                    style={{ height: '85vh', width: '25rem', marginBottom: '3rem', background: '#9E2A2B', }} />

                <div
                    style={{ height: '85vh', width: '25rem', marginBottom: '3rem', background: '#9E2A2B', }} />
                
                <div
                    style={{ height: '85vh', width: '25rem', marginBottom: '3rem', background: '#9E2A2B', }} />

<div classNameName='card-cell'>
                    <div classNameName='card-inner'>
                        <div classNameName='card-front' />
                        <div classNameName='card-back' />
                    </div>
                </div>
 */