import styled, { css } from 'styled-components'


export const Card = styled.div`
    /* width: 30rem; */
    width: 32rem;
    /* height: 50rem; */
    height: 40.8rem;
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
        /* width: 100%; */
        width: 32rem;
        /* width: ${window.innerWidth < 481 ? '100%' : '30rem'}; */
        /* max-width: 30rem; */
        /* height: 100%; */
        height: 40.8rem;
        backface-visibility: hidden;
    }
    
    .card-front {
        /* background-color: #9E2A2B; */
        background-color: transparent;
    }
    
    .card-back {
        /* background-color: #78C0E0; */
        background-color: transparent;
        transform: rotateY(180deg);
    }

    @media (max-width: 480px) {
        .card-front, .card-back {
            right: 37.5%;
            top: 8%;
        }
    }
    /* @media (max-width: 420px) {
        .card-back {
            
        }
    }
    @media (max-width: 380px) {
        .card-front, .card-back {
            height: 30rem;
        }
    }
    @media (max-width: 360px) {
        .card-back {
            
        }
    } */
`
