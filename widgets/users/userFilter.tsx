"use client"

import { User } from "@/app/api/users/types";
import { Input } from "@/components/input/input";
import UserList from "@/widgets/users/userList/userList";
import { useMemo, useState } from "react";

interface UserFilterProps {
  users: User[]
}

export default function UserFilter({
  users
}: UserFilterProps) {
  const [ term, setTerm ] = useState<string>("")
  const filteredUsers = useMemo(() =>
    users.filter(user => user.name.toLowerCase().includes(term))
  , [term, users])

  return (
    <>
      <Input label="filter" onChange={(e) => setTerm(e.target.value)} />
      {
        !filteredUsers.length ? (
          <div className="user-list__no-results">No results found!</div>
        ) : (
          <UserList users={filteredUsers} />
        )
      }
    </>
  );
}
