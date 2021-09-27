import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import {
  Form,
  Button,
  TextArea,
  DatePickerStyle,
} from "../Styled/list.component";

// const datePickerClass = "datePicker";

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
      <Form onSubmit={this.onSubmit} ref={this.formRef}>
        <TextArea ref={this.formInputRef} placeholder="add a new todo..." />
        <DatePickerStyle
          selected={this.state.startDate}
          onChange={this.handleChange}
          name="startDate"
          dateFormat="MM/dd/yyyy"
        />
        <Button type="submit">Add</Button>
      </Form>
    );
  }
}

export default TodoForm;
