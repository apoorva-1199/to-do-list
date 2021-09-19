import React from "react";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import ReactTooltip from "react-tooltip";

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
  onClickDelete() {
    var index = parseInt(this.props.index);
    this.props.deleteItem(index);
  }
  render() {
    var todoClass = this.props.item.done ? "done" : "undone";
    const { provided, innerRef } = this.props;
    return (
      <>
        <li
          className="list-group-item "
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={innerRef}
        >
          <div className={todoClass}>
            <i aria-hidden="true" className="fa fa-circle-o check"></i>
            <i
              aria-hidden="true"
              className="fa fa-check-circle check hidden"
              onClick={this.onClickDone}
            ></i>
            <div className="task" data-tip data-for={this.props.item.index}>
              {this.props.item.value}
              <ReactTooltip id={this.props.item.index.toString()}>
                <span>{this.props.item.value}</span>
              </ReactTooltip>
            </div>
            <div className="date">{this.props.item.completeBy}</div>
            <i
              aria-hidden="true"
              className="fa fa-trash delete"
              onClick={this.onClickDelete}
            ></i>
          </div>
        </li>
      </>
    );
  }
}

export default TodoListItem;
