# TODO REBAHAN'S APP

## Intro

- [live demo](https://build.herkahahaha.now.sh/)
- [Case Study](https://herkahahaha.com/reactjs-bekerja/)

## Persiapan

<hr/>

```sh
    npx create-react-app rebahan-app
```

> !! optional

    tambahkan cdn materialize.css atau bootstrap
    di folder public atau di file root pada folder src atau membuat kustom style css

> Membuat Todo App ini perlu diingat langkah awal membuat data `state` yang dinamis, dan bisa sebagai prototype pengembangan aplikasi web yang lebih kompleks terintegrasi dengan backend.

## Pembuatan dan Modifikasi

<hr/>

1. App.js sebagai file root yang menampung fungsi-fungsi yang dibutuhkan.<br/>

```Javascript
    import React, { Component } from "react";
    class App extends Component {
  state = {
    todos: [
      { id: 1, content: "lanjut rebahan" },
      { id: 2, content: "lanjut makan" }
    ]
  };
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center red-text">TODO REBAHAN'S APP</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;

```

2. Todo.js sebagai komponen ui yang menampilkan isi `state`

```Javascript
    import React from "react";

const Todos = ({ todos }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span>
            {todo.content}
          </span>
        </div>
      );
    })
  ) : (
    <p className="center">REBAHAAAAANNNNNN .....</p>
  );
  return <div className="todos collection">{todoList}</div>;
};

export default Todos;

```

3. Menambahkan dan menghubungkan fungsi hapus & tambah pada data props

`App.js`

```Javascript
   ...
    deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos //bisa ditulis satu jika key dan value sama
    });
  };
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center red-text">TODO REBAHAN'S APP</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
  ...
```

`Todo.js` menambahkan onCLick method pada tag `<span>`

```Javascript
   ...
    const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            {todo.content}
          </span>
        </div>
      );
    })
  ) : (
    <p className="center">REBAHAAAAANNNNNN .....</p>
  );
  return <div className="todos collection">{todoList}</div>;
};
  ...
```

3. Menambahkan Form tambah data `AddForm.js`

```js
import React, { Component } from "react";

class AddForm extends Component {
  state = {
    content: ""
  };
  handleChange = e => {
    this.setState({
      content: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addForm(this.state);
    this.setState({ content: "" });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Tambah List: </label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.content}
          />
        </form>
      </div>
    );
  }
}
export default AddForm;
```

Import file AddForm kedalam `App.js` dan buat fungsi nya sbb;

```js
    import AddForm from "./addForm";
   ...
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
        //tambahkan disini
        <AddForm addForm={this.addForm} />
      </div>
    );
  }
  ...
```

> Todo App sederhana berikut sangat membantu untuk memahami react js bekerja.
