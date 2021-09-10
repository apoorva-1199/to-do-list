import React from "react";
import ReactDOM from 'react-dom';
//import Button from 'react-bootstrap/Button';
//import 'bootstrap/dist/css/bootstrap.min.css';

class TodoForm extends React.Component {
 render () {
    return (
      <form className="form-inline">
        <input type="text" ref="itemName" className="form-control" placeholder="add a new todo..."/>
        <button type="submit" className="btn btn-default">Add</button> 
      </form>
    );   
  }
}
  
export default TodoForm;