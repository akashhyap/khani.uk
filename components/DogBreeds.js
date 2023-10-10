import BlogTeaser from "./BlogTeaser";
// import BlogTeaserLayout from "./BlogTeaserLayout";
import {
  getStoryblokApi,
  StoryblokComponent,
  storyblokEditable,
} from "@storyblok/react/rsc";

import { render } from "storyblok-rich-text-react-renderer";

// import BreadcrumbBlog from "./BreadcrumbBlog";
// import HorizontalCardItem from "./HorizontalCardItem";

const DogBreeds = async ({ blok }) => {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get("cdn/stories", {
    starts_with: "dog-breeds",
    version: "draft",
    cv: Math.random(),
    is_startpage: false,
  });
  let articles = data.stories.map((a) => {
    a.content.slug = a.slug;
    return a;
  });
  // Filter out sibling stories based on their full_slug.
  const filterSiblingStories = (story) => {
    const currentPath = blok.filter_slug;

    if (currentPath) {
      return story.full_slug.startsWith(currentPath);
    }
    return true; // If no currentPath provided, show all.
  };

  return (
    <>
      {blok?.content.map((nestedBlok) => {
        return (
          <div key={nestedBlok._uid} className="py-3 md:py-14">
            <StoryblokComponent blok={nestedBlok} />
          </div>
        );
      })}

      <div className="grid lg:grid-cols-2 gap-6 mb-10">
        {articles.filter(filterSiblingStories).map((story) => {
          if (
            story.content.component !== "page" &&
            story.tag_list.length === 0
          ) {
            return (
              <BlogTeaser
                key={story.uuid}
                article={story.content}
                slug={story.full_slug}
                category={blok?.category}
              />
            );
          }
        })}
      </div>
    </>
  );
};
export default DogBreeds;
