import styled from 'styled-components'


export const ContactForm = styled.form`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;
    /* margin-bottom: 10rem; */
    overflow-x: hidden;

    >input, >textarea {
        height: 4rem;
        width: 37vw;
        margin: 2rem 0;
        padding: 1rem;
        font-size: 2.5rem;
    }
    >textarea {
        height: 16rem;
        font-family: sans-serif;
    }
    >p {
        font-size: 1.7rem
        text-align: center;
        color: #ccccff;
    }

    @media (max-width: 768px) {
        >input, >textarea {
            width: 77vw;
        }
    }

    @media (max-width: 480px) {
        >input, >textarea {
            width: 95vw;
        }
    }
`

export const SubmitButton = styled.button`
    height: 6rem;
    width: 33rem;
    margin: 6rem 0;
    background: transparent;
    border: .3rem solid #3456df;
    cursor: pointer;
`

export const Footer = styled.div`
    position: absolute;
    height: 20vh;
    width: 100%;
    
    background: #05090A;
`
