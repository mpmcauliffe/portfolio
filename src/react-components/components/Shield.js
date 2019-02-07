import React from 'react'
import { 
    GradientShield,
    Reflection,
} from '../../assets/styled-components'


const Shield = () =>
    <div>
        <GradientShield />
        <Reflection 
            src={require('../../assets/images/reflection.png')}
            alt='reflection'
        />
    </div>


export { Shield }
