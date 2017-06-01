import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropsTest from './PropsTest';
import PropTypes from 'prop-types';
class App extends Component {
  render() {
    return (
      <div>
    <PropsTest TestProps="ddd" mesg2="20">
     world
     <div>test</div>
      </PropsTest>
      </div>
    );
  }
}
/*PropsTest.propTypes={
  job:PropTypes.string
}*/
export default App;
