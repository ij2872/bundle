import React from 'react';


const Product = (props) => {
    return (
        <div className="product">
            <h3 className="product-title">{props.title}</h3>
            <p className="product-author">{props.author}</p>
            <p className="product-description">{props.product_description}</p>
            
        </div>


    );
}

export default Product;