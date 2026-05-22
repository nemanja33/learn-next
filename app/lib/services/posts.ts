import { Post } from "@/app/api/posts/types";

const BASE_URL = `${process.env.DOMAIN}/api`

async function getPosts(id: string): Promise<Post[]> {
  const posts = await fetch(`${BASE_URL}/posts/${id}`);

  return posts.json()
};


export { getPosts }