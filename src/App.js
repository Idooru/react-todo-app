import React, { Component } from "react";
import AppStyle from "./App.module.css";

export default class App extends Component {
  todoData = [
    {
      id: "1",
      title: "공부하기",
      completed: true,
    },
    {
      id: "2",
      title: "청소하기",
      completed: false,
    },
    {
      id: "3",
      title: "코딩하기",
      completed: true,
    },
  ];

  render = () => {
    return (
      <div className={AppStyle.container}>
        <div className={AppStyle.todoBlock}>
          <div className="title">
            <h1>할 일 목록</h1>
          </div>

          {this.todoData.map((data) => {
            let completed = false;

            completed = data.completed ? true : completed;

            return (
              <div className={AppStyle.todoObject} key={data.id}>
                <input type={"checkbox"} defaultChecked={completed} />
                {data.title}
                <button className={AppStyle.btnStyle}>X</button>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
}
