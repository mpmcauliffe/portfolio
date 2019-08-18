import styled, { keyframes } from 'styled-components'


const fogAnimation = keyframes`
    0% { 
        opacity: 1; 
        animation-timing-function: ease-in;
    }
    100% {
        opacity: 0;
        animation-timing-function: ease-in;
    }
`
const tapeAnimation = keyframes`
    0% { 
        opacity: 0; 
        animation-timing-function: ease-in;
    }
    100% {
        opacity: .7;
        animation-timing-function: ease-in;
    }
`
export const HexCanvas = styled.div`
    height: 133vh;
    width: 100vw;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background: #05090A;
`
export const NamePlaque = styled.div`
    position: absolute;
    height: 23rem;
    width: 63rem;
    z-index: 3;
    top: 50%;
    left: 50%;
    margin-top: -25rem;
    margin-left: -31.5rem;
    background: #C7D2D5;
    border-radius: 3rem;
    text-align: center;
    opacity: .7;
    animation: ${tapeAnimation} 3s;

    @media (max-width: 769px) {
        height: 33rem;
        width: 100vw;
        margin: 0;
        top: 5%;
        left: 0;
    }
`
export const NavButton = styled.div`
    display: flex;
    height: 4rem;
    width: 67%;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    color: #E09F3E;
    background: #1C3339;
    transition: 700ms;

    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
    &:hover > span {
        clip-path: polygon(87% 100%, 87% 39%, 100% 39%, 50% 0, 0 39%, 13% 39%, 13% 100%);
        transform: rotate(180deg);
    }

    @media (max-width: 480px) {
        width: 85%;
    }
`
export const DownArrow = styled.span`
    height: 3rem;
    width: 2.7rem;
    background: #E09F3E;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    transition: 700ms;
`

export const Fog = styled.div`
    height: 133vh;
    width: 100vw;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    background: #05090A;
    opacity: 0;
    animation: ${fogAnimation} 20s;
`
export const Top = styled.div`
    background: #05090A; 
`

export const GradientShield = styled.div`
    height: 41vh;
    width: 100%;
    position: absolute;
    top: 110vh;
    background: -moz-linear-gradient(top,  rgba(0,0,0,0) 0%, rgba(0,0,0,0) 1%, 
        rgba(0,0,0, .9) 40%, rgba(0,0,0, 1) 60%, rgba(28,51,57, 1) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top,  rgba(0,0,0,0) 0%,rgba(0,0,0,0) 1%,
        rgba(0,0,0, .9) 40%, rgba(0,0,0, 1) 60%, rgba(28,51,57, 1) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom,  rgba(0,0,0,0) 0%,rgba(0,0,0,0) 1%,rgba(0,0,0, .9) 40%,
        rgba(0,0,0, 1) 60%, rgba(28,51,57, 1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', 
        endColorstr='#a6ffffff',GradientType=0 ); /* IE6-9 */

    /* Permalink - use to edit and share this gradient: 
    https://colorzilla.com/gradient-editor/#000000+0,000000+51,ffffff+100&0+1,0+1,0.65+51 */
`
