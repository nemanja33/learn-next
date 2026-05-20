import createQueryFn from "./createQueryFn"

type User = {
  id: number,
  name: string,
  email: string,
  company: {
    name: string
  }
}

export async function getUsers() {
    return await createQueryFn<User[]>({
        queryFn: () => fetch(process.env.USERS_API as string)
    });
}