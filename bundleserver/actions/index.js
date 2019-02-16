var bundlesJSON  = require('../data/bundles.json').bundles;
var productsJSON = require('../data/products.json').products;



// Just a simple print to console statement
function print(){
    console.log("hey!");
}


// Gets just the product object from products.json
function getProduct(id){
    return productsJSON[id].product;
}


// getProducts(id) - returns an array of objects containing the product. only for ids asked for
function getProducts(ids) {
    var products = [];

    for(id in ids){
        
        products.push(getProduct(id));
    }

    return products;

}

function getBundle(id){
    return bundlesJSON[id].bundle;
}

// Returns array of ids containing popular bundles
function getTopBundles(){
    var topBundles = [];
    for(var i=0; i<bundlesJSON.length; i++){
        if(getBundle(i).is_popular){
            topBundles.push(i);
        }
    }
    
    return topBundles;
}




//  ----- HANDLE SAVING TO BUNDLE OR PRODUCTS-----


// To test stuff
// getBundle(1);
// getTopBundles();



module.exports = {
    print,
    getProducts,
    getBundle,
    getTopBundles
}