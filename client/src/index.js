import React from 'react'
import ReactDOM from 'react-dom'
import CanvasPrime from './react-components/CanvasPrime'
import { CssBaseline } from '@material-ui/core'
//import './assets/themes/css/base.css'
import './assets/themes/css/loginStyles.css'


ReactDOM.render(
    <CssBaseline>
        <CanvasPrime />
    </CssBaseline>,
    document.getElementById('root')
)
