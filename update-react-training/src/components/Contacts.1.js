import React, { Component } from 'react';

class Contacts extends Component {

  constructor(){
     super();

     this.state={
        contactsData:[
          {name:'홍길동',phone:'010-0000-0001',address:'서울'},
          {name:'이순신',phone:'010-0000-0002',address:'경기'},
          {name:'유관순',phone:'010-0000-0003',address:'제주'}
        ]
     }//

  }//end constructor







    render() {
        return (
            <div>
                <h1>Contacts</h1>
               <table> 
                <tbody>
                 
                 {/* 배열 반복 처리*/}
                
                 {
                   this.state.contactsData.map(function(contact,idx){
                   return  <tr>
                             <td>{contact.name}</td>
                             <td>{contact.phone}</td>
                             <td>{contact.address}</td>
                            </tr>;    
                   })
                  }
  
                 </tbody>
                 <thead>
                 <tr> 
                   <td>이름</td><td>전화번호</td><td>주소</td>  
                 </tr>   
                  </thead>  
               </table>
            </div> 
        );
    }
}

export default Contacts;