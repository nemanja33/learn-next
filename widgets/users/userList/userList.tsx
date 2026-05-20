import { getUsers, User } from "@/api/users";
import "./userList.css";
import Link from "next/link";

interface UserFilterProps {
  users: User[]
}

function UserList({
  users
}: UserFilterProps) {
    
    return (
        <>
            {
                !!users && (
                    <ul className='user-list__list'> 
                        {
                            users.map(({id, name}) => (
                                <li className="user-list__list-item" key={id}>
                                    <Link href={`/users/${id}`}>{name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                )
            }
        </>
    )
};

export default UserList;