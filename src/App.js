import React, { Component } from "react";
import AppStyle from "./App.module.css";

export default class App extends Component {
  state = {
    todoData: [
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
    ],
    value: "",
  };

  handleClick = (id) => {
    let newTodoData = this.state.todoData.filter((data) => data.id !== id);
    super.setState((cur) => (cur.todoData = newTodoData));
  };

  render = () => {
    return (
      <div className={AppStyle.container}>
        <div className={AppStyle.todoBlock}>
          <div className="title">
            <h1>할 일 목록</h1>
          </div>

          {this.state.todoData.map((data) => {
            const completed = data.completed ? true : false;
            const dataId = data.id;

            return (
              <div className={AppStyle.todoObject} key={dataId}>
                <input type={"checkbox"} defaultChecked={completed} />
                {data.title}
                <button
                  className={AppStyle.btnStyle}
                  onClick={() => this.handleClick(dataId)}
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
