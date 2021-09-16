import React from 'react';
import "../node_modules/font-awesome/css/font-awesome.min.css"
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
          <i aria-hidden="true"className="fa fa-circle-o check"  ></i>
          <i aria-hidden="true"className="fa fa-check-circle check hidden" onClick={this.onClickDone} ></i>
          {this.props.item.value}
          {this.props.item.completeBy}
          <i aria-hidden="true" className="fa fa-trash delete" onClick={this.onClickDelete}></i>
        </div>
      </li>   
     
    );
}
}


export default TodoListItem;
