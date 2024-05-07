import { json } from "react-router-dom";

export async function userLoader() {
  const user = { name: "Peter", age: 43 };
  return json(user);
}
