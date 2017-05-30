import React, {Component} from 'react';
import ColorBlock from './ColorBlock';

function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: getRandomColor(),
            visible: true
        }
    }

 handleRandomize = () => {
        this.setState({
            color: getRandomColor()
        });
    }

    handleToggleVisibility = () => {
        this.setState({
            visible: !this.state.visible
        })
    }
    render() {
        const { color, visible } = this.state;
        const { handleRandomize, handleToggleVisibility } = this;

        return (
            <div>
                <button onClick={handleRandomize}>랜덤색상</button>
                <button onClick={handleToggleVisibility}>{visible ? '숨기기' : '보이기'}</button>
                { visible && <ColorBlock color={color}/>}
            </div>
        );
    }
}

export default App;