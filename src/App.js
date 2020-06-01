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
class App extends Component{
  render() {
    return (
      <div className="App">
        <Message/>
        <Count></Count>
        <CallCustomFunction></CallCustomFunction>
         {/* <Greet name="Priyanka" heroName="Wonder Woman">
           <p>This is children props</p></Greet>
         <Greet name="Mahesh" heroName="BatMan" />
         <button>Action</button>
         <Greet name="Ganesh" heroName="super star" />
         

       <Welcome  name="Priyanka" heroName="Wonder Woman"/>
       <Welcome  name="Mahesh" heroName="BatMan" />
       <Welcome name="Ganesh" heroName="super star" /> */}
        {/* <Hello /> */}
      </div>
      
    );
  }
  
}

export default App;
