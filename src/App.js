import React from "react";
import TodoList from "./Components/Todo/todolist.component";
import TodoForm from "./Components/Todo/todoform.component";
import CompletedList from "./Components/Completed/completedlist.component";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      todoItems: {
        pending: [],
        completed: [],
      },
    };
    this.addItem = this.addItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.deleteCompletedItem = this.deleteCompletedItem.bind(this);
    this.onReorder = this.onReorder.bind(this);
  }

  componentDidMount() {
    const listItems = JSON.parse(localStorage.getItem("To-do-List"));
    console.log(listItems);

    this.setState({
      todoItems: listItems,
    });
  }

  componentDidUpdate() {
    const listData = JSON.stringify(this.state.todoItems);
    localStorage.setItem("To-do-List", listData);
    console.log(listData);
  }

  addItem(todoItem) {
    var pendingList = this.state.todoItems.pending;
    pendingList.unshift({
      value: todoItem.data,
      completeBy: todoItem.date,
      done: false,
      creatationTs: "",
      completionTs: "",
      id: new Date().getTime().toString(),
    });

    this.setState({
      todoItems: {
        ...this.state.todoItems,
        pending: pendingList,
      },
    });
  }

  markTodoDone(itemIndex) {
    const todo = this.state.todoItems.pending;
    const [completedItem] = todo.splice(itemIndex, 1);
    completedItem.done = true;
    this.state.todoItems.completed.unshift(completedItem);
    console.log(completedItem);
    this.setState({
      todoItems: {
        ...this.state.todoItems,
      },
    });
  }

  deleteItem(itemIndex) {
    this.state.todoItems.pending.splice(itemIndex, 1);
    this.setState({
      todoItems: {
        ...this.state.todoItems,
      },
    });
  }
  deleteCompletedItem(itemIndex) {
    this.state.todoItems.completed.splice(itemIndex, 1);
    this.setState({
      todoItems: {
        ...this.state.todoItems,
      },
    });
  }
  onReorder(source, destination) {
    const items = this.state.todoItems.pending;
    const [reorderedItem] = items.splice(source, 1);
    items.splice(destination, 0, reorderedItem);
    this.setState({
      todoItems: {
        ...this.state.todoItems,
      },
    });
  }

  render() {
    return (
      <div id="main">
        <h1>Todo list</h1>
        <TodoForm addItem={this.addItem} startDate={this.state.startDate} />
        <TodoList
          items={this.state.todoItems.pending}
          markTodoDone={this.markTodoDone}
          deleteItem={this.deleteItem}
          onReorder={this.onReorder}
        />
        <CompletedList
          items={this.state.todoItems.completed}
          deleteCompletedItem={this.deleteCompletedItem}
        />
      </div>
    );
  }
}
export default App;
