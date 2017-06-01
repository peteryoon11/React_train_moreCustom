import React, { Component } from 'react';

class Detail extends Component {
  
  
    render() {
        const {name,addr,phonenumer}= this.props.contact;
        
        return (
            <div>
         {/*      {this.props.contact.name}*/}
               <table></table>
               <br/>
               {name}
                {addr}&nbsp;
                 {phonenumer}
            {/*   {contact.}*/}
            </div>
        );
    }
}

export default Detail;