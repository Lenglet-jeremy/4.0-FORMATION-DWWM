import { getUser } from "../apis/users";

export async function profileLoader() {
  const user = await getUser();
  return user;
}
