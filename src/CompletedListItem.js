import React from 'react';
import {FaCheck,FaRegTrashAlt } from "react-icons/fa";

class CompletedListItem  extends React.Component {
  constructor(props) {
    super(props);
    this.onClickDelete = this.onClickDelete.bind(this);
  }
  onClickDelete(){
    var index = parseInt(this.props.index);
    this.props.deleteCompletedItem(index);
  }

  render () {
    var todoClass = this.props.item.done ? "done" : "undone";
    return(
      <li className="list-group-item ">
        <div className={todoClass}>
          <FaCheck className="check"/>
          {this.props.item.value}
          <FaRegTrashAlt className="delete" onClick={this.onClickDelete}/>
        </div>
      </li>     
    );
}
}


export default CompletedListItem ;
