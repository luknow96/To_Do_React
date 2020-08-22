import React from "react";
import logo from "../Assets/Img/logo512.png";
const TaskBoard = (props) => {
  return (
    <div className="wrapper">
      <div className="formBox">
        <div className="titleImage">
          <img className="logo" src={logo} alt="reactLogo" />
          {props.dataStatus ? (
            <p className="title">React To Do</p>
          ) : (
            <p className="title">Twoje zapisane zadania</p>
          )}
        </div>
        <div className="taskBox">
          {props.dataStatus
            ? null
            : JSON.parse(localStorage["saveTask's"]).map((item, index) => (
                <div key={index} className="taskItem">
                  {item}
                </div>
              ))}
          {props.emptyList
            ? props.tasks.map((item, index) => (
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
              ))
            : null}
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
