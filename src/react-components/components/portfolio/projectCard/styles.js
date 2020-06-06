import styled from 'styled-components'


export const Card = styled.div`
    height: 87vh;
    width: 30rem;
    perspective: 100rem;
    background-color: transparent;

    &:hover {
        transform: rotateY(180deg)
    }
`
export const InnerCard = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    /* box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); */

    &:hover {
        transform: rotateY(180deg)
    }
`
export const 
