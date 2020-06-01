import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import CanvasPrime from './react-components/CanvasPrime'
import GlobalStyle from './globalStyle'


ReactDOM.render(
    <Fragment>
        <GlobalStyle />
        <CanvasPrime />
    </Fragment>,
    document.getElementById('app')
)

// // #1a0000