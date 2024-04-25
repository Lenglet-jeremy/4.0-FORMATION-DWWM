import React, { useState } from "react";
import Button from "./Button";

function EditTodo({ todo, modifyTodo, cancelEdit }) {
  const [valueTodo, setValueTodo] = useState(todo.content);

  function handleChange(e) {
    setValueTodo(e.target.value);
  }

  function handleClick() {
    if (valueTodo.length) {
      modifyTodo(todo.id, valueTodo);
    }
  }
  return (
    <li className="mb-10 p-10 d-flex center">
      <input
        onChange={handleChange}
        value={valueTodo}
        type="text"
        className="flex-fill mr-15"
      />
      <Button text={"Annuler"} onClick={() => cancelEdit(todo.id)} />
      <Button text={"Sauvegarder"} onClick={handleClick} />
    </li>
  );
}

export default EditTodo;
