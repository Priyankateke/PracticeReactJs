import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';


//Give the same name to component if we export component in same line
import Greet from './components/Greet'
import Welcome from './components/Welcome'

class App extends Component{
  render() {
    return (
      <div className="App">
        <Greet />
        <Welcome />
      </div>
    );
  }
  
}

export default App;
