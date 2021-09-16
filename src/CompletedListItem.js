import React from 'react';
import "../node_modules/font-awesome/css/font-awesome.min.css"

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
          <i aria-hidden="true"className="fa fa-check-circle check" ></i>
          {this.props.item.value}
          <i aria-hidden="true" className="fa fa-trash delete" onClick={this.onClickDelete}></i>
        </div>
      </li>     
    );
}
}


export default CompletedListItem ;
