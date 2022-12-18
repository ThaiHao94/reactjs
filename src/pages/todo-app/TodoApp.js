import React, { Component } from "react";
import "./TodoApp.css";

export default class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listTodos: [
        { id: 1, content: 'ăn sáng', isActive: true, isCompleted: true },
        { id: 2, content: 'ăn trưa', isActive: false, isCompleted: false },
        { id: 3, content: 'ăn tối', isActive: false, isCompleted: false },
      ],
      content: "",
      isActive: "",
      isCompleted: ""
    };
  };
  handleCreate = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      content: event.target.value
    }));
  };
  render() {
    return (
      
    );
  }
}
