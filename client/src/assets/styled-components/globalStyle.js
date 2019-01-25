import { createGlobalStyle, } from 'styled-components'


const GlobalStyle = createGlobalStyle`
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
`


export default GlobalStyle
