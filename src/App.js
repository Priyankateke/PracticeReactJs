import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';


//Give the same name to component if we export component in same line
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/message';
import Count from './components/Count'
import CallCustomFunction from './components/CallCustomFunction'
import CallInlineFunction from './components/CallInlineFunction';
import MultipleFunctionCall from './components/CallMultipleFunction';
import TakeValue from './components/TakeValueOnClick'
import GetButtonValue from './components/GetButtonValue'
import Array from './components/ArrayOnClick'
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{this.props.headerProps}</h1>
        <h2>{this.props.contentProps}</h2>

      </div>

    );
  }

}


export default App;
