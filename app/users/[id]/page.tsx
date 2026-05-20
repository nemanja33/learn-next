import { getUser, getUserPosts } from "@/api/users";

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
        <section>
            <h2>{user.name}</h2>
            <span>Post list</span>
            <ul>
                {
                    posts.map(({ id, title, body }) => (
                        <li key={id}>
                            <h3>{title}</h3>
                            <p>{body}</p>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
};

export default UserDetailPage;