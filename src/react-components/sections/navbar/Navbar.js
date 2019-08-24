import React, { useState, useEffect, useRef, } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import { Home, Menu, Nav, UlMenu, } from './styles'


const Navbar = () => {

    const [isTraveling, setIsTraveling] = useState(false)

    const findNavbarTop = () => {
        if (window.scrollY > window.innerHeight + (window.innerHeight / 2)) {
            console.log('traveling')
            setIsTraveling(true)
        } else {
            setIsTraveling(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', findNavbarTop)

    // eslint-disable-next-line
    }, [])

    useEffect(() => {
        return () => {
            window.removeEventListener('scroll', findNavbarTop)
        }

    // eslint-disable-next-line
    }, [])


    return (
        <Nav traveling={isTraveling}>
            <Link
                activeClass='active'
                to='honeycomb'
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}

            ><Home /></Link>
            

            <UlMenu>

                <Link
                    activeClass='active'
                    to='about'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}

                ><Menu>About</Menu></Link>
                
                <Link
                    activeClass='active'
                    to='portfolio'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}

                ><Menu>Portfolio</Menu></Link>
                
                <Link
                    activeClass='active'
                    to='blog'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}

                ><Menu>Blog</Menu></Link>
                
                <Link
                    activeClass='active'
                    to='contact'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}

                ><Menu>Contact</Menu></Link>
            </UlMenu>
        </Nav>
    )    
}


export { Navbar }


/**
 * 
 * onClick={() => scrolling(window.scrollY - window.scrollY + (window.innerHeight + (window.innerHeight / 2)))}
 <img
        img='hex' 
        src={require('../../../assets/images/hex.png')} 
        style={{ height: '4rem', }} />
 */