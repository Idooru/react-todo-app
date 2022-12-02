import React, { useState } from "react";
import AppStyle from "./App.module.css";

export default function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  const handleClickToRemove = (id) => {
    const newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    if (!value) {
      return alert("최소 한글자 이상 입력해주세요!");
    }

    if (value.length > 16) {
      return alert("16글자를 넘지 말아주세요!");
    }

    event.preventDefault();

    const newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    setTodoData([...todoData, newTodo]);
    setValue("");
  };

  const handleCompleteChange = (id) => {
    const newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });

    setTodoData(() => newTodoData);
  };

  return (
    <div className={AppStyle.container}>
      <div className={AppStyle.todoBlock}>
        <div className="title">
          <h1>할 일 목록</h1>
        </div>

        {todoData.map((data) => {
          const completed = data.completed;
          const dataId = data.id;

          return (
            <div
              className={completed ? AppStyle.todoDone : AppStyle.todoUndone}
              key={dataId}
            >
              <input
                type="checkbox"
                onChange={() => handleCompleteChange(dataId)}
                defaultChecked={completed}
              />
              {data.title}
              <button
                className={AppStyle.removeBtn}
                onClick={() => handleClickToRemove(dataId)}
              >
                X
              </button>
            </div>
          );
        })}

        <form className={AppStyle.inputForm} onSubmit={handleSubmit}>
          <input
            className={AppStyle.inputArea}
            onChange={handleChange}
            type="text"
            name="value"
            placeholder="해야 할 일을 입력하세요."
            autoComplete="off"
            value={value}
          />
          <input
            className={AppStyle.inputBtn}
            type="submit"
            value="입력"
            style={{ flex: 1 }}
          />
        </form>
      </div>
    </div>
  );
}
