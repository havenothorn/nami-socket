import { notFound } from "next/navigation";
import { Post, posts } from "#site/content";

type PostPageProps = {
  params: {
    slug: string;
  };
};

function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug.endsWith(slug));
}

const PostPage = ({ params }: PostPageProps) => {
  const post = getPostBySlug(params.slug);
  if (post == null) notFound();
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.excerpt}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default PostPage;
