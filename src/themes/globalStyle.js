import { createGlobalStyle, } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }
    html {
        height: 100%;
        width: 100%;
        font-size: 62.5%
    }
    body {
        margin: 0;
        font-family: sans-serif;
        overflow-x: hidden;
        height: 100vh;
    }
    h1 {
        font-size: 6rem;
    }
    h2 {
        font-size: 5rem;
    }
    h3 {
        font-size: 2.6rem;
    }
    h4 {
        font-size: 2rem;
    }
    li {
        list-style: none;
    }

    @media (min-width: 1439px) {
        h1 {
            font-size: 8rem;
        }
        h2 {
            font-size: 7rem;
        }
        h3 {
            font-size: 3.3rem;
        }
        h4 {
            font-size: 2.3rem;
        }
    }

    @media (min-width: 1999px) {
        h1 {
            font-size: 9.5rem;
        }
        h2 {
            font-size: 8.5rem;
        }
        h3 {
            font-size: 3.8rem;
        }
        h4 {
            font-size: 2.6rem;
        }
    }

    @media (min-width: 2299px) {
        h1 {
            font-size: 11rem;
        }
        h2 {
            font-size: 10rem;
        }
        h3 {
            font-size: 4.5rem;
        }
        h4 {
            font-size: 2.9rem;
        }
    }
`
// @media (min-width: 1439px) {
//         font-size: 7rem;
//     }
//     @media (min-width: 1999px) {
//         font-size: 8.5rem;
//     }
//     @media (min-width: 2300px) {
//         font-size: 10rem;
//     }