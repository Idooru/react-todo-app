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
          <div key={dataId}>
            <div className="flex items-center justify-between w-full px-4 my-2 text-gray-600 bg-gray-100 border rounded ">
              <div className="items-center">
                <input
                  type="checkbox"
                  onChange={() => handleCompleteChange(dataId)}
                  defaultChecked={completed}
                />{" "}
                <span className={completed ? "line-through" : undefined}>
                  {data.title}
                </span>
              </div>
              <div className="items-center">
                <button
                  className="px-4 py-2 float-right"
                  onClick={() => handleClickToRemove(dataId)}
                >
                  X
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
