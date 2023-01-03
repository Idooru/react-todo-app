import React from "react";
import List from "../ListComponent/List";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const Lists = React.memo(({ todoData, setTodoData, handleClickToRemove }) => {
  console.log("Lists Component");
  const handleEnd = (result) => {
    console.log("result", result);

    if (!result.destination) return;
    const newTodoData = todoData;

    // 1. 변경시키는 아이템을 배열에서 지워줍니다.
    // 2. return 값으로 지워진 아이템을 잡아줍니다.
    const [reorderedItem] = newTodoData.splice(result.source.index, 1);

    // 원하는 자리에 reorderItem을 insert 해줍니다.
    newTodoData.splice(result.destination.index, 0, reorderedItem);
    setTodoData(newTodoData);
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId="todo">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todoData.map((data, index) => {
                return (
                  <Draggable
                    key={data.id}
                    draggableId={data.id.toString()}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <List
                        data={data}
                        provided={provided}
                        snapshot={snapshot}
                        todoData={todoData}
                        setTodoData={setTodoData}
                        handleClickToRemove={handleClickToRemove}
                      />
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
});

export default Lists;
