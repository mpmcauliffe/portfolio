import styled from 'styled-components'


/*
 *  CONTAINERS
 */
export const BodyContainer = styled.div`
    max-height: 1000vh;
    width: 100%;
    /* padding-bottom: 40vh; */
    background: ${props => props.theme.midnight};
`
export const Partition = styled.div`
    display: flex; 
    flex-basis: 27rem; 
    width: 90%; 
    justify-content: space-around; 
    margin: 10vh auto 25vh auto; 
    flex-wrap: wrap;

    @media (max-width: 769px) {
        margin-bottom: 20vh;
    }
`
export const SmallContainer = styled.div`
    display: flex;
    width: ${props => props.biopic ? '100%' : '24rem'};
    /* max-width: ${props => props.biopic ? '100rem' : '24rem'}; */
    flex-direction: ${props => props.biopic ? 'row' : 'column'};
    justify-content: ${props => props.biopic ? 'space-between' : ''};
    align-items: center;
    margin-bottom: 3rem;

    @media (max-width: 767px) {
        flex-direction: column;
        /* justify-content: center; */
    }
`


/*
 *  TEXT
 */
export const SectionTitle = styled.h1`
    position: relative;
    text-align: center;
    font-weight: 400;
    /* color: ${props => props.theme.primaryGray}; */
    color: ${props => props.theme.secondaryGray};
    margin-top: 0;
    padding-top: 10rem;
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

// original GradientShield
    // background: -moz-linear-gradient(top,  rgba(0,0,0,0) 0%, rgba(0,0,0,0) 1%, 
    //     rgba(0,0,0, .9) 40%, rgba(0,0,0, 1) 60%, rgba(28,51,57, 1) 100%); /* FF3.6-15 */
    // background: -webkit-linear-gradient(top,  rgba(0,0,0,0) 0%,rgba(0,0,0,0) 1%,
    //     rgba(0,0,0, .9) 40%, rgba(0,0,0, 1) 60%, rgba(28,51,57, 1) 100%); /* Chrome10-25,Safari5.1-6 */
    // background: linear-gradient(to bottom,  rgba(0,0,0,0) 0%,rgba(0,0,0,0) 1%,rgba(0,0,0, .9) 40%,
    //     rgba(0,0,0, 1) 60%, rgba(28,51,57, 1) 100%); W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+
    // filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', 
    //     endColorstr='#a6ffffff',GradientType=0 ); /* IE6-9 */
