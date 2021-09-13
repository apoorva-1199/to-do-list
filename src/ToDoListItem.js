import React from 'react';
import {FaCheck,FaRegTrashAlt } from "react-icons/fa";


class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClickDone = this.onClickDone.bind(this);
    this.onClickDelete = this.onClickDelete.bind(this);
  }
  onClickDone() {
    var index = parseInt(this.props.index);
    this.props.markTodoDone(index);
  }
  onClickDelete(){
    var index = parseInt(this.props.index);
    this.props.deleteItem(index);
  }

  render () {
    var todoClass = this.props.item.done ? "done" : "undone";
    return(
      <li className="list-group-item ">
        <div className={todoClass}>
          <FaCheck className="check" onClick={this.onClickDone}/>
          {this.props.item.value}
          <FaRegTrashAlt className="delete" onClick={this.onClickDelete}/>
        </div>
      </li>     
    );
}
}


export default TodoListItem;
