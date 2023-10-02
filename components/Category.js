"use client";
import BlogTeaser from "./BlogTeaser";
import { getStoryblokApi, storyblokEditable } from "@storyblok/react";
import { useState, useEffect } from "react";
// import BreadcrumbBlog from "./BreadcrumbBlog";

const Category = ({ blok }) => {
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
    const tagList = story.tag_list.map((tag) => tag.toLowerCase());
    return tagList.includes(blok?.name?.toLowerCase());
  });

  return (
    <div
      className="related-articles py-3 md:py-14"
      {...storyblokEditable(blok)}
    >
      <div className="mx-auto max-w-6xl px-3 md:px-12">
        {loading && <p>Loading...</p>}
        {!loading && filteredBlog.length === 0 && (
          <p>No articles match this category.</p>
        )}
        {!loading && filteredBlog.length > 0 && (
          <>
            <h1 className="h1_style">{blok.name}</h1>
            <div
              className={`grid w-full grid-cols-1 gap-6 mx-auto ${
                filteredBlog.length ? "lg:grid-cols-3" : "lg:grid-cols-1"
              }  mb-16`}
            >
              {filteredBlog.map((story) => {
                // console.log("story", story);
                const parentCategory = story?.full_slug
                  .trim("")
                  .split("/")
                  .slice(0)[0];
                return (
                  <BlogTeaser
                    key={story.uuid}
                    article={story.content}
                    slug={story.full_slug}
                    category={parentCategory}
                  />
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default Category;
