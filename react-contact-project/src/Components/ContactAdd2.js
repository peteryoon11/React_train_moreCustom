import React, { Component } from 'react';

class ContactAdd2 extends Component {
    handleChagne=(event)=>{
        console.log("handleChagne");
        let next={};

        next[event.target.name]=event.target.value;
        this.setState({
            
        })
    }

    render() {
        const {handleChagne}=this;
        const {handleClick}=this.props;
        return (
            <div>
                  <h2>ContactAdd</h2>                
                <input type="text" name="name" placeholder="name 입력" onChange={handleChagne}/>
            
                <input type="text" name="phonenumber" placeholder="번호 입력" onChange={handleChagne}/>
                <input type="text" name="addr" placeholder="addr 입력" onChange={handleChagne}/>
                <button onClick={handleClick}>저장</button>
            </div>
        );
    }
}

export default ContactAdd2;