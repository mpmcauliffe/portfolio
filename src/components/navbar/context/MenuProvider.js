import React, { createContext, } from 'react'
import styled from 'styled-components'


const menuContext = createContext()

export const Menu = styled.li`
    display: inline;
    list-style: none;
    float: right;
    font-size: 2rem;
    color: ${props => props.theme.secondaryGray};
    transition: 700ms;

    &:hover, > .active {
        cursor: pointer;
        color: ${props => props.theme.primary};
        /* border-bottom: .1rem solid #E09F3E; */
    }

    .active {
        color: ${props => {
            return props.theme.primary
        }};
    }

    @media (max-width: 480px) {
        font-size: 1.6rem;
    }
    @media (min-width: 1439px) {
        font-size: 2.5rem;
    }
    @media (min-width: 1999px) {
        font-size: 3rem;
    }
    @media (min-width: 2300px) {
        font-size: 3.5rem;
    }
`

const MenuProvider = props => {

    return (
        <menuContext.Provider
            value={{ Menu }}>

            {props.children}
        </menuContext.Provider>
    )
}


export default MenuProvider
