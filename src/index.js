import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider, } from 'styled-components'
import { theme } from './themes/theme'
import CanvasPrime from './react-components/CanvasPrime'
import GlobalStyle from './themes/globalStyle'


ReactDOM.render(
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <CanvasPrime />
    </ThemeProvider>,
    document.getElementById('app')
)

// // #1a0000
// "styled-components": "^4.1.3",