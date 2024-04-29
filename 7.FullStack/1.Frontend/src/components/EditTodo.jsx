import React, { useState } from "react";

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
      <button
        onClick={() => cancelEdit(todo.id)}
        className="btn btn-primary mr-15"
      >
        Annuler
      </button>
      <button onClick={handleClick} className="btn btn-primary mr-15">
        Sauvegarder
      </button>
    </li>
  );
}

export default EditTodo;
