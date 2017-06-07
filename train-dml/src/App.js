import React, { Component } from 'react';

import './App.css';
import update from 'react-addons-update';

class App extends Component {
  constructor()
  {
    super();
    this.helper();
  }
// 라이브러리와 스프레드 연산자 이용 하는 방법 


helper=()=>{
//https://facebook.github.io/react/
 let arr=[1,2,3];
 //console.log(arr);
 //1. 배열추가
 var newArr=update(arr,{$push:[4]});
 //arr.push(4);
 console.log(arr);
  console.log(newArr);

let arr2=[1,2,3,4,5];
 //console.log(arr);
 //2. 배열 삭제 및 수정
 var newArr2=update(arr2,{$splice:[[0,2,100,200]]});
 console.log(newArr2);

//3. 배열 수정 
let arr3=[1,2,3,4,5];
 //console.log(arr);
 var newArr3=update(arr2,{[0]:{$set:100}});
 console.log(newArr3);

// 가. 배열 객체 추가 
let arrobj=[{a:10},{b:20}];
 //console.log(arr);
 var newArrobj=update(arrobj,{$push:[{c:30}]});
 console.log(newArrobj,JSON.stringify(newArrobj));

// 나. 배열 객체 삭제 
let arrobj2=[{a:10},{b:20}];
 //console.log(arr);
 var newArrobj2=update(arrobj2,{$splice:[[0,1]]});
 console.log(newArrobj2,JSON.stringify(newArrobj2));
// 다. 배열 객체 수정 
let arrobj3=[{a:10},{b:20}];
 //console.log(arr);
 var newArrobj3=update(arrobj3,{[0]:{a:{$set:100}},a2:{$set:1}});
console.log(newArrobj3,JSON.stringify(newArrobj3));

  //1. 객체 추가 k3:300

var mOBj={k:100,k2:200};

  var newOBJ=update(mOBj,{$merge:{k:300}});
console.log(newOBJ,JSON.stringify(newOBJ));

// 2. 객체 
var mOBj={k:100,k2:200};

  var newOBJ=update(mOBj,{$merge:{k:300}});
console.log(newOBJ,JSON.stringify(newOBJ));



}

spread= ()=>{
// spread 연산자 

}

  render() {
    return (
      <div >
    JSON 객체 DML 처리 방법 
      </div>
    );
  }
}

export default App;
