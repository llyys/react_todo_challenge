import React from "react";
import "./App.css";
import { TodosContext } from "./todo-context";
import { TodoList } from "./components/todo-list";
import { TodoResults } from "./components/todo-results";
import { TodoForm } from "./components/todo-form";

const todosTemplate = [
  {
    id: 0,
    label: "Fix an ability to display all tasks",
    checked: false,
  },
  {
    id: 1,
    label: "Fix a layout, checkboxes should be listed in a column",
    checked: false,
  },
  {
    id: 2,
    label: "Fix an ability to add a new task",
    checked: false,
  },
  {
    id: 3,
    label: "Fix an ability to toggle a task",
    checked: false,
  },
  {
    id: 4,
    label: "Fix an ability to delete a task",
    checked: false,
  },
  {
    id: 5,
    label: "Fix an ability to count completed tasks",
    checked: false,
  },
];

function App() {
  const [todos, setTodos] = React.useState(todosTemplate);
  const [count, setCount] = React.useState(0);

  return (
    <div className="root">
      <TodosContext.Provider value={{ todos }}>
        <TodoList />
        <TodoResults />
        <TodoForm />
      </TodosContext.Provider>
    </div>
  );
}

export default App;
