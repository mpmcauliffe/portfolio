import styled from 'styled-components'


const GradientShield = styled.div`
    height: 37vh;
    width: 110vw;
    position: absolute;
    top: 117.5vh;
    left: -9vw;
    transform: rotate(-7deg);
    background: linear-gradient(to bottom, #54514B 0%, #F6F3EC 70%, #1C3339 100%);
    border-top: .1rem solid rgba(246,243,236,.2);
`
const Reflection = styled.img`
    height: 37vh;
    width: 110vw;
    position: absolute;
    top: 117.5vh;
    left: -9vw;
    transform: rotate(-7deg);
    opacity: .1;
`


export { 
    GradientShield, 
    Reflection,
}
