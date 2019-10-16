import React, { Component } from "react";
import "./App.css";
import AddForm from "./addForm";
import Todos from "./Todos";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "lanjut rebahan" },
      { id: 2, content: "lanjut makan" }
    ]
  };

  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos //bisa ditulis satu jika key dan value sama
    });
  };
  addForm = todo => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  };
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center red-text">TODO REBAHAN'S APP</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddForm addForm={this.addForm} />
      </div>
    );
  }
}

export default App;
