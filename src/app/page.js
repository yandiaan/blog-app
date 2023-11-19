import Hero from "./_components/organisms/hero";
import { getComments, getPostsPerPage, getUser } from "./_services";
import cx from 'classnames';

async function getPostsData() {
  try {
    let posts = [];
    const reqPosts = await getPostsPerPage(1);
    const dataPosts = await reqPosts.data;

    const getUserPromises = dataPosts.map(
      async ({ id, user_id, title, body }) => {
        const reqComments = await getComments(id);
        const reqUser = await getUser(user_id);

        posts.push({
          id,
          user_id,
          title,
          body,
          author: reqUser.data?.name ?? "Anonymous",
          commentLength: reqComments.data?.length,
        });
      }
    );

    await Promise.all(getUserPromises);

    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

const Home = async () => {
  const posts = await getPostsData();

  return (
    <div className="container mx-auto">
      <Hero />

      <ul>
        {posts.map((post) => (
          <li key={post.id} className="py-4">
            <a href={`/posts/${post.id}`}>{post.title}</a>
            <h1>{post.user_id}</h1>
            <h1>{post.commentLength}</h1>
            <h1>{post.author}</h1>
            <h1>{post.body}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
