import './App.css';
import React from 'react';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import todoItems from './todoItems';
/*
Todo app structure

TodoApp
	- TodoHeader
	- TodoList
    - TodoListItem #1
		- TodoListItem #2
		  ...
		- TodoListItem #N
	- TodoForm
*/  
class App extends React.Component {
  constructor (props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(todoItem) {
    todoItems.unshift({
      index: todoItems.length+1, 
      value: todoItem.newItemValue, 
      done: false
    });
    this.setState({todoItems: todoItems});
  }

  markTodoDone(itemIndex){
    var todo = todoItems[itemIndex];
    todoItems.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
    this.setState({todoItems: todoItems});  
  }
  
  deleteItem(itemIndex){
    todoItems.splice(itemIndex, 1);
    this.setState({todoItems: todoItems});
  }
  
  render() {
    return (
      <div id="main">
        <TodoHeader />
        <TodoList items={todoItems} markTodoDone={this.markTodoDone} deleteItem = {this.deleteItem}/>
        <TodoForm addItem={this.addItem}/>
      </div>
    );
  }
}
export default App;