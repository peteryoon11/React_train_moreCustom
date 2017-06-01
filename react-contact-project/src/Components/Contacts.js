import React, { Component } from 'react';
import Detail from './Detail';
class Contancts extends Component {
   
    constructor()
    {
        super();
        this.state={
            contactsData:[
                {name:'홍길동',phonenumer:'010-0000-1234',addr:'서울'}
                , {name:'홍길동2',phonenumer:'010-0000-2234',addr:'서울2'}
                , {name:'홍길동3',phonenumer:'010-0000-3234',addr:'서울3'}
            ],
            selectedIndex:0
            ,choiceThing:""
        }
    }

/*let datalist=this.state.contactsData.map(function(d,i){

});*/
handleDetail=(idx,dd)=>{
    console.log("ttt");
    console.log(idx,dd);
   this.setState({
        selectedIndex:idx
   //     choiceThing:this.contactsData[idx]
    });
   // console.log(this.state.selectedIndex);
}

    render() {
        const {itemlist,contactsData} =this.state;
        const {handleDetail}=this;
        return (
            <div>
                <h1>Contancts</h1>
<table>
<thead>
    <tr>
        <td>이름
        </td>
        <td>전화번호
        </td>
        <td>주소
        </td>
    </tr>
</thead>
<tbody>
  {
    contactsData.map((item,index)=>{
    return( <tr key={index} onClick={()=>handleDetail(index,item)}>
        <td >{item.name}
        </td>
        <td >{item.phonenumer}
        </td>
        <td >{item.addr}
        </td>
    </tr>);
})
}
{/*    <tr>
        <td>홍길동
        </td>
        <td>010-0000-0000
        </td>
        <td>서울시
        </td>
    </tr>
    <tr>
        <td>홍길동2
        </td>
        <td>010-0000-0000
        </td>
        <td>서울시 강남구
        </td>
    </tr>*/}
</tbody>
<tfoot></tfoot>

</table>
<Detail
contact={this.state.contactsData[this.state.selectedIndex]}
//name={22}
/>
            </div>
        );
    }
}

export default Contancts;