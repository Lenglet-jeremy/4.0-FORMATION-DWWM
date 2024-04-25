import React, { useState } from "react";
import Button from "./Button";

export default function AddTodo({ addTodo }) {
  // variable d'état pour stocker la saisie de l'inout initialisée avec une chaine de caractère vide
  const [value, setValue] = useState("");

  function handleChange(e) {
    const inputValue = e.target.value;
    setValue(inputValue);
  }

  function handleClick() {
    if (value.length) {
      addTodo(value);
      setValue("");
    }
  }

  function handleKeyDown(e) {
    if (value.length && e.code === "Enter") {
      addTodo(value);
      setValue("");
    }
  }
  return (
    <div className="d-flex center mb-20">
      <input
        value={value}
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Add a todo ..."
        className="flex-fill mr-15"
      />
      <Button text={"Add"} onClick={handleClick} />
    </div>
  );
}
