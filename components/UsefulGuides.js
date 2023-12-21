import React, { useState, useEffect } from "react";
import BlogTeaser from "./BlogTeaser";
import { getStoryblokApi, StoryblokComponent } from "@storyblok/react/rsc";
import { usePathname } from "next/navigation";
import Breadcrumbs from "./Breadcrumb";
import { PiDogDuotone } from "react-icons/pi";

const UsefulGuides = ({ blok }) => {
  const pathname = usePathname();
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const storiesPerPage = 9; // Fetch 3 stories per page

  useEffect(() => {
    const fetchArticles = async () => {
      setIsLoading(true);
      const storyblokApi = getStoryblokApi();
      const response = await storyblokApi.get("cdn/stories", {
        starts_with: "useful-guides",
        version: "draft",
        per_page: storiesPerPage,
        page: currentPage,
        cv: Date.now(),
        is_startpage: false,
      });

      setIsLoading(false);
      if (response.data.stories.length > 0) {
        setArticles((prev) => [
          ...new Map(
            [...prev, ...response.data.stories].map((item) => [
              item["uuid"],
              item,
            ])
          ).values(),
        ]);
      }
      if (response.data.stories.length < storiesPerPage) {
        setHasMore(false);
      }
    };

    fetchArticles();
  }, [currentPage]);

  const loadMore = () => {
    if (!isLoading && hasMore) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const filterSiblingStories = (story) => {
    const currentPath = blok.filter_slug;
    return currentPath ? story.full_slug.startsWith(currentPath) : true;
  };

  return (
    <>
      <Breadcrumbs pathname={pathname} />
      {blok?.content &&
        blok?.content.map((nestedBlok) => (
          <div key={nestedBlok._uid} className="py-3 md:py-4">
            <StoryblokComponent blok={nestedBlok} />
          </div>
        ))}
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-10">
        {articles
          .filter(filterSiblingStories)
          .map(
            (story) =>
              story.content.component !== "page" && (
                <BlogTeaser
                  key={story.uuid}
                  article={story.content}
                  slug={story.full_slug}
                  category={blok?.category}
                  tag={story?.tag_list}
                  path={pathname}
                />
              )
          )}
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center text-center mt-10 mb-10">
          <PiDogDuotone />
          <span className="ml-2 text-sm font-semibold">
            Unleashing the hounds to fetch your results...
          </span>
        </div>
      ) : (
        hasMore && (
          <div className="text-center mb-10">
            <button
              onClick={loadMore}
              className="bg-poppy-900 text-white py-3 px-5 rounded-md"
            >
              Load More
            </button>
          </div>
        )
      )}
    </>
  );
};

export default UsefulGuides;
