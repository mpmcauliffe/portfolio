import React, {Component} from 'react'


class Honeycomb extends Component {
    state = {
        colors: new Array(6)
    }

    render() {
        return (
            <div style={{ background: '#000' }}>
                <div>
                    <img 
                        src={require('../../assets/images/honeycomb.png')}
                        alt='honeycomb'
                        style={{ height: '100vh', width: '100vw'}}
                    />
                </div>
            </div>
        )
    }  
}


export { Honeycomb }
