import React, { Fragment, useEffect, } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import EmblaCarousel from '../embla/EmblaCarousel'
import { Partition, } from '../../appStyles'
import { CardBacking, IconSet, Info, LinkLabel, NavLinks, } from './styles'
import { Card } from './stylesCard'
//import { projects } from './projects'
//import './embla/embla.css'


const CardWrapper = props => {
    return (
        <Partition portfolio>
            {/* {props.children} */}

            {window.innerWidth < 481
                ?   (
                    <EmblaCarousel>
                        <div style={{ display: 'flex', }}>
                            {props.children}
                        </div>
                    </EmblaCarousel>
                ) : (
                    <Fragment>{props.children}</Fragment>
                )
            }
            
        </Partition>
    )
}

// ${full.path} vs `../someDirectory/${filename}.png`
export default({ project }) => {
    return (
        <Card 
            key={project.name}
            style={{ minWidth: window.innerWidth < 481 ? '100%' : '30rem' }}>
            <div className='card-inner'>
                <div className='card-front'>
                    <img src={require(`../images/${project.coverImg}.png`).default} alt={project.alt} />
                </div>
                <div className='card-back'>
                    <CardBacking 
                        color={project.textColor}
                        background={project.backgroundColor}
                        style={{ maxWidth: window.innerWidth < 481 ? '32rem' : '32rem', }}>
                        
                        {/**/}
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
    )
}



// import React, { Fragment, useEffect, } from 'react'
// import { BrowserRouter as Router, Link } from 'react-router-dom'
// import { useEmblaCarousel } from 'embla-carousel/react'
// import { Partition, } from '../../appStyles'
// import { CardBacking, IconSet, Info, LinkLabel, NavLinks, } from './styles'
// import { Card } from './stylesCard'
// import { projects } from './projects'
// //import './embla/embla.css'


// const CardWrapper = props => {
//     const [EmblaCarouselReact, embla] = useEmblaCarousel({ loop: false })

//     useEffect(() => {
//         if (!embla) return

//         embla.on('select', () => {
//             console.log(`Index is ${embla.selectedScrollSnap()}`)
//         })
//     }, [embla])


//     return (
//         <Partition portfolio>
//             {/* {props.children} */}

//             {window.innerWidth < 481
//                 ?   (
//                     <EmblaCarouselReact>
//                         <div style={{ display: 'flex', }}>
//                             {props.children}
//                         </div>
//                     </EmblaCarouselReact>
//                 ) : (
//                     <Fragment>{props.children}</Fragment>
//                 )
//             }
            
//         </Partition>
//     )
// }

// // ${full.path} vs `../someDirectory/${filename}.png`
// export default() => {
//     return (
//         <CardWrapper>
//             {projects.map(project => (
//                 <Card 
//                     key={project.name}
//                     style={{ minWidth: window.innerWidth < 481 ? '100%' : '30rem' }} 
//                     >
//                     <div className='card-inner'>
//                         <div className='card-front'>
//                             <img src={require(`../images/${project.coverImg}.png`).default} alt={project.alt} />
//                         </div>
//                         <div className='card-back'>
//                             <CardBacking 
//                                 color={project.textColor}
//                                 background={project.backgroundColor}
//                                 style={{ maxWidth: window.innerWidth < 481 ? '30rem' : '30rem', }}>
                                
//                                 {/**/}
//                                 <Info>{project.info}</Info>

//                                 {project.logos &&
//                                     <div style={{ display: 'flex', justifyContent: 'space-around' }}>
//                                         {project.logos.map(logo => (
//                                             <img 
//                                                 key={logo}
//                                                 alt='logo'
//                                                 src={require(`../images/logos/${logo}.png`).default}
//                                                 style={{ height: 75, width: 75, }} />
//                                         ))}
//                                     </div>
//                                 }
//                                  <NavLinks>
//                                     <Router>
//                                         <a href={project.codeLink} style={{ textDecoration: 'none',}}>
//                                             <IconSet hov={project.hov}>
//                                                 <i className='fa fa-code fa-2x' aria-hidden='true' />
//                                                 <LinkLabel>Code</LinkLabel>
//                                             </IconSet>
//                                         </a>     
//                                         {project.deployed && 
//                                             <Fragment>
//                                                 <a href={project.instructionsLink} style={{ textDecoration: 'none',}}>
//                                                     <IconSet hov={project.hov}>
//                                                         <i className='fa fa-info fa-2x' aria-hidden='true' />
//                                                         <LinkLabel>Instructions</LinkLabel>
//                                                     </IconSet>
//                                                 </a>
                                                
//                                                 <a href={project.visitLink} style={{ textDecoration: 'none',}}>
//                                                     <IconSet hov={project.hov}>
//                                                         <i 
//                                                             className='fa fa-arrow-up fa-2x' 
//                                                             aria-hidden='true' 
//                                                             style={{ transform: 'rotate(45deg)'}} />
//                                                         <LinkLabel>Visit</LinkLabel>
//                                                     </IconSet>
//                                                 </a>
//                                             </Fragment>
//                                         }
//                                     </Router>
                                                                            
//                                 </NavLinks> 
                                
//                             </CardBacking>
//                         </div>
//                     </div>
//                 </Card>
//             ))}
//         </CardWrapper>
//     )
// }
