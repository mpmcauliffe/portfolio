import React from 'react'
import '../../assets/themes/css/honeycomb.css'
import {
    View,
    Layer,
    Group,
    Path,
    Circle,
    Ellipse,
    Rectangle,
    PointText,
    Tool,
  } from 'react-paper-bindings'
  

const Honeycomb = () => {
    const ReactLogo = ({ rotation, x, y }) => {
        return (
          <Group name={'reactLogo'} rotation={rotation}>
            <Ellipse
              center={[x, y]}
              size={[70, 25]}
              strokeWidth={2.5}
              strokeColor={'#61DAFB'}
            />
            <Ellipse
              center={[x, y]}
              rotation={120}
              size={[70, 25]}
              strokeWidth={2.5}
              strokeColor={'#61DAFB'}
            />
            <Ellipse
              center={[x, y]}
              rotation={240}
              size={[70, 25]}
              strokeWidth={2.5}
              strokeColor={'#61DAFB'}
            />
            <Circle
              center={[x, y]}
              fillColor={'#61DAFB'}
              radius={7}
            />
          </Group>
        )
      }
      


    return (
        <div style={{ background: '#17171B', height: '100vh', width: '100vw' }}>
            <ReactLogo />
        </div>
    )
}  



export { Honeycomb }
