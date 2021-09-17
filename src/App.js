import React from "react";
import TodoList from "./Components/Todo/todolist.component";
import TodoForm from "./Components/Todo/todoform.component";
import CompletedList from "./Components/Completed/completedlist.component";
import todoItems from "./Data/Todo/todoItems";
import completedItems from "./Data/Completed/completedItems";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.deleteCompletedItem = this.deleteCompletedItem.bind(this);
  }

  addItem(todoItem) {
    todoItems.unshift({
      index: todoItems.length + 1,
      value: todoItem.newItemValue,
      completeBy: todoItem.newItemDate,
      done: false,
    });
    this.setState({ todoItems: todoItems });
  }

  markTodoDone(itemIndex) {
    var todo = todoItems[itemIndex];
    todoItems.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? completedItems.push(todo) : todoItems.push(todo);
    this.setState({ todoItems: todoItems });
  }

  deleteItem(itemIndex) {
    todoItems.splice(itemIndex, 1);
    this.setState({ todoItems: todoItems });
  }
  deleteCompletedItem(itemIndex) {
    completedItems.splice(itemIndex, 1);
    this.setState({ completedItems: completedItems });
  }

  render() {
    return (
      <div id="main">
        <h1>Todo list</h1>
        <TodoForm addItem={this.addItem} />
        <TodoList
          items={todoItems}
          markTodoDone={this.markTodoDone}
          deleteItem={this.deleteItem}
        />
        <CompletedList
          items={completedItems}
          deleteCompletedItem={this.deleteCompletedItem}
        />
      </div>
    );
  }
}
export default App;
