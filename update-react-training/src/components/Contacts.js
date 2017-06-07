import React, { Component } from 'react';
import ContactDetail from './ContactDetail';
import update from 'react-addons-update';
import ContactAdd from './ContactAdd';
class Contacts extends Component {

  constructor(){
     super();

     this.state={
        contactsData:[
          {name:'홍길동',phone:'010-0000-0001',address:'서울'},
          {name:'이순신',phone:'010-0000-0002',address:'경기'},
          {name:'유관순',phone:'010-0000-0003',address:'제주'}
        ],
        selectedIndex:-1 
     }//

      this.handleDetail = this.handleDetail.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
      this.handleSave = this.handleSave.bind(this);
       this.handleUpdate = this.handleUpdate.bind(this);
  }//end constructor

  /*  이벤트*/
  handleDetail(idx){
    console.log(idx);
    this.setState({
        selectedIndex:idx 
    });
  }
  handleDelete(){
    console.log("handleDelete");
    let delData = update(this.state.contactsData, 
                   {$splice:[[this.state.selectedIndex,1]]});
    this.setState({
       contactsData:delData,
       selectedIndex:-1
    })               

  }//
   handleSave(contact){
     console.log("Contacts.handleSave" , contact);
     
     let addData = update(this.state.contactsData, {$push:[contact]});
     this.setState({
        contactsData: addData
     })

   }//end handleSave
    handleUpdate(contact){
      console.log(">>>",contact);
       this.setState({
      contactsData:update(this.state.contactsData,
                         {[this.state.selectedIndex]:{$set:contact}})
       });
    }
   /*  이벤트*/

    render() {
        return (
            <div>
                <h1>Contacts</h1>
               <table> 
                <tbody>
                 
                 {/* 배열 반복 처리*/}
      
                {
                  this.state.contactsData.map((contact,idx)=>
                           <tr key={idx} onClick={()=>this.handleDetail(idx)}>
                             <td>{contact.name}</td>
                             <td>{contact.phone}</td>
                             <td>{contact.address}</td>
                            </tr>  
                   )
                 } 


                 </tbody>
                 <thead>
                 <tr> 
                   <td>이름</td><td>전화번호</td><td>주소</td>  
                 </tr>   
                  </thead>  
               </table>
               <div>
                 <ContactDetail 
                 contact={this.state.contactsData[this.state.selectedIndex]} 
                 onUpdate={this.handleUpdate}
                 onRemove={this.handleDelete}
                 />
             {/*<ContactDetail 
               name={this.state.contactsData[this.state.selectedIndex].name}
               address={this.state.contactsData[this.state.selectedIndex].address}
               phone={this.state.contactsData[this.state.selectedIndex].phone}
               contact={this.state.contactsData[this.state.selectedIndex]}
             />*/}
               </div>  
               <div>
                  <ContactAdd 
                    onSave={this.handleSave}
                  />
               </div>  
            </div> 
        );
    }
}

export default Contacts;