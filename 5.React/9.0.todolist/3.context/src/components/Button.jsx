import React from "react";
import { useContext } from "react";
import { themeContext } from "../context/theme";

export default function Button({ text, ...props }) {
  console.log(props);
  const theme = useContext(themeContext);
  return (
    <button
      className={`btn btn${props.reverse ? "-reverse" : ""}-${theme} mr-15`}
      {...props}
    >
      {text}
    </button>
  );
}
