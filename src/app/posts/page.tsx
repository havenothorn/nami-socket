import { posts } from "#site/content";

const AllPostsPage = () => {
  return (
    <div>
      <h1>All Posts</h1>
      {posts.map((post) => (
        <div key={post.slug}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
          <a href={`${post.url}`}>Read more</a>
        </div>
      ))}
    </div>
  );
};

export default AllPostsPage;
