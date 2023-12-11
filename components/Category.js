import { getStoryblokApi } from "@storyblok/react";
import CategoryClient from "./CategoryClient";

export default async function Category({ blok }) {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories`);
  const stories = data.stories;

  return <CategoryClient blok={blok} stories={stories} />;
}