import { notFound } from 'next/navigation';
import { Header, ResponsiveContainer } from "@/components";
import { getPost } from '@/app/api/getPost';

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const post = await getPost(Number((await params).id));
  if (!post) notFound();

  return (
    <ResponsiveContainer
      topPadding={false}
      className="pb-[122px] mb-6"
    >
      <Header goBack href="/" textKey="home.header" />
      <h2 className="font-playfair-display text-3xl text-dark-blue mb-9">{post.title}</h2>
      <h3 className="font-playfair-display text-xl text-dark-blue">{post.body}</h3>
    </ResponsiveContainer>
  );
}
