import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import AppChild from './components/AppChild';

class App extends Component {



  handleClick=()=>{
    console.log("App.handleClick!!");
  }
 handleChildClick=(xx)=>{
   console.log(xx);
    console.log("App.handleChildClick!! "+toString(xx));
  }

  render() {
    const {handleChildClick,handleClick}=this;
    return (
      <div className="App">
      <button onClick={handleClick}>외부</button>
        <AppChild dataClick={handleChildClick}/>
      </div>
    );
  }
}

export default App;
