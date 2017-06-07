import React, { Component } from 'react';

class Card extends Component {

handleMount= ()=>{
console.log("handleMount");
this.setState({
    isShow:true
})
}
handleUpdate= ()=>{
  console.log("handleUpdate");  

  this.setState({
      number:this.state.number+1
  })

}
handleUnmout= ()=>{
    console.log("handleUnmout");
    this.setState({
        number:0
        ,
        isShow:false
    })
}
state={
    number:0
    ,
    isShow:false
}

/*LifeCycle 메서드*/

componentWillMount() {
    console.log("Card:componentWillMount ","렌더링 되기 전에 호출 ");
}

componentDidMount() {
    console.log("Card:componentDidMount ","렌더링 되고 난후 호출 ");
}

componentWillReceiveProps(nextProps) {
    console.log("Card : componentWillReceiveProps ","새로운 props 받았을때");
}

shouldComponentUpdate(nextProps, nextState) {
    console.log("Card : shouldComponentUpdate "," 컴포넌트가 재 렌더링 될때 ");
    console.log("nextProps",nextProps);
    console.log("nextState",nextState);
    return true;
}
componentDidUpdate(prevProps, prevState) {
      console.log("Card : componentDidUpdate "," 컴포넌트가 수정 후  ");


}
componentWillUnmount() {
     console.log("Card : componentWillUnmount ","  ");
}




    render() {
        const {handleMount,handleUpdate,handleUnmout}=this;
       const {number,isShow}=this.state;
        return (
            <div>

                

                <button onClick={handleMount}>mount</button>
                
                <button onClick={handleUpdate}>update</button>
                <button onClick={handleUnmout}>unmout</button>
                <br/>
                {isShow?number:""}
                <div >{number}</div><br/>
            </div>
        );
    }
}

export default Card;