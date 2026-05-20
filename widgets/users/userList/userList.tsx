import { getUsers } from "@/api/users";

async function UserList() {
    const users = await getUsers();

    return (
        <>
            {
                !!users && (
                    <ul className='user-list__list'> 
                        {
                            users.map(({id, name, email, company}) => (
                                <li key={id}>{name}</li>
                            ))
                        }
                    </ul>
                )
            }
        </>
    )
};

export default UserList;