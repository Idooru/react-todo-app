import React, { useState } from "react";
import AppStyle from "./App.module.css";
import List from "./components/ListComponent/List";
import Form from "./components/FormComponent/Form";

export default function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

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

  return (
    <div className={AppStyle.container}>
      <div className={AppStyle.todoBlock}>
        <div className="title">
          <h1>할 일 목록</h1>
        </div>

        <List todoData={todoData} setTodoData={setTodoData} />
        <Form
          handleSubmit={handleSubmit}
          setTodoData={setTodoData}
          value={value}
          setValue={setValue}
        />
      </div>
    </div>
  );
}
