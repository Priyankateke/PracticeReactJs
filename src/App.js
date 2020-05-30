import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';


//Give the same name to component if we export component in same line
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'

class App extends Component{
  render() {
    return (
      <div className="App">
         <Greet name="Priyanka" />
         <Greet name="Mahesh" />
         <Greet name="Ganesh" />
         

        {/* <Welcome /> */}
        {/* <Hello /> */}
      </div>
    );
  }
  
}

export default App;
