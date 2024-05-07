import { redirect } from "react-router-dom";
import { isLoggedIn } from "./auth";

export async function getUser() {
  try {
    const response = await fetch("http://localhost:5000/api/players");
    if (response.ok) {
      const body = await response.json();
      console.log(body);
      if (await isLoggedIn()) {
        return body[0];
      } else {
        return redirect("/");
      }
    }
  } catch (error) {
    console.log(error);
  }
}
