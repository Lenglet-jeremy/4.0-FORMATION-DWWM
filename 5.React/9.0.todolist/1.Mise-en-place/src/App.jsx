import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/Todolist";

function App() {
  // variable d'état pour stocker nos todos initialisée avec un tableau vide
  const [todolist, setTodolist] = useState([]);
  // console.log(todolist);

  // fonction pour ajout de todo
  function addTodo(content) {
    const todo = {
      id: crypto.randomUUID(),
      content,
      done: false,
      edit: false,
    };
    setTodolist([...todolist, todo]);
  }
  return (
    <div className="d-flex center" style={{ minHeight: "100vh" }}>
      <div className="card p-20">
        <h1 className="mb-20">Todo List</h1>
        <AddTodo addTodo={addTodo} />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
