import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/Todolist";
import { themeContext } from "./context/theme";

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

  const [theme, setTheme] = useState("primary");

  function handleChange(e) {
    setTheme(e.target.value);
  }

  return (
    <themeContext.Provider value={theme}>
      <div className="d-flex center" style={{ minHeight: "100vh" }}>
        <div className="card p-20">
          <div className="mb-20">
            <h1 className="flex-fill">Todo List</h1>
            <select value={theme} onChange={handleChange}>
              <option value="primary">Rouge</option>
              <option value="secondary">Bleu</option>
            </select>
          </div>
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
    </themeContext.Provider>
  );
}

export default App;
