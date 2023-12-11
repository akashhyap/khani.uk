"use client";
import React, { useState, useEffect } from "react";
import BlogTeaser from "./BlogTeaser";
import { storyblokEditable } from "@storyblok/react";
import { usePathname } from "next/navigation";
import Breadcrumbs from "./Breadcrumb";

const CategoryClient = ({ blok, stories }) => {
  const pathname = usePathname();
  const [filteredBlog, setFilteredBlog] = useState([]);

  useEffect(() => {
    const filtered = stories.filter((story) => {
      const tagList = story.tag_list.map((tag) => tag.toLowerCase());
      return tagList.includes(blok?.name?.toLowerCase());
    });
    setFilteredBlog(filtered);
  }, [stories, blok]);

  return (
    <div className="related-articles" {...storyblokEditable(blok)}>
      <div className="mx-auto max-w-6xl px-3 md:px-12">
        <Breadcrumbs pathname={pathname} />
        {filteredBlog.length === 0 && <p>No articles match this category.</p>}
        {filteredBlog.length > 0 && (
          <>
            <h1 className="h1_style">{blok.name}</h1>
            <div className={`grid w-full grid-cols-1 gap-6 mx-auto ${filteredBlog.length ? "lg:grid-cols-2 xl:grid-cols-3" : "lg:grid-cols-1"} mb-16`}>
              {filteredBlog.map((story) => (
                <BlogTeaser
                  key={story.uuid}
                  article={story.content}
                  slug={story.full_slug}
                  category={blok?.category}
                  tag={story?.tag_list}
                  path={pathname}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CategoryClient;