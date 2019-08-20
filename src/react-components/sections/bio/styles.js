import styled from 'styled-components'


export const SectionTitle = styled.h1`
    position: absolute;
    text-align: center;
    color: #E09F3E;
    margin-top: 10rem;
    z-index: 10;
`
//#05090A
export const SkillContainer = styled.div`
    display: flex;
    width: 27rem;
    flex-direction: column;
    align-items: center;

    @media (max-width: 769px) {
        /* flex-basis: 80%; */
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
