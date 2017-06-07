import React, { Component } from 'react';

class AppChild extends Component {
    render() {
        const {dataClick}=this.props;
        return (
            <div>
                <button onClick={this.props.dataClick}> AppChild</button><br/>
           <button onClick={()=>{this.props.dataClick('test')}}> AppChild2</button>
           <br/>
           <button onClick={dataClick}> AppChild_origin</button>
            </div>
        );
    }
}

export default AppChild;