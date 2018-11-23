import React, { Component } from 'react';
import './App.css';
import Todo from './components/Todo';
import Form from './components/Form';
import Arrow from './arrow.png';

class App extends Component {

  state = {
    todos: [
      {content: "click on todo's for delete", id: 1},
      {content: "write new todo's in array below", id: 2}
    ]
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos
    })
  }


  render() {
    return (
      <div className="App">
        <h1>Things to do:</h1>
        <img src={Arrow} alt="arrow_img"/>
        <Todo todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <Form addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
