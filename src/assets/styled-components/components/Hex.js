import styled, { keyframes } from 'styled-components'


const imageAnimation = keyframes`
    0% { 
        opacity: 0; 
        animation-timing-function: ease-in;
    }
    100% {
        opacity: 1;
        animation-timing-function: ease-in;
    }
`
const HexCanvas = styled.div`
    height: 133vh;
    width: 100vw;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background: #05090A;
    animation: ${imageAnimation} 10s 2s; 
`
const NamePlaque = styled.div`
    height: 19rem;
    width: 63rem;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -9.5rem;
    margin-left: -31.5rem;
    background: #C7D2D5;
    border-radius: 3rem;
    opacity: .7;
    text-align: center;
`
const Top = styled.div`
    background: #05090A; 
`


export {
    HexCanvas,
    NamePlaque,
    Top,
}
