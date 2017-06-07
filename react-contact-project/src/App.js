import React, { Component } from 'react';
import Contacts from './Components/Contacts';
import Detail from './Components/Detail';
//import ContactAdd from './Components/ContancAdd';
import ContactAdd from './Components/ContactAdd2';

class Counter extends Component {
  state ={number:0,theNumber:0}
  constructor(){
    super();

 this.handleClickTest=this.handleClickTest.bind(this);

  }

 handleClickUp=()=>{
   const {number}=this;
   this.setState({
    number:this.state.number+1
   });
 }
  handleClickDown=()=>{
   const {number}=this;
   this.setState({
    number:this.state.number-1
   });
 }

 handleClickTest(){
console.log("div 클릭!!");
 }
handleDelete=()=>{
  console.log("handleDelete");
}

 
  render() {
    const {number,theNumber} =this.state;
    const {handleClickUp,handleClickDown,handleClickTest
    ,handleDelete}=this;
    return (
      
      <div onClick={handleClickTest}>
        {number} {theNumber}
        <button onClick={handleClickUp}>증가!!</button>
        <button onClick={handleClickDown}>감소!!</button>
        
      </div>
    );
  }
}



class App extends Component {
//
state={
  detailList:"초기값"
}

  render() {
    const {detailList}=this.state;
    return (
      <div >
     <Contacts>
        
       </Contacts>
     <br/>

      </div>
    );
  }
}

export default App;
