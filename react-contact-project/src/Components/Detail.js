import React, { Component } from 'react';
import update from 'react-addons-update';



class Detail extends Component {
  handleEventTest = ()=>{
    console.log("handleEventTest");

  }
  static defaultProps={
      name:"임시",
      addr:"임시주소",
      phonenumer:"temp"
  }
  state={
      isUpdate:false,
           name:"임시",
      addr:"임시주소",
      phonenumer:"temp"
  }

  handleUpdate=()=>{
      console.log("dd");
      this.setState({
        isUpdate:!this.state.isUpdate


      });
      if(this.state.isUpdate)
      {

      }
      else
      {

      }

  }
    render() {
        const {name,addr,phonenumer}= this.props.contact;
        const {onRemove}=this.props;
        const {handleEventTest,handleUpdate}=this;
        const {isUpdate}=this.state;
        //const {}=this;

        // ok 

            const ok=(
                    <div>
                        <input type="text" name="name" placeholder="name 입력"
                        value={name}/>
                        <input type="text" name="phone" placeholder="phone 입력"
                        value={addr}/>
                        <input type="text" name="address" placeholder="address 입력"
                        value={phonenumer}/>
                        


                    </div>
            );
            const Update=(

                <div>
                    <h1>ContactDetail</h1>
              {/*//      {this.ok}<br/>*/}



                </div>
            );

        // update 
        
        return (
            
            <div>
                {isUpdate?"업데이트":"수정"}
                <button onClick={onRemove}>삭제 ㅇㅇ </button>
                <button onClick={handleEventTest}>삭제 2 </button>
                <button onClick={handleUpdate}>{isUpdate?'업데이트':'수정'}</button>
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
Detail.defaultProps = {
   name:"임시",
      addr:"임시주소",
      phonenumer:"temp"
}

export default Detail;