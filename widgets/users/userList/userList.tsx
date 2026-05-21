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
                            users.map(({id, name, email, company}) => (
                                <li key={id} className='user-list__list-item'>
                                    <div className='user-list__user'>
                                        <Link
                                            className='user-list__link'
                                            href={`/users/${id}`}>
                                                {name}
                                        </Link>
                                        <span className='user-list__email'>{email}</span>
                                    </div>
                                    <span className='user-list__company'>{company.name}</span>
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