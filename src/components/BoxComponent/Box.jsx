import React, { useState, useCallback } from "react";
import Lists from "../ListsComponent/Lists";
import Form from "../FormComponent/Form";
import BoxStyle from "./Box.module.css";

export default function Box() {
  const initialTodoData = localStorage.getItem("todoData")
    ? JSON.parse(localStorage.getItem("todoData"))
    : [];

  const [todoData, setTodoData] = useState(initialTodoData);
  const [value, setValue] = useState("");

  const handleClickToRemove = useCallback(
    (id) => {
      const newTodoData = todoData.filter((data) => data.id !== id);
      setTodoData(newTodoData);
      localStorage.setItem("todoData", JSON.stringify(newTodoData));
    },
    [todoData]
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!value || value.length > 16) {
      return alert("최소 한글자 이상 최대 16글자 이하로 입력해주세요!");
    }

    const newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    if (todoData.length >= 7) {
      alert("더 이상 할 일 목록을 추가할 수 없습니다.");
      return setValue("");
    }

    setTodoData([...todoData, newTodo]);
    localStorage.setItem("todoData", JSON.stringify([...todoData, newTodo]));

    setValue("");
  };

  const handleDeleteAll = () => {
    setTodoData([]);
    localStorage.setItem("todoData", JSON.stringify([]));
  };

  return (
    <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
      <div className="flex justify-between mb-3">
        <h1>할 일 목록</h1>
        <button className={BoxStyle.DeleteAllButton} onClick={handleDeleteAll}>
          Delete All
        </button>
      </div>
      <Lists
        todoData={todoData}
        setTodoData={setTodoData}
        handleClickToRemove={handleClickToRemove}
      />
      <Form
        handleSubmit={handleSubmit}
        setTodoData={setTodoData}
        value={value}
        setValue={setValue}
      />
    </div>
  );
}
