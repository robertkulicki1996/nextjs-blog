import { Post } from "@/types";
import { getRandomDate } from "@/utils/getRandomDate";
import { getRandomPostCategory } from "@/utils/getRandomPostCategory";

export async function getPosts(): Promise<Post[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
  const postsData = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch all posts");
  }

  return postsData.map((post: Post) => ({
    id: post.id,
    title: post.title,
    body: post.body,
    category: getRandomPostCategory(post.id),
    publicationDate: getRandomDate(post.id),
    description: post.body,
  }));
}
