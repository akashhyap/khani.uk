import { useEffect, useState } from "react";
import { getStoryblokApi } from "@storyblok/react";
import BlogTeaser from "./BlogTeaser";

const ArticleLists = ({ blok }) => {
  const parentCategory = blok?.parentCategory?.cached_url
    .split("/")
    .slice(0)[0];

  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getArticles = async () => {
      const storyblokApi = getStoryblokApi();
      const { data } = await storyblokApi.get(`cdn/stories`);
      setBlog(data.stories);
      setLoading(false);
    };
    getArticles();
  }, []);

  const filteredBlog = blog.filter((story) => {
    const checkSlug =
      story.full_slug.trim("").split("/").slice(0)[0] === parentCategory;

    const tagList = story.tag_list.map((tag) => tag.toLowerCase());
    return checkSlug && tagList.includes(blok.category.toLowerCase());
  });

  return (
    <div className="related-articles py-3">
      <div className="mx-auto max-w-6xl px-3 md:px-12">
        {loading && <p>Loading...</p>}
        {!loading && filteredBlog.length === 0 && (
          <p>No articles match this category.</p>
        )}
        {!loading && filteredBlog.length > 0 ? (
          <>
            <h2 className="text-2xl sm:text-4xl lg:text-4xl font-semibold mb-5">
              {blok.category}
            </h2>
            <div
              className={`grid w-full grid-cols-1 gap-6 mx-auto ${
                filteredBlog.length ? "lg:grid-cols-3" : "lg:grid-cols-1"
              }  mb-16`}
            >
              {filteredBlog.map((story) => {
                return (
                  <BlogTeaser
                    key={story.uuid}
                    article={story.content}
                    slug={story.full_slug}
                    category={blok.category}
                  />
                );
              })}
            </div>
          </>
        ) : undefined}
      </div>
    </div>
  );
};
export default ArticleLists;
