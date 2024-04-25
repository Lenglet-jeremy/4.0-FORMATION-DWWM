import React from "react";
import Button from "./Button";

function OneTodo({ todo, deleteTodo, toggleTodoDone, toggleTodoEdit }) {
  // console.log(todo);
  return (
    <li className="mb-10 p-10 d-flex center">
      <span className="flex-fill mr-15">
        {todo.content} {todo.done && "( 🗸 )"}
      </span>
      <Button text={"Valider"} reverse={true} onClick={toggleTodoDone} />
      <Button text={"Modifier"} reverse={true} onClick={toggleTodoEdit} />
      <Button text={"Supprimer"} onClick={() => deleteTodo(todo.id)} />
    </li>
  );
}

export default OneTodo;
