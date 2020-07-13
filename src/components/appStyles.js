import styled from 'styled-components'


/*
 *  CONTAINERS
 */
export const BodyContainer = styled.div`
    position: absolute;
    /* max-height: 1000vh; */
    width: 100%;
    z-index: -10;
    background: ${props => props.theme.background};

    .up-chev {
        position: absolute;
        height: 77vh;
        width: 100vw;
        top: 101vh;
        z-index: -1;
        background: #810424; 
        opacity: .2;
        /* transform: skewY(-20deg); */
        /* clip-path: polygon(100% 65%, 50% 42%, 0 65%, 0 36%, 50% 13%, 100% 36%); */
    }
`
export const Partition = styled.div`
    display: flex; 
    flex-basis: 27rem; 
    width: 90%; 
    justify-content: space-around; 
    /* justify-content: space-between;  */
    margin: 10vh auto 25vh auto; 
    flex-wrap: wrap;
    overflow: hidden;

    .bio-pic {
        justify-content: space-between;
    }

    @media (min-width: 1599px) {
        width: ${props => props.portfolio ? '80%' : '90%'};
    }
    @media (min-width: 1999px) {
        width: ${props => props.portfolio ? '60%' : '90%'};
    }
    @media (min-width: 2299px) {
        width: ${props => props.portfolio ? '50%' : '85%'};
    }

`
export const SmallContainer = styled.div`
    display: flex;
    width: ${props => props.biopic ? '100%' : '24rem'};
    /* max-width: ${props => props.biopic ? '100rem' : '24rem'}; */
    flex-direction: ${props => props.biopic ? 'row' : 'column'};
    justify-content: ${props => props.biopic ? 'space-evenly' : ''};
    align-items: center;
    margin-bottom: 3rem;

    @media (max-width: 767px) {
        flex-direction: column;
    }
    @media (min-width: 1439px) {
        width: ${props => props.biopic ? '80%' : '30rem'};
        margin-bottom: 10vh;
    }
    @media (min-width: 1999px) {
        width: ${props => props.biopic ? '70%' : '35rem'};
        margin-bottom: 15vh;
    }
    @media (min-width: 2299px) {
        width: ${props => props.biopic ? '60%' : '40rem'};
    }
`


/*
 *  TEXT
 */
export const SectionTitle = styled.h2`
    position: relative;
    text-align: center;
    font-weight: 400;
    /* color: ${props => props.theme.primaryGray}; */
    color: ${props => props.theme.secondaryGray};
    margin-top: 0;
    padding-top: ${() => window.innerWidth > 480 ? '10rem': '1rem'};
    z-index: 10;
`


/*
 *  EFFECTS
 */
export const GradientShield = styled.div`
    height: 41vh;
    width: 100%;
    position: absolute;
    top: ${props => props.top || '100vh'};
    background: -moz-linear-gradient(top,  rgba(0,0,0,0) 0%, rgba(0,0,0,0) 1%, 
        rgba(0,0,0, .1) 5%, rgba(0,0,0, .3) 10%, rgba(0,0,0, .5) 30%, 
        rgba(0,0,0, .7) 55%, rgba(0,0,0, 1) 70%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top,  rgba(0,0,0,0) 0%,rgba(0,0,0,0) 1%,
        rgba(0,0,0, .1) 5%, rgba(0,0,0, .3) 10%, rgba(5, 9, 10, .5) 30%, 
        rgba(0,0,0, .7) 55%, rgba(5, 9, 10, 1) 70%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom,  rgba(0,0,0,0) 0%,rgba(0,0,0,0) 1%,
        rgba(0,0,0, .1) 5%, rgba(0,0,0, .3) 10%, rgba(5, 9, 10, .5) 30%, 
        rgba(0,0,0, .7) 55%, rgba(5, 9, 10, 1) 70%); W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', 
        endColorstr='#a6ffffff',GradientType=0 ); /* IE6-9 */

    /* Permalink - use to edit and share this gradient: 
    https://colorzilla.com/gradient-editor/#000000+0,000000+51,ffffff+100&0+1,0+1,0.65+51 */
`

export const Up = styled.div`
    
`

// original GradientShield
    // background: -moz-linear-gradient(top,  rgba(0,0,0,0) 0%, rgba(0,0,0,0) 1%, 
    //     rgba(0,0,0, .9) 40%, rgba(0,0,0, 1) 60%, rgba(28,51,57, 1) 100%); /* FF3.6-15 */
    // background: -webkit-linear-gradient(top,  rgba(0,0,0,0) 0%,rgba(0,0,0,0) 1%,
    //     rgba(0,0,0, .9) 40%, rgba(0,0,0, 1) 60%, rgba(28,51,57, 1) 100%); /* Chrome10-25,Safari5.1-6 */
    // background: linear-gradient(to bottom,  rgba(0,0,0,0) 0%,rgba(0,0,0,0) 1%,rgba(0,0,0, .9) 40%,
    //     rgba(0,0,0, 1) 60%, rgba(28,51,57, 1) 100%); W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+
    // filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', 
    //     endColorstr='#a6ffffff',GradientType=0 ); /* IE6-9 */
