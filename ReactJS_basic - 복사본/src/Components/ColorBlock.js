// src/ColorBlock.js

import React, { Component } from 'react';

class ColorBlock extends Component {

    // 마운팅 
    constructor(props){
        super(props);
        console.log('ColorBlock Constructor');
    }
    
    componentWillMount() {
        console.log('ColorBlock componentWillMount');
    }

    componentDidMount() {
        console.log('ColorBlock componentDidMount');
    }

    // 업데이트
    componentWillReceiveProps(nextProps) {
        console.log('ColorBlock componentWillReceiveProps', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('ColorBlock shouldComponentUpdate');
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('ColorBlock componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('ColorBlock componentDidUpdate', prevProps, prevState);
    }
    
    // 언마운트
    componentWillUnmount() {
        console.log('ColorBlock componentWillUnmount');
    }
    
    render() {
        console.log('ColorBlock render');
        const { color } = this.props;

        const style = {
            backgroundColor: color,
            width: '200px',
            height: '200px',
            transition: 'background .5s'
        };

        return (
            <div style={style}>
                
            </div>
        );
    }
}

export default ColorBlock;