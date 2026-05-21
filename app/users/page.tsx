import { getUsers } from "@/api/users";
import UserFilter from "@/widgets/users/userFilter";

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <div className="wrap">
      <UserFilter users={users} />
    </div>
  );
}
