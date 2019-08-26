import styled from 'styled-components'


export const Nav = styled.div`
    display : flex;
    position: ${props => (props.traveling ? 'sticky' : 'static')};
    height: 10vh;
    min-height: 7vh;
    width: 100vw;
    top: ${props => (props.traveling ? 0 : '150vh')};
    z-index: 50;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    background: #1C3339;

    /* @media (max-width: 769px) {
        justify-content: flex-start;
    } */
`

export const Home = styled.div`
    height: 4rem;
    width: 3.5rem;
    background: #78C0E0;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    transition: 700ms;

    &:hover {
        cursor: pointer;
        background: #E09F3E;
        /* transform: rotate(180deg); */
        clip-path: polygon(87% 0, 87% 61%, 100% 61%, 50% 100%, 0 61%, 13% 61%, 13% 0);
        transform: rotate(180deg);
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
        width: 90vw;
        padding: 1rem;
    }
`

export const Menu = styled.li`
    display: inline;
    list-style: none;
    float: right;
    font-size: 2rem;
    color: #78C0E0;
    transition: 700ms;

    &:hover, > .active {
        cursor: pointer;
        color: #E09F3E;
        /* border-bottom: .1rem solid #E09F3E; */
    }
`
//clip-path: polygon(75% 0, 75% 61%, 100% 61%, 50% 100%, 0 61%, 25% 61%, 25% 0);
//clip-path: polygon(50% 29%, 100% 0, 100% 100%, 50% 69%, 0 100%, 0 0);
//${props => (props.traveling ? 'sticky' : 'absolute')};
//#9E2A2B;