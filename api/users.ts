import createQueryFn from "./createQueryFn"

type User = {
  id: number,
  name: string,
  email: string,
  company: {
    name: string
  }
}

type Post = {
  id: number,
  title: string,
  body: string
}

export async function getUsers(): Promise<User[]> {
  return await createQueryFn<User[]>({
    queryFn: () => fetch(process.env.USERS_API as string)
  });
}

export async function getUser(id: string): Promise<User> {
  return await createQueryFn<User>({
    queryFn: () => fetch(`${process.env.USERS_API}/${id}`)
  });
}

export async function getUserPosts(id: string): Promise<Post[]> {
  return await createQueryFn<Post[]>({
    queryFn: () => fetch(`${process.env.POSTS_API}?userId=${id}`)
  });
}

export type { User, Post }