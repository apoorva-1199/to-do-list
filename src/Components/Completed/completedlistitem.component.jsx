import React from "react";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import ReactTooltip from "react-tooltip";
import {
  Date,
  ListItemDiv,
  Task,
  CheckCircle,
  Delete,
} from "../Styled/list.component";

class CompletedListItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClickDelete = this.onClickDelete.bind(this);
  }
  onClickDelete() {
    var index = parseInt(this.props.id);
    this.props.deleteCompletedItem(index);
  }

  render() {
    return (
      <li>
        <ListItemDiv color="red">
          <CheckCircle
            aria-hidden="true"
            className="fa fa-check-circle"
            opacity="1"
          ></CheckCircle>
          <Task
            data-tip
            data-for={this.props.item.id}
            decoration="line-through"
          >
            {this.props.item.value}
            <ReactTooltip id={this.props.item.id}>
              <span>{this.props.item.value}</span>
            </ReactTooltip>
          </Task>
          <Date decoration="line-through">{this.props.item.completeBy}</Date>
          <Delete
            aria-hidden="true"
            className="fa fa-trash delete"
            onClick={this.onClickDelete}
          ></Delete>
        </ListItemDiv>
      </li>
    );
  }
}

export default CompletedListItem;
