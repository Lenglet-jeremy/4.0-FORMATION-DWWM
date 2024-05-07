import React from "react";
import { useLoaderData } from "react-router-dom";

export default function Homepage() {
  const teams = useLoaderData();
  return (
    <div>
      <h1>Homepage</h1>
      <ul>{teams && teams.map((t) => <li key={t._id}>{t.name}</li>)}</ul>
    </div>
  );
}
