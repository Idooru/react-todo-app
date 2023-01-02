import React, { useState } from "react";
import "./App.module.css";
import List from "./components/ListComponent/List";
import Form from "./components/FormComponent/Form";

export default function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    if (!value || value.length > 16) {
      return alert("최소 한글자 이상 최대 16글자 이하로 입력해주세요!");
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
    <div className="flex items-center justify-center w-screen h-screen bg-blue-200">
      <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
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
