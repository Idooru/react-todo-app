import React, { Component } from "react";
import AppStyle from "./App.module.css";

export default class App extends Component {
  state = {
    todoData: [],
    value: "",
  };

  handleClick = (id) => {
    let newTodoData = this.state.todoData.filter((data) => data.id !== id);
    super.setState((cur) => (cur.todoData = newTodoData));
  };

  handleChange = (event) => {
    super.setState((cur) => (cur.value = event.target.value));
  };

  handleSubmit = (event) => {
    if (!this.state.value) {
      return alert("최소 한글자 이상 입력해주세요!");
    }

    event.preventDefault();

    const newTodo = {
      id: Date.now(),
      title: this.state.value,
      completed: false,
    };

    super.setState({
      todoData: [...this.state.todoData, newTodo],
      value: "",
    });
  };

  handleCompleteChange = (id) => {
    const newTodoData = this.state.todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });

    super.setState({ todoData: newTodoData });
  };

  render = () => {
    return (
      <div className={AppStyle.container}>
        <div className={AppStyle.todoBlock}>
          <div className="title">
            <h1>할 일 목록</h1>
          </div>

          {this.state.todoData.map((data) => {
            const completed = data.completed;
            const dataId = data.id;

            return (
              <div
                className={completed ? AppStyle.todoDone : AppStyle.todoUndone}
                key={dataId}
              >
                <input
                  type="checkbox"
                  onChange={() => this.handleCompleteChange(dataId)}
                  defaultChecked={completed}
                />
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

          <form className={AppStyle.inputField} onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleChange}
              type="text"
              name="value"
              style={{ flex: "10", padding: "5px" }}
              placeholder="해야 할 일을 입력하세요."
              autoComplete="off"
              value={this.state.value}
            />
            <input
              type="submit"
              value="입력"
              className="btn"
              style={{ flex: 1 }}
            />
          </form>
        </div>
      </div>
    );
  };
}
