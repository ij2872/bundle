import React, { Component } from 'react';
import Product from '../Product'
import './bundle.css';
import buySVG from './buy.svg'
import starSVG from './star.svg'

class Bundle extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


  render() {
    // Render products
    let prods = [];
    for(let i=0; i<this.props.products.length; i++){
      prods.push(<div>{this.props.products[i].name}</div>);
    }

    return (
      <div className="Bundle">
        <div className="bundle-info-container">
          <img className="bundle-info-img" src={this.props.bundleImg}></img>
          {/* <div className="bundle-info-img"> */}
          {/* </div> */}
          <div className="bundle-info-about">
            <h2 className="bundle-info-title">{this.props.title}</h2>
            <p className="bundle-info-author">{this.props.author}</p>
            <div className="bundle-info-products">
              {prods}
{/*           
              <div>Tawakashi Pencile Series</div>
              <div>Kitsu Roller H5</div>
              <div>Furr Wolfe Pro Pencil</div>
              <div>Zebra 3b</div>
              <div>Tawakashi Pencile Series</div>
              <div>Kitsu Roller H5</div>
              <div>Furr Wolfe Pro Pencil</div>
              <div>Zebra 3b</div> */}
            </div>
            <div className="bundle-info-buttons">
              <button className="bundle-info-buy"><img src={buySVG}></img>Buy</button>
              <button className="bundle-info-info"><img src={starSVG}></img>Info</button>
            </div>
          </div>

        </div>

        
        
      </div>
    );
  }
}

export default Bundle;
