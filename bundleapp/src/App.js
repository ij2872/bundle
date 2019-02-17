import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Bundle } from './Components';
import Home from './Components/Home'




class App extends Component {
  render() {
    return (
      <div className="App">
        <Home></Home>
      </div>
    );
  }
}

export default App;
