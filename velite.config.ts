import { defineConfig, s } from "velite";

export default defineConfig({
  collections: {
    posts: {
      name: "Post",
      pattern: "posts/****/**/**/*.md",
      schema: s
        .object({
          title: s.string(),
          slug: s.path(),
          date: s.isodate(),
          thumbnail: s.image().optional(),
          video: s.file().optional(),
          metadata: s.metadata(),
          excerpt: s.excerpt(),
          content: s.markdown(),
        })
        .transform((data) => {
          return {
            ...data,
            url: `${data.slug}`,
          };
        }),
    },
  },
});
