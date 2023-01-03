import React from "react";
import { useState } from "react";

const List = React.memo(
  ({
    data,
    provided,
    snapshot,
    todoData,
    setTodoData,
    handleClickToRemove,
  }) => {
    const [editing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(data.title);
    const _data = data;

    const handleCompleteChange = (id) => {
      const newTodoData = todoData.map((data) => {
        if (data.id === id) {
          data.completed = !data.completed;
        }
        return data;
      });

      setTodoData(() => newTodoData);
    };

    const handleEditTitle = (event) => {
      setEditedTitle(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();

      let newTodoData = todoData.map((data) => {
        if (_data.id === data.id) {
          data.title = editedTitle;
        }
        return data;
      });

      setTodoData(newTodoData);
      setIsEditing(false);
    };

    if (editing) {
      return (
        <div
          className={
            " flex items-center justify-between w-full px-4 my-2 text-gray-600 border rounded  bg-gray-100"
          }
        >
          <div className="items-center">
            <form onSubmit={handleSubmit}>
              <input
                value={editedTitle}
                onChange={handleEditTitle}
                className="w-full px-3 py-1.5 mr-4 text-gray-500 rounded outline-none"
              />
            </form>
          </div>
          <div className="items-center">
            <button
              className="px-4 py-2 float-right"
              onClick={() => setIsEditing(false)}
            >
              X
            </button>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 float-right"
              type="submit"
            >
              Save
            </button>
          </div>
        </div>
      );
    }

    return (
      <div
        key={data.id}
        {...provided.draggableProps}
        ref={provided.innerRef}
        {...provided.dragHandleProps}
        className={`${
          snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"
        } flex items-center justify-between w-full px-4 my-2 text-gray-600 border rounded `}
      >
        <div className="items-center">
          <input
            type="checkbox"
            onChange={() => handleCompleteChange(data.id)}
            defaultChecked={data.completed}
          />{" "}
          <span className={data.completed ? "line-through" : undefined}>
            {data.title}
          </span>
        </div>
        <div className="items-center">
          <button
            className="px-4 py-2 float-right"
            onClick={() => handleClickToRemove(data.id)}
          >
            X
          </button>
          <button
            className="px-4 py-2 float-right"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        </div>
      </div>
    );
  }
);

export default List;
