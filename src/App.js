import './App.css';
import React from 'react';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import CompletedList from './CompletedList';
import todoItems from './todoItems';
import completedItems from './completedItems';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.deleteCompletedItem =this.deleteCompletedItem.bind(this);
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
    todo.done ? completedItems.push(todo):todoItems.push(todo) ;
    this.setState({todoItems: todoItems});  
    console.log(todoItems);
    console.log(completedItems);
  }
  
  deleteItem(itemIndex){
    todoItems.splice(itemIndex, 1);
    this.setState({todoItems: todoItems});
  }
  deleteCompletedItem(itemIndex){
    completedItems.splice(itemIndex, 1);
    this.setState({completedItems:completedItems});
  }
  
  render() {
    return (
      <div id="main">
        <TodoHeader />
        <TodoList items={todoItems} markTodoDone={this.markTodoDone} deleteItem = {this.deleteItem} />
        <TodoForm addItem={this.addItem}/>
        <CompletedList items ={completedItems} deleteCompletedItem = {this.deleteCompletedItem}/>
      </div>
    );
  }
}
export default App;