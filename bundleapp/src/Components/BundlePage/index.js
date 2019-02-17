import React, { Component } from 'react'
import Bundle  from '../Bundle'
let Bundles  = require('../../data/bundles').bundles;


class BundlePage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    
    
    render() {
        let bundleContent = [];

        for(let i=0; i<Bundles.length; i++){
            let content = Bundles[i].bundle;
            bundleContent.push(
            <Bundle
                bundleImg={content.img}   
                title={content.title}
                author={content.author}
                products={content.products}
                description={content.description}

            
            >
            
            </Bundle>);
        }

        return(
            <div>
                <h1>Bundles</h1>
                {bundleContent}
                {/* <Bundle></Bundle>
                <Bundle></Bundle>
                <Bundle></Bundle>
                <Bundle></Bundle>
                <Bundle></Bundle> */}
            </div>
        )
    }
}


export default BundlePage;