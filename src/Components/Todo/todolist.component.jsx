import React from "react";
import TodoListItem from "./todolistitem.component";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   tasks: this.props.items,
    // };

    this.handleOnDragEnd = this.handleOnDragEnd.bind(this);
  }

  handleOnDragEnd(result) {
    // dropped outside the lists
    console.log(result);
    this.props.onReorder(result.source.index, result.destination.index);
  }

  render() {
    var tasks = this.props.items.map((item, index) => {
      return (
        <Draggable
          key={index.toString()}
          draggableId={index.toString()}
          index={index}
        >
          {(provided) => (
            <TodoListItem
              innerRef={provided.innerRef}
              provided={provided}
              key={index}
              item={item}
              index={index}
              completeBy={item.completeBy}
              markTodoDone={this.props.markTodoDone}
              deleteItem={this.props.deleteItem}
              onReorder={this.props.onReorder}
              {...this.state}
            />
          )}
        </Draggable>
      );
    });
    return (
      <>
        <h4>Pending Items: {tasks.length}</h4>
        <DragDropContext onDragEnd={this.handleOnDragEnd}>
          <Droppable droppableId="droppable-1">
            {(provided) => (
              <ul
                className="list-group"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {tasks}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </>
    );
  }
}

export default TodoList;
