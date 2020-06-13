import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider, } from 'styled-components'
import { GlobalStyle, themeGray, themeLight, } from './themes'
import CanvasPrime from './components/CanvasPrime'


ReactDOM.render(
    <ThemeProvider theme={themeGray}>
        <GlobalStyle />
        <CanvasPrime />
    </ThemeProvider>,
    document.getElementById('app')
)

// // #1a0000
// "styled-components": "^4.1.3",