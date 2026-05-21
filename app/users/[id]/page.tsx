import { getUser, getUserPosts } from "@/api/users";
import './userList.css';

interface UserDetailPageProps {
    params: Promise<{ id: string }>
}

const UserDetailPage = async({
    params
}: UserDetailPageProps) => {
    const { id } = await params;

    const [user, posts] = await Promise.all([
        await getUser(id),
        await getUserPosts(id)
    ]);

    if (!user || !posts) return null

    return (
        <section className="user-page">
            <div className="wrap">
                <h2 className="user-page__name">{user.name}</h2>
                <span>Post list</span>
                <ul className="user-page__list">
                    {
                        posts.map(({ id, title, body }) => (
                            <li key={id} className="user-page__list-item">
                                <h3>{title}</h3>
                                <p>{body}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
};

export default UserDetailPage;