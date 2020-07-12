import React, { useState, useEffect, } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import { Home, Menu, Nav, UlMenu, } from './styles'


const Navbar = () => {
    // const scrollRef = useRef(null)
    const [isTraveling, setIsTraveling] = useState(false)

    const findNavbarTop = () => {
        window.innerWidth > 480 
            ? window.scrollY > window.innerHeight + (window.innerHeight / 2) 
                ? setIsTraveling(true)
                : setIsTraveling(false)
            : window.scrollY > window.innerHeight / 2
                ? setIsTraveling(true)
                : setIsTraveling(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', findNavbarTop)
        
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
                spy

            ><Home /></Link>
            

            <UlMenu>
                <Link
                    activeClass='active'
                    to='portfolio'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}

                ><Menu>Portfolio</Menu></Link>

                <Link
                    activeClass='active'
                    to='about'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}

                ><Menu>About</Menu></Link>
                {/* */}
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
                    duration={500}

                ><Menu>Contact</Menu></Link>
            </UlMenu>
        </Nav>
    )    
}


export { Navbar }
