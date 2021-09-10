import React from 'react';
import ReactDOM from 'react-dom';

class TodoListItem extends React.Component {
  
  render () {
    var todoClass = this.props.item.done ? "done" : "undone";
    return(
      <li className="list-group-item ">
        <div className={todoClass}>
          <span className="glyphicon glyphicon-ok icon" aria-hidden="true" onClick={this.onClickDone}></span>
          {this.props.item.value}
          <button type="button" className="close" onClick={this.onClickClose}>&times;</button>
        </div>
      </li>     
    );
  }
}

export default TodoListItem;
