import React from "react";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import ReactTooltip from "react-tooltip";
import {
  Date,
  ListItemDiv,
  Task,
  CheckCircle,
  Delete,
  CheckCircleHidden,
} from "../Styled/list.component";

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClickDone = this.onClickDone.bind(this);
    this.onClickDelete = this.onClickDelete.bind(this);
  }
  onClickDone() {
    var index = parseInt(this.props.id);
    this.props.markTodoDone(index);
  }
  onClickDelete() {
    var index = parseInt(this.props.id);
    this.props.deleteItem(index);
  }
  render() {
    const { provided, innerRef } = this.props;
    return (
      <>
        <li
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={innerRef}
        >
          <ListItemDiv item={this.props.item}>
            <CheckCircle
              aria-hidden="true"
              className="fa fa-circle-o check"
            ></CheckCircle>
            <CheckCircleHidden
              aria-hidden="true"
              className="fa fa-check-circle"
              onClick={this.onClickDone}
            ></CheckCircleHidden>
            <Task data-tip data-for={this.props.item.id}>
              {this.props.item.value}
              <ReactTooltip id={this.props.item.id}>
                <span>{this.props.item.value}</span>
              </ReactTooltip>
            </Task>
            <Date>{this.props.item.completeBy}</Date>
            <Delete
              aria-hidden="true"
              className="fa fa-trash"
              onClick={this.onClickDelete}
            ></Delete>
          </ListItemDiv>
        </li>
      </>
    );
  }
}

export default TodoListItem;
