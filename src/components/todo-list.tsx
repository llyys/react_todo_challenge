import * as React from "react";
import { Checkbox } from "./checkbox";
import "./todo-list.scss";

export const TodoList = () => {
  const todos: any[] = [];

  const handleDelete = (id: number) => {
    // Fix an ability to delete task
  };

  const toggleCheck = (id: number) => {
    // Fix an ability to toggle task
  };

  const handleKeyUp = (e: KeyboardEvent, id: number) => {
    if (e.keyCode === 13) {
      toggleCheck(id);
    }
  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      {todos.length ? (
        <div className="todo-list-content">
          {todos.map((todoItem) => (
            <Checkbox
              key={todoItem.id}
              label={todoItem.label}
              checked={todoItem.checked}
              onClick={() => toggleCheck(todoItem.id)}
              onKeyUp={(e: KeyboardEvent) => handleKeyUp(e, todoItem.id)}
              onDelete={() => handleDelete(todoItem.id)}
            />
          ))}
        </div>
      ) : (
        <div className="no-todos">
          Looks like you&apos;re absolutely free today!
        </div>
      )}
    </div>
  );
};
