import React, { Component } from 'react';
import ReactDOM from 'react-dom'
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BundlePage  from './Components/BundlePage';
import Home from './Components/Home'
// import Bundle from './Components/Bundle'
import Product from './Components/Product'

const routing = (
  <Router>
    
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/bundles" component={BundlePage} />
      <Route path="/product" component={Product} />
    </div>
  </Router>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        {routing}
      </div>
    );
  }
}

export default App;
