import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactDetail extends Component {

    constructor(){
        super();
 
     this.state={
        isUpdate:false,
        name:'',
        phone:'',
        address:''
     }//end state
        this.handleEvent = this.handleEvent.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
         this.handleChange = this.handleChange.bind(this);
    }//end constructor
 /*  이벤트*/
  handleEvent(){
   console.log("handleEvent");
   this.props.onRemove();
  }

 handleUpdate(){
  console.log("&&"+this);
   if(!this.state.isUpdate){
        this.setState({
       isUpdate:!this.state.isUpdate,
       name:this.props.contact.name,
       phone:this.props.contact.phone,
       address:this.props.contact.address
     });
   }else{
       var contact={
           name:this.state.name,
           phone:this.state.phone,
           address:this.state.address
       }

       this.props.onUpdate(contact);
       this.setState({
           isUpdate:!this.state.isUpdate
       })

   }
 }//end handleUpdate

   handleChange(e){
        console.log("handleChange");
        // let xxx ={a:100};
        //  xxx['a'] ,xxx.a
        let nextSate = {};
        nextSate[e.target.name]=e.target.value;
        this.setState(nextSate);
    }

    render() {
  
        //OK
       const OK=(
           <div>
            <input type="text" name="name" placeholder="name 입력" 
                 value={this.state.name} onChange={this.handleChange}/><br/>
               <input type="text" name="phone" placeholder="phone 입력" 
                  value={this.state.phone} onChange={this.handleChange}/><br />
               <input type="text" name="address" placeholder="address 입력" 
                   value={this.state.address} onChange={this.handleChange}/><br/>
           </div>
       );
        //UPDATE
       const UPDATE=(
            <div>
              <p> {this.props.contact.name}
                  {this.props.contact.phone}
                  {this.props.contact.address}</p>
            </div>
       );
 



        return (
            <div>
                 <h1>ContactDetail</h1>
              {this.state.isUpdate?OK:UPDATE}
                 <div>
                   <button onClick={this.props.onRemove}>삭제</button>
                   <button onClick={this.handleEvent}>삭제2</button>
                   <button onClick={this.handleUpdate}>
                       {this.state.isUpdate?'OK':'UPDATE'}
                       </button>
                 </div>     
            </div>
        );
    }
}

// props 타입 지정
ContactDetail.defaultProps={
  contact: {name:'',phone:'',address:''},
   onRemove:()=>{console.log("onRemove")},
   onUpdate:()=>{console.log("onUpdate")}
}

ContactDetail.propTypes={
   contact: PropTypes.object,
   onRemove:PropTypes.func,
   onUpdate:PropTypes.func
}

export default ContactDetail;