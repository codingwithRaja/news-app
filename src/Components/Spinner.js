import React, { Component } from 'react'
import giphy from './giphy.gif'

export class Spinner extends Component {
    render() {
        return (
            <div>
                <img src={giphy} alt="giphy" />
            </div>
        )
    }
}

export default Spinner
