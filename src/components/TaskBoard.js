import React from "react";
import logo from "../Assets/Img/logo512.png";
const saveTasks = JSON.parse(localStorage["saveTask's"]);
const TaskBoard = (props) => {
  return (
    <div className="wrapper">
      <div className="formBox">
        <div className="titleImage">
          <img className="logo" src={logo} alt="reactLogo" />
          {props.emptyList ? (
            <p className="title">Twoje ostatnie zadania</p>
          ) : (
            <p className="title">React To Do</p>
          )}
        </div>
        <div className="taskBox">
          {props.emptyList
            ? saveTasks.map((item, index) => (
                <div key={index} className="taskItem">
                  {item}
                </div>
              ))
            : props.tasks.map((item, index) => (
                <div key={index} className="taskItem">
                  {item}
                  <span
                    className="deleteBtn"
                    onClick={props.removeTask}
                    remove-index={index}
                  >
                    <i className="fas fa-minus"></i>
                  </span>
                </div>
              ))}
        </div>
      </div>

      <div className="addTaskFormBox">
        <form className="addTaskForm" onSubmit={props.submit}>
          <input
            className="taskName"
            placeholder="Wpisz swoje zadanie"
            value={props.inputValue}
            onChange={props.inputChange}
          />
          <button className="addTaskBtn">Dodaj zadanie</button>
          <button className="saveList" onClick={props.saveToLocalStorage}>
            Zapisz listę
          </button>
        </form>
      </div>
    </div>
  );
};
export default TaskBoard;
