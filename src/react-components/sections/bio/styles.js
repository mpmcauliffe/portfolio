import styled from 'styled-components'
import { colorTheme } from '../../appStyles'


/*
 *  BIO 
 */
export const BioPicture = styled.div`
    height: 33rem;
    width: 33rem;
    background: transparent;
    /* border: .2rem solid #e8f8ff; */
    /* box-shadow: inset 3rem 4rem 2rem #000; */
    clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);

    @media (max-width: 769px) {
        flex-basis: 100%;
    }
`


/*
 *  SKILLS 
 */
export const ListOutContainer = styled.div`
    display: flex;
    align-self: center;
    padding: 10rem 0 10rem 10rem;
    background: #1C3339;
    border: .1rem solid #05090A;
    border-radius: 2rem;

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
export const SkillPolygon = styled.div`
    height: 10rem;
    width: 10rem;
    background: #cf78e0;
    clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
`
export const SkillTitle = styled.h3`
    text-align: center;
    color: #E09F3E;
`
export const SkillContent = styled.h4`
    text-align: center;
    color: #e8f8ff;
`
