import styled from 'styled-components'


export const Nav = styled.div`
    display : flex;
    position: ${props => (props.traveling ? 'sticky' : 'static')};
    height: ${() => window.innerWidth > 480 ? '10vh' : '15vh'};
    /* height: 10vh; */
    min-height: 7vh;
    width: 100vw;
    top: ${props => (
        window.innerWidth > 480
            ? props.traveling ? '-3px' : '100vh'
            : props.traveling ? '85vh' : '100vh'
    )};
    z-index: 50;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;

    background: linear-gradient(to right, ${p => p.theme.accent}, ${p => p.theme.background});
    border-top: .2rem solid ${props => props.theme.accent}; 
    border-bottom: .2rem solid ${props => props.theme.accent}; 

    /* @media (max-width: 769px) {
        justify-content: flex-start;
    } */
`
export const Home = styled.div`
    height: 4rem;
    width: 3.5rem;
    background: ${props => props.theme.secondaryGray};
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    transition: 700ms;

    &:hover {
        cursor: pointer;
        background: ${props => props.theme.secondary};
        /* background: #E09F3E; */
        /* transform: rotate(180deg); */
        clip-path: polygon(87% 0, 87% 61%, 100% 61%, 50% 100%, 0 61%, 13% 61%, 13% 0);
        transform: rotate(180deg);
    }

    @media (min-width: 1439px) {
        height: 4.7rem;
        width: 4rem;
    }
    @media (min-width: 1999px) {
        height: 5.6rem;
        width: 4.7rem;
    }
    @media (min-width: 2300px) {
        height: 6.4rem;
        width: 5.6rem;
    }
`

export const UlMenu = styled.ul`
    display: flex; 
    width: 33%; 
    justify-content: space-between;
    padding-right: 2rem;

    @media (max-width: 1024px) {
        width: 67vw;
    }

    @media (max-width: 480px) {
        width: 75vw;
        padding: 1rem;
    }
`

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
        /* border-bottom: .1rem solid ${props => props.theme.primary}; */
        /* border-bottom: .1rem solid #E09F3E; */
    }

    /* &active { color: ${props => props.theme.primary}; }  */

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
//clip-path: polygon(75% 0, 75% 61%, 100% 61%, 50% 100%, 0 61%, 25% 61%, 25% 0);
//clip-path: polygon(50% 29%, 100% 0, 100% 100%, 50% 69%, 0 100%, 0 0);
//${props => (props.traveling ? 'sticky' : 'absolute')};
//#9E2A2B;