import React, { Component } from 'react';
import ReactDOM from 'react-dom'
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Bundle } from './Components';
import Home from './Components/Home'
import Product from './Components/Product'

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/bundle" component={Bundle} />
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
