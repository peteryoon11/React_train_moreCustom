import React, { Component } from 'react';

class ContactAdd extends Component {

    constructor(){
       super();
       this.state={
           name:'',
           phone:'',
           address:''
       }
       this.handleChange = this.handleChange.bind(this);
       this.handleSave = this.handleSave.bind(this);
    }//end constructor

    /*  이벤트*/
    handleChange(e){
        console.log("handleChange");
        // let xxx ={a:100};
        //  xxx['a'] ,xxx.a
        let nextSate = {};
        nextSate[e.target.name]=e.target.value;
        this.setState(nextSate);
        console.log(nextSate);
    }
     handleSave(){
        console.log("ContactAdd.handleSave");
        this.props.onSave(this.state);
        this.setState({
            name:'',
            phone:'',
            address:''
        });
    
     }

     /*  이벤트*/
    render() {
        return (
            <div>
               <h2>ContactAdd</h2>
               <input type="text" name="name" placeholder="name 입력" 
                 onChange={this.handleChange}
                 value={this.state.name} /><br/>
               <input type="text" name="phone" placeholder="phone 입력" 
                 onChange={this.handleChange} 
                  value={this.state.phone}/><br />
               <input type="text" name="address" placeholder="address 입력" 
                  onChange={this.handleChange} 
                   value={this.state.address}/><br/>
               <button onClick={this.handleSave}>저장</button>
            </div>
        );
    }
}

export default ContactAdd;