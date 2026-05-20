import { getUsers } from "@/api/users";
import UserFilter from "@/widgets/users/userFilter";

export default async function Home() {
  const users = await getUsers();

  return (
    <div className="wrap">
      <UserFilter users={users} />
    </div>
  );
}


// so what I struggle to define is how to handle now filtering. Should it send a fetch request, or to handle it purely on FE?