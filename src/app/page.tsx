import { getPosts } from "@/api/getPosts";
import {
  Header,
  PostCard,
  PostCategoriesSliderWrapper,
  ResponsiveContainer,
} from "@/components";
import GridContainer from "@/components/GridContainer";

export default async function Home() {
  const posts = await getPosts();

  return (
    <>
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
