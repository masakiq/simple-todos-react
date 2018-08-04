import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { index } from './api';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    index().then(response => this.setState({ todos: response }));
  }

  render() {
    return (
      <div className="app">
        <TodoForm />
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}

export default App;
