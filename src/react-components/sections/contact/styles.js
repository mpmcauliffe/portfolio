import styled from 'styled-components'


export const ContactForm = styled.form`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;
    /* margin-bottom: 10rem; */
    overflow-x: hidden;

    > input {
        height: 4rem;
        width: 37vw;
        margin: 2rem 0;
        padding: 1rem;
        font-size: 2.5rem;
    }
    > textarea {
        height: 16rem;
        width: 37vw;
        font-size: 2.5rem;
        margin: 2rem 0;
        padding: 1rem;
    }
`

export const Footer = styled.div`
    position: absolute;
    height: 90vh;
    width: 100%;
    
    background: #05090A;
`
