import { User } from "@/app/api/users/types";

const BASE_URL = `${process.env.DOMAIN}/api`

async function getUsers(): Promise<User[]> {
  const users = await fetch(`${BASE_URL}/users`);

  return users.json()
}

async function getUser(id: string): Promise<User> {
  const user = await fetch(`${BASE_URL}/users/${id}`);

  return user.json();
}


export { getUsers, getUser }