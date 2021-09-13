import React from 'react';
import TodoListItem from './ToDoListItem'

class TodoList extends React.Component {
    
  render () {
    var items = this.props.items.map((item, index) => {
      return (
        <TodoListItem key={index} item={item} index={index} markTodoDone={this.props.markTodoDone} deleteItem = {this.props.deleteItem} />
      );
    });
    return (
      <ul className="list-group"> {items} </ul>
    );
  }
}

export default TodoList;
