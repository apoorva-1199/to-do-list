import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import todoItems from './todoItems';
import TodoForm from './TodoForm';
import TodoListItem from './ToDoListItem';

function App() {
  return (
    <div className="App">
      <TodoHeader/>
      <TodoList/>
      <TodoForm/>
    </div>
  );
}

export default App;
