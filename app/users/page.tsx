import UserFilter from "@/widgets/users/userFilter";
import { getUsers } from "../lib/services/users";

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <div className="wrap">
      <UserFilter users={users} />
    </div>
  );
}
