import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

class AppChild extends Component{

 state ={
  number:0
}
render(){
const {number}= this.state;
const {mesgC,mesgCC} = this.props;
console.log(this.props);
  return(
<span>
 {this.props.children+"33"}
 console.log( {this.props.children},'>);
      <p>{number}</p>
      <button onClick=
      {
        ()=>{
        this.setState({
          number:number+1
          }
        )
        }
      }
      >push!</button>
    {/*  {this.props.AppChild}*/}
      {this.props.mesg}
     {/* {this.props.mesg2}*/}
      {mesgC}
      {this.props.children+"44"}
      <AppChildChild mesg={this.props.mesg}/>

    </span>
  );
}
}

class AppChildChild extends Component
{
  render(){
    return (
    <div>test AppChildCild
      {this.props.mesg}
      {this.props.children+"55"}
    </div>);
  }
}

class App extends Component {
  render() {
    return (
<h1>
<AppChild mesg="ㅎㅎㅎ" mesgC="mesg!!"/>
오늘은!!
</h1>    );
  }
}

export default App;
