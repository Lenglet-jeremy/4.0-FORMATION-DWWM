import React from "react";
import { useParams } from "react-router-dom";

export default function Photos() {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h2>Photos</h2>
    </div>
  );
}
