import React, { Component } from "react";
import AppStyle from "./App.module.css";

export default class App extends Component {
  todoData = [
    {
      id: "001",
      title: "공부하기",
      completed: true,
    },
    {
      id: "002",
      title: "청소하기",
      completed: false,
    },
    {
      id: "003",
      title: "코딩하기",
      completed: true,
    },
  ];

  handleClick = (id) => {
    let newTodoData = this.todoData.filter((data) => data.id !== id);
    console.log(newTodoData);
  };

  render = () => {
    return (
      <div className={AppStyle.container}>
        <div className={AppStyle.todoBlock}>
          <div className="title">
            <h1>할 일 목록</h1>
          </div>

          {this.todoData.map((data) => {
            const completed = data.completed ? true : false;

            return (
              <div className={AppStyle.todoObject} key={data.id}>
                <input type={"checkbox"} defaultChecked={completed} />
                {data.title}
                <button
                  className={AppStyle.btnStyle}
                  onClick={() => this.handleClick(data.id)}
                >
                  X
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
}
