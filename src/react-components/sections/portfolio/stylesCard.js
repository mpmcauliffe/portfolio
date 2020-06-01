import styled from 'styled-components'


export const Card = styled.div`
    width: 30rem;
    height: 50rem;
    margin-bottom: 5rem;
    background: transparent;
    perspective: 1000px;

    .card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;
    }
    
    &:hover .card-inner {
        transform: rotateY(180deg);
    }
    
    .card-front, .card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
    }
    
    .card-front {
        background-color: #9E2A2B;
    }
    
    .card-back {
        background-color: #78C0E0;
        transform: rotateY(180deg);
    }
`
