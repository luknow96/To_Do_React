import React, { Component } from "react";
import "../scss/App.scss";
import TaskBoard from "../components/TaskBoard";
const taskArray = [];
class App extends Component {
  state = {
    inputValue: "",
    deleteItem: "",
    emptyList: true,
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (taskArray.length === 0) {
      this.setState({
        emptyList: false,
      });
    }
    if (this.state.inputValue === "") return;
    else {
      taskArray.push(this.state.inputValue);
      this.setState({
        inputValue: "",
      });
    }
  };
  inputHandleChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };
  removeTask = (e) => {
    if (taskArray.length - 1 === 0) {
      this.setState({
        emptyList: true,
      });
    }
    this.setState({
      deleteItem: e.currentTarget.getAttribute("remove-index"),
    });
    taskArray.splice(this.state.deleteItem, 1);
  };
  saveList = (e) => {
    e.preventDefault();
    if (taskArray.length === 0) {
      return alert("(っ◔◡◔)っ ♥ nie można zapisać pustej listy !");
    } else {
      localStorage["saveTask's"] = JSON.stringify(taskArray);
    }
  };

  render() {
    return (
      <>
        <TaskBoard
          inputValue={this.state.inputValue}
          inputChange={this.inputHandleChange}
          submit={this.onSubmit}
          tasks={taskArray}
          removeTask={this.removeTask}
          emptyList={this.state.emptyList}
          saveToLocalStorage={this.saveList}
        />
      </>
    );
  }
}

export default App;
