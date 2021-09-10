import React from 'react';
import ReactDOM from 'react-dom';
import todoItems from './todoItems';

const listItems = todoItems.map((item) => <li key={item.index}>{item.value}</li>);
class TodoList extends React.Component {
    
  render () {
    return (
      <ul className="list-group"> {listItems} </ul>
    );
  }
}

export default TodoList;
