import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import shortId from 'shortid';
function createItem(name)
{
  return {
     id :shortId.generate(),
  name, 
  finished:false}

}

const defaultTodos=['1번째',"2번째","3번째","4번째"].map(createItem);

class App extends Component {
  state ={
    todoItems:defaultTodos
  }
  constructor(props)
  {
    super(props);
    const todos =localStorage.getItem('todos');
    if(todos)
    {
        this.state={
          todoItems:JSON.parse(todos)
        }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem("todos",JSON.stringify(this.state.todoItems));
  }
  handleInsert= (name)=>{
    this.setState({
      todoItems:
     [ ...this.state.todoItems,
      createItem(name)]
    })
  }
  handleToggle= (id)=>{
    const {todoItems}= this.state;
    const index= todoItems.findIndex(item=>item.id===id);
    const item= todoItems[index];
    this.setState({
      todoItems:[
        ...todoItems.slice(0,index),{
          ...item,
          finished:!item.finished
        },
        ...todoItems.slice(index+1,todoItems.length) 

      ]
    });
  }
  handleRemove = (id)=>{
    const {todoItems}=this.state;
    const index = todoItems.findIndex(item=>item.id===id
    );
    this.setState({
      todoItems:[...todoItems.slice(0,index),
      ...todoItems.slice(index+1,todoItems.length)]
    });

  }

  handleReset=()=>{
    this.setState({
      todoItems:defaultTodos
    })
  }


  render() {
    return (
      <div className="App">
      
      </div>
    );
  }
}

export default App;
