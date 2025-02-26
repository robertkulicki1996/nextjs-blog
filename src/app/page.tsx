import { getPosts } from "@/app/api/getPosts";
import {
  Header,
  PostCard,
  PostCategoriesSliderWrapper,
  ResponsiveContainer,
} from "@/components";
import GridContainer from "@/components/GridContainer";
import { notFound } from "next/navigation";

export default async function Page() {
  const posts = await getPosts();
  if (!posts) notFound();

  return (
    <>
      <ResponsiveContainer topPadding={false}>
        <Header textKey="home.header" />
      </ResponsiveContainer>
      <ResponsiveContainer
        topPadding={false}
        className="bg-light-gray pt-[54px] pb-[122px] mb-6"
      >
        <Header
          href=""
          as="h2"
          textKey="home.categories"
          className="invisible sm:visible"
        />
        <PostCategoriesSliderWrapper />
      </ResponsiveContainer>
      <ResponsiveContainer topPadding={false} className="pt-[54px] pb-[122px]">
        <Header as="h3" textKey="home.posts" />
        <GridContainer>
          {posts &&
            posts.map((post) => {
              return (
                <PostCard
                  id={post.id}
                  key={post.id}
                  category={post.category}
                  title={post.title}
                  publicationDate={post.publicationDate}
                  description={post.description}
                />
              );
            })}
        </GridContainer>
      </ResponsiveContainer>
    </>
  );
}
