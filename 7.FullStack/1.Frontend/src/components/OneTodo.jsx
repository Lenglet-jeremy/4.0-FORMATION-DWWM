import React from "react";

function OneTodo({ todo, deleteTodo, toggleTodoDone, toggleTodoEdit }) {
  // console.log(todo);
  return (
    <li className="mb-10 p-10 d-flex center">
      <span className="flex-fill mr-15">
        {todo.content} {todo.done && "( 🗸 )"}
      </span>
      <button onClick={toggleTodoDone} className="btn btn-primary mr-15">
        Valider
      </button>
      <button onClick={toggleTodoEdit} className="btn btn-primary mr-15">
        Modifier
      </button>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="btn btn-primary mr-15"
      >
        Supprimer
      </button>
    </li>
  );
}

export default OneTodo;
