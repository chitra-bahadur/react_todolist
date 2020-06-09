import React from 'react';
import './App.css';
import ToDoForm from './component/ToDoForm'
import Todo from './component/Todo';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      todoToShow: "all",
      toggle: true
    }
  }

  addToDo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos]
    })
  }

  toggleComplelte = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete
          }
        } else {
          return todo
        }
      })
    })
  }

  showTodo = (s) => {
    this.setState({
      todoToShow: s
    })
  }

  handleOnDelete = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  removeAllTodosThatAreComplete = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.complete)
    })
  }

  toggle = () => {
    this.setState({
      todos: this.state.todos.map(todo => ({
        ...todo,
        complete: !this.state.toggle
      })),
      toggle: !this.state.toggle
    })
  }

  render() {
    let todos = []
    let todoToShow = this.state.todoToShow
    //console.log(todoToShow)

    if (todoToShow === "all") {
      todos = this.state.todos
    } else if (todoToShow === "active") {
      todos = this.state.todos.filter(todo => !todo.complete)
    } else if (todoToShow === 'complete') {
      todos = this.state.todos.filter(todo => todo.complete)
    }
    return (
      <div className="App" >

        <ToDoForm onSubmit={this.addToDo} />
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} toggleComplelte={() => this.toggleComplelte(todo.id)}
            onDelete={() => this.handleOnDelete(todo.id)} />
        ))}
        <div>
          Todo's Left : {todos.length}
        </div>

        <button onClick={() => this.showTodo("all")}>all</button>
        <button onClick={() => this.showTodo("active")}>active</button>
        <button onClick={() => this.showTodo("complete")}>complete</button>
        {todos.some(todo => todo.complete) ? (<div>
          <button onClick={() => this.removeAllTodosThatAreComplete()}>Remove All Complete</button>
        </div>) : null}
        <div>
          <button onClick={() => this.toggle()}>toggel : {`${this.state.toggle}`} </button>
        </div>
      </div>
    );
  }
}

export default App;
