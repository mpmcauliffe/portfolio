import React, { useState, useEffect, } from 'react'
import { Home, Menu, Nav, UlMenu, } from './styles'
import scrolling from '../../../assets/helpers/scrolling'


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
            <Home onClick={() => scrolling(0)} />

            <UlMenu>
                <Menu>About</Menu>
                <Menu>Portfolio</Menu>
                <Menu>Blog</Menu>
                <Menu>Contact</Menu>
            </UlMenu>
        </Nav>
    )    
}


export { Navbar }


/**
 <img
        img='hex' 
        src={require('../../../assets/images/hex.png')} 
        style={{ height: '4rem', }} />
 */