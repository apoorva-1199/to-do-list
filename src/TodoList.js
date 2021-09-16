import React from 'react';
import TodoListItem from './ToDoListItem';


class TodoList extends React.Component {
  
  render () {
    var items = this.props.items.map((item, index) => {
      return (
        <TodoListItem key={index} item={item} index={index} completeBy={item.completeBy} markTodoDone={this.props.markTodoDone} deleteItem = {this.props.deleteItem} />
      );
    });
    return (
      <>
      <h4>Pending Items: {items.length}</h4>
       <ul className="list-group"> {items} </ul>
      </>
    );
  }
}

export default TodoList;
