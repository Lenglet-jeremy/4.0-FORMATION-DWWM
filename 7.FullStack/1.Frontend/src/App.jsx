import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/Todolist";

function App() {
  // variable d'état pour stocker nos todos initialisée avec un tableau vide
  const [todolist, setTodolist] = useState([]);
  // console.log(todolist);

  useEffect(() => {
    async function getTodos() {
      try {
        const response = await fetch("http://localhost:5000/api/todos");
        if (response.ok) {
          const todos = await response.json();
          setTodolist(todos);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getTodos();
  }, []);

  // fonction pour ajout de todo
  function addTodo(todo) {
    setTodolist([...todolist, todo]);
  }

  // fonction pour supprimer une todo
  function deleteTodo(id) {
    setTodolist(todolist.filter((todo) => todo.id !== id));
  }

  // méthode pour changer la valeur de done
  function toggleTodoDone(id) {
    setTodolist(
      todolist.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              done: !todo.done,
            }
          : todo
      )
    );
  }

  // méthode pour changer la valeur de edit
  function toggleTodoEdit(id) {
    setTodolist(
      todolist.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              edit: !todo.edit,
            }
          : todo
      )
    );
  }

  // méthode pour modifier une todo
  function modifyTodo(id, content) {
    setTodolist(
      todolist.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              content,
              edit: false,
            }
          : todo
      )
    );
  }

  return (
    <div className="d-flex center" style={{ minHeight: "100vh" }}>
      <div className="card p-20">
        <h1 className="mb-20">Todo List</h1>
        <AddTodo addTodo={addTodo} />
        <TodoList
          todolist={todolist}
          deleteTodo={deleteTodo}
          toggleTodoDone={toggleTodoDone}
          toggleTodoEdit={toggleTodoEdit}
          modifyTodo={modifyTodo}
        />
      </div>
    </div>
  );
}

export default App;
