import React from "react";
import OneTodo from "./OneTodo";
import EditTodo from "./EditTodo";

const Todolist = ({
  todolist,
  deleteTodo,
  toggleTodoDone,
  toggleTodoEdit,
  modifyTodo,
}) => {
  return todolist.length ? (
    <ul style={{ width: "700px" }}>
      {todolist.map((todo) =>
        todo.edit ? (
          <EditTodo
            key={todo.id}
            todo={todo}
            modifyTodo={modifyTodo}
            cancelEdit={toggleTodoEdit}
          />
        ) : (
          <OneTodo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleTodoDone={() => toggleTodoDone(todo.id)}
            toggleTodoEdit={() => toggleTodoEdit(todo.id)}
          />
        )
      )}
    </ul>
  ) : (
    <p>pas de todo pour le moment ...</p>
  );
};

export default Todolist;
