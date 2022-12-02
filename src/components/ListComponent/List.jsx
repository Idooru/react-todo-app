import React from "react";
import ListStyle from "./List.module.css";

export default function List({ todoData, setTodoData }) {
  const handleClickToRemove = (id) => {
    const newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData);
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
    <div>
      {todoData.map((data) => {
        const completed = data.completed;
        const dataId = data.id;

        return (
          <div
            className={completed ? ListStyle.todoDone : ListStyle.todoUndone}
            key={dataId}
          >
            <input
              type="checkbox"
              onChange={() => handleCompleteChange(dataId)}
              defaultChecked={false}
            />
            {data.title}
            <button
              className={ListStyle.removeBtn}
              onClick={() => handleClickToRemove(dataId)}
            >
              X
            </button>
          </div>
        );
      })}
    </div>
  );
}
