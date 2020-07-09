import styled from 'styled-components'


export const ContactForm = styled.form`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;
    /* margin-bottom: 10rem; */
    overflow-x: hidden;
    background-color: ${props => props.theme.midnight};

    >input, >textarea {
        height: 6rem;
        width: 37vw;
        margin: 2rem 0;
        padding: 1rem;
        outline: none;
        border: .2rem solid ${props => props.theme.primaryGray};
        background: ${props => props.theme.inputBack};
        color: ${props => props.theme.secondaryGray};
        font-size: 2.5rem;
        transition: 700ms;

        &:focus {
            border: .2rem solid ${props => props.theme.primary};
        }
    }
    >textarea {
        height: 16rem;
        font-family: sans-serif;
    }
    >p {
        font-size: 1.9rem;
        text-align: center;
        color: ${props => props.theme.primaryGray};
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
        border: .2rem solid ${props => props.theme.secondary};
        -webkit-text-fill-color: ${props => props.theme.secondary};
        -webkit-box-shadow: 0 0 0px 1000px #000 inset;
        /* transition: background-color 5000s ease-in-out 0s; */
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
    border: .3rem solid ${props => props.isComplete ? props.theme.primary : props.theme.inputBack};
    color: ${props => props.isComplete ? props.theme.primary : props.theme.inputBack};
    font-size: 2.7rem;
    cursor: ${props => props.isComplete ? 'pointer' : ''};;
`

export const Footer = styled.div`
    /* position: absolute; */
    height: 20vh;
    width: 100%;
    
    background: #05090A;
`
