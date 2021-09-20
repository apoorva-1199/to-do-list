import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { todoItems } from "../../Data/test";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
    };
    this.formInputRef = React.createRef();
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(date) {
    this.setState({
      startDate: date,
    });
  }

  onSubmit(event) {
    event.preventDefault();
    const formInput = this.formInputRef.current;
    // var newItemValue = this.refs.itemName.value;
    var newItemValue = formInput.value;
    var newItemDate = this.state.startDate.toLocaleDateString();
    if (newItemValue) {
      this.props.addItem({ newItemValue, newItemDate });
      formInput.value = " ";
    }
    console.log(newItemDate);
    console.log(todoItems);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="form-inline">
        <textarea
          ref={this.formInputRef}
          className="form-control"
          placeholder="add a new todo..."
        />
        <DatePicker
          className="datePicker"
          selected={this.state.startDate}
          onChange={this.handleChange}
          name="startDate"
          dateFormat="MM/dd/yyyy"
        />
        <button type="submit" className="btn btn-default">
          Add
        </button>
      </form>
    );
  }
}

export default TodoForm;
