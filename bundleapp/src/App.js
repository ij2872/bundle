import React, { Component } from 'react';
import ReactDOM from 'react-dom'
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BundlePage  from './Components/BundlePage';
import Home from './Components/Home'
// import Bundle from './Components/Bundle'
import Product from './Components/Product'
import hamburgerMenu from './img/svg/hamburger-menu.svg'

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
        <div className="nav">
          <img src={hamburgerMenu} />
        </div>
        {routing}
      </div>
    );
  }
}

export default App;
