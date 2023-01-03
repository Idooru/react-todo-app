import React from "react";

const List = React.memo(
  ({ data, provided, snapshot, todoData, setTodoData }) => {
    console.log("List Component");
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
        </div>
      </div>
    );
  }
);

export default List;
