import { Post } from "@/types";
import { getRandomDate } from "@/utils/getRandomDate";
import { getRandomPostCategory } from "@/utils/getRandomPostCategory";

export async function getPost(postId: number): Promise<Post> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${postId}`);
  const postData = await res.json();

  if (!res.ok) {
    throw new Error(`Failed to fetch post with id: ${postId}`);
  }
  const { id, title, body } = postData;

  return {
    id,
    title,
    body: `${body} ${body} ${body} ${body}`,
    category: getRandomPostCategory(id),
    publicationDate: getRandomDate(id),
    description: body,
  };
}
