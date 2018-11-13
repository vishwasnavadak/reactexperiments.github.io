import React, { Component } from 'react';

import TodoList from './components/todolist';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Todo List</h2>
        <TodoList />
      </div>
    );
  }
}

export default App;
