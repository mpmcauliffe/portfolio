import styled from 'styled-components'
import { colorTheme } from '../appStyles'


/*
 *  BIO 
 */
export const BioPicture = styled.div`
    height: 35rem;
    width: 29rem;
    background: transparent;
    /* border: .2rem solid #e8f8ff; */
    /* box-shadow: inset 3rem 4rem 2rem #000; */
    /* clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%); */
    /* clip-path: polygon(50% 0%, 100% 14%, 100% 86%, 50% 100%, 0 86%, 0 14%); */

    @media (max-width: 1224px) {
        /* margin-bottom: 5rem; */
    }

    @media (max-width: 769px) {
        flex-basis: 100%;
    }
`
export const BioImage = styled.img`
    height: 35rem;
    width: 29rem;

    @media (min-width: 1439px) {
        height: 40rem;
        width: 33rem;
    }
    @media (min-width: 1999px) {
        height: 47rem;
        width: 39rem;
    }
    @media (min-width: 2300px) {
        height: 56rem;
        width: 47rem;
    }
`


/*
 *  SKILLS 
 */
export const ListOutContainer = styled.div`
    display: flex;
    align-self: center;
    margin: 0 auto;
    padding: 10rem 0 10rem 10rem;
    background: ${props => props.theme.secondaryGray};
    border: .1rem solid ${props => props.theme.midnight};
    opacity: .7;
    /* border-radius: 3rem; */

    @media (max-width: 1280px) {
        margin-top: 5rem;
    }

    @media (max-width: 769px) {
        padding: 4rem 0 4rem 6rem;
        width: 90%;
        margin: 5rem auto 0 auto;
    }
    @media (max-width: 481px) {
        flex-direction: column;
        align-items: center;
        padding: 3rem 3rem;
    }
`
export const SkillImage = styled.img`
    height: 15rem;
    width: 15rem;

    @media (min-width: 1439px) {
        height: 19rem;
        width: 19rem;
    }
    @media (min-width: 1999px) {
        height: 24rem;
        width: 24rem;
    }
    @media (min-width: 2300px) {
        height: 29rem;
        width: 29rem;
    }
`
export const SkillPolygon = styled.div`
    height: 10rem;
    width: 10rem;
    background: ${props => props.theme.secondary};
    clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
`
export const SkillTitle = styled.h3`
    text-align: center;
    color: ${props => props.theme.warmGray};
`
export const SkillContent = styled.p`
    font-size: 1.9rem;
    color: ${props => props.theme.warmGray};

    @media (max-width: 767px) {
        text-align: center;
    }
    @media (min-width: 1439px) {
        font-size: 2.4rem;
    }
    @media (min-width: 1999px) {
        font-size: 2.8rem;
    }
    @media (min-width: 2299px) {
        font-size: 3.1rem;
    }
`
