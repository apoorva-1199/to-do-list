import React from "react";
import TodoListItem from "./todolistitem.component";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: this.props.items,
    };

    this.handleOnDragEnd = this.handleOnDragEnd.bind(this);
  }

  handleOnDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }
    console.log(result);
    const items = reorder(
      this.state.tasks,
      result.source.index,
      result.destination.index
    );
    this.setState({
      items,
    });
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
