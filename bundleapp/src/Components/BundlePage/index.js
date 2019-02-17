import React, { Component } from 'react'
import Bundle  from '../Bundle'

class BundlePage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return(
            <div>
                <h1>Bundles</h1>
                <Bundle></Bundle>
                <Bundle></Bundle>
                <Bundle></Bundle>
                <Bundle></Bundle>
                <Bundle></Bundle>
            </div>
        )
    }
}


export default BundlePage;