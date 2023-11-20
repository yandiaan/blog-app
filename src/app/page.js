import cx from "classnames";
import Hero from "./_components/organisms/hero";
import { getPostsPerPage } from "./_services";
import BlogListTitle from "./_components/atoms/blogListTitle";
import BlogList from "./_components/organisms/blogList";
import LoadMore from "./_components/organisms/loadMore";

const Home = async () => {
  const posts = await getPostsPerPage(1);
  
  return (
    <div className="container mx-auto">
      <Hero />
      <div className="flex justify-center">
        <BlogListTitle />
      </div>
      <div className="mt-6 px-24 grid grid-cols-2 gap-x-8 gap-y-16">
        <BlogList posts={posts} />
        <LoadMore type="posts" />
      </div>
    </div>
  );
};

export default Home;
