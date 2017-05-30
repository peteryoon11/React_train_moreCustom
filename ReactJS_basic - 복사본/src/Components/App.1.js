import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ColorBlock from './ColorBlock';

class App extends React.Component {
  
/*  static propTypes={
      onInsert:PropTypes.func
  };*/
  //  let hello="test";
  //hhh="ddd";

    render() {
      //  const {hello} = this.hello;
      let hello="test";

        return (

         <h1>Hello!!!!
             {hello}
             {100}
         </h1>
        );
    }
}

class App2 extends React.Component {
  
/*  static propTypes={
      onInsert:PropTypes.func
  };*/
  //  let hello="test";
  //hhh="ddd";

    render() {
      //  const {hello} = this.hello;
      let hello="test";
      let mesg=[
      <span>hello</span>,
      <span>world</span>
      
      ];
        return (
<div>{mesg}</div>
        );
    }
}


class App3 extends React.Component {
  
/*  static propTypes={
      onInsert:PropTypes.func
  };*/
  //  let hello="test";
  //hhh="ddd";
  

    render() {
     var arr=['a','b','c'];
      //  const {hello} = this.hello;
      let hello="test";
    
        return (

            <ul>
                {
                arr.map(function (d,i){
                    return <li key={i}>{d}</li>;
                })
                // 중간에 java script를 사용 하려면 {}로 감싸줘야함 
                // 반복되는 부분은 key 를 줘야함 
                }
            </ul>
        
        );
    }
}



class App4 extends React.Component {
  
/*  static propTypes={
      onInsert:PropTypes.func
  };*/
  //  let hello="test";
  //hhh="ddd";
  

    render() {
     var arr=['a','b','c'];
      //  const {hello} = this.hello;
      let hello="test";
    
        return (

            <ul>
                {/*주석*/}
                {/*주석주석*/}
                {
                arr.map(function (d,i)
                  {
                    return <li key={i}>{d}</li>;
                  }
                  )
                   
                }
            </ul>
            
            
/*주석은 그냥 쓰지 않음*/            
        
        );
    }
}

class App5 extends React.Component {
  
/*  static propTypes={
      onInsert:PropTypes.func
  };*/
  //  let hello="test";
  //hhh="ddd";
  

    render() {
     var arr=['a','b','c'];
      //  const {hello} = this.hello;
      let hello="test";
    
        return (

            <ul>
                {/*주석*/}
                {/*주석주석*/}
                {
                arr.map(
                    (d,i)=><li key={i}>{d}</li>)
                  
                   
                }
            </ul>
            
            
/*주석은 그냥 쓰지 않음*/            
        
        );
    }
}


class App6 extends React.Component {
  
/*  static propTypes={
      onInsert:PropTypes.func
  };*/
  //  let hello="test";
  //hhh="ddd";
  

    render() {
    
    let attr= {
    
    href: "http://www.naver.com",
target:"_blank"};
    
        return (

      <div>
{/*<a href={attr.href} target={attr.target}>{attr.target}</a>*/}
        <a {...attr}>{attr.target}</a>
      </div>
            
            
        
        );
    }
}




function xxx(){

    console.log("xxx");
}
class App7 extends React.Component {
  
/*  static propTypes={
      onInsert:PropTypes.func
  };*/
  //  let hello="test";
  //hhh="ddd";


    render() {
   // const {onHandle} = this.xxx;
        return (
<button onClick={xxx}>OK</button>
        
        );
    }
}


class App8 extends React.Component {
  
/*  static propTypes={
      onInsert:PropTypes.func
  };*/
  //  let hello="test";
  //hhh="ddd";


    render() {
   // const {onHandle} = this.xxx;
        return (
       <div>

           <p className="xyz">Hello</p>
        {/*<p class="xyz">world</p>
*/}
<label htmlFor="userid">아이디</label>
<input type="text" name="userid"/>
       </div>
        
        );
    }
}

/**스타일을 객체로 관리함 {속성 : 속성명 } */
class App9 extends React.Component {
  
/*  static propTypes={
      onInsert:PropTypes.func
  };*/
  //  let hello="test";
  //hhh="ddd";


    render() {
   // const {onHandle} = this.xxx;

   let mystyle = {fontSize: '50px', backgroundColor:'red'};
        return (
       <div>
        <p style={mystyle}>test</p>
         
       </div>
        
        );
    }
}

function getRandomColor()
{
    return '#'+Math.floor(Math.random()*16777215).toString(16);
}
class App_self extends React.Component {
  
/*  static propTypes={
      onInsert:PropTypes.func
  };*/
  //  let hello="test";
  //hhh="ddd";
constructor(props)
{
    super(props);
    this.state={
        color: getRandomColor(),
        visible:true
    }

}
/*
handleRandomize = ()=>{
    this.setState({
        color: getRandomColor()
    });
}*/
/*handleToggleVisibility = ()=>{
    this.setState({
        visible:this.state.visible
    })
}*/
    render() {
   // const {onHandle} = this.xxx;
   const {color,visible} = this.state;
   const {handleRandomize, handleToggleVisibility} = this;

   let mystyle = {fontSize: '50px', backgroundColor:'red'};
        return (
       <div>
        <button onClick={handleRandomize}>랜덤색상</button>
         <button onClick={handleToggleVisibility}>{visible?'숨기기':'보이기'}</button>
       {
           visible &&<ColorBlock color={color}/>
       }
       </div>
        
        );
    }
}
export default App_self;

