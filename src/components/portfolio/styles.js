import styled from 'styled-components'


export const CardBacking = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    justify-content: space-between;
    background: ${props => props.background || '#78C0E0'};
    color: ${props => props.color || '#1C3339'};
`
export const Info = styled.p`
    font-size: 2.1rem;
    text-align: center;
    /* color: ${props => props.color || '#1C3339'}; */
`
export const NavLinks = styled.div`
    display: flex;
    justify-content: space-evenly;
`
export const IconSet = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.7rem;
    transition: 700ms;
    color: ${props => props.color || '#1C3339'};

    &:hover {
        cursor: pointer;
        color: ${props => props.hov || props.theme.primary}; /*'#9E2A2B*/
    }

    /* color: ${props => props.color || '#1C3339'}; */
`
export const LinkLabel = styled.p`
    font-size: 1.7rem;
`
