import React from 'react'
import { HexCanvas, } from '../../assets/styled-components/components'
import { HexPattern, } from '../../assets/styled-components/components'


const Honeycomb = () => 
    <HexCanvas>
        <HexPattern
            src={require('../../assets/images/hex-small-positioned-dim.gif')}
            alt='honeycomb'
        />
    </HexCanvas>


export { Honeycomb }
