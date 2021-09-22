import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: this.props.startDate,
    };
    this.formRef = React.createRef();
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
    const form = this.formRef.current;
    const formInput = this.formInputRef.current;
    var data = formInput.value;
    var date = this.state.startDate.toLocaleDateString();
    if (data && date) {
      this.props.addItem({ data, date });
      form.reset();
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="form-inline" ref={this.formRef}>
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
