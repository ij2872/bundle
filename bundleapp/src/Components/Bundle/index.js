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


    createSendToAmazon(asIDs){
      let url = "https://www.amazon.com/gp/aws/cart/add.html?"

      let index = 1;
      asIDs.forEach(element => {
        let ASIN = "ASIN."+index+"=" + element +"&Quantity."+index+"=1&";
        url += ASIN;
        index++;
      });

      return url;
    }


  render() {
    // Render products
    let prods = [];
    let ASIDS = [];
    let amazonLink = "";
    for(let i=0; i<this.props.products.length; i++){
      ASIDS.push(this.props.products[i].ASID);
      prods.push(<div>{this.props.products[i].name}</div>);
    }
    amazonLink = this.createSendToAmazon(ASIDS);
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
              <a href={amazonLink} className="bundle-info-buy"><img src={buySVG}></img>Buy</a>
              <a href="#" className="bundle-info-info"><img src={starSVG}></img>Info</a>
            </div>
          </div>

        </div>

        
        
      </div>
    );
  }
}

export default Bundle;
