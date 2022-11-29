import React, { Component } from "react";
import AppStyle from "./App.module.css";

export default class App extends Component {
  getStyle = () => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: "none",
    };
  };

  render = () => {
    return (
      <div className={AppStyle.container}>
        <div className={AppStyle.todoBlock}>
          <div className="title">
            <h1>할 일 목록</h1>
          </div>

          <div style={this.getStyle()}>
            <input type="checkbox" defaultChecked={false} />
            공부하기
            <button className={AppStyle.btnStyle}>x</button>
          </div>
        </div>
      </div>
    );
  };
}
