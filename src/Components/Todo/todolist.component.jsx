import React from "react";
import TodoListItem from "./todolistitem.component";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

class TodoList extends React.Component {
  render() {
    var items = this.props.items.map((item, index) => {
      return (
        <TodoListItem
          key={index}
          item={item}
          index={index}
          completeBy={item.completeBy}
          markTodoDone={this.props.markTodoDone}
          deleteItem={this.props.deleteItem}
        />
      );
    });
    return (
      <>
        <h4>Pending Items: {items.length}</h4>
        <DragDropContext
          onDragEnd={(...props) => {
            console.log(props);
          }}
        >
          <ul className="list-group"> {items} </ul>
        </DragDropContext>
      </>
    );
  }
}

export default TodoList;
