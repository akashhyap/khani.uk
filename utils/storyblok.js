import { storyblokInit, apiPlugin } from "@storyblok/js";
import { getStoryblokApi } from "@storyblok/react/rsc";

export async function fetchSearchResults(query) {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get("cdn/stories", {
    version: "draft",
    search_term: query,
  });
  return data.stories;
}

const { storyblokApi } = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  use: [apiPlugin],
});

export async function getStory(slug) {
  if (!storyblokApi) {
    return;
  }
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
    version: "draft",
    cv: Math.random(),
  });
  const story = data ? data.story : null;
  return story;
}

export async function getAllStory(slug) {
  if (!storyblokApi) {
    return;
  }
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
    version: "draft",
    cv: Math.random(),
    resolve_links: "url",
    resolve_relations: ["related-articles.articles"],
  });
  const story = data ? data.story : null;
  return story;
}


export async function getLinks() {
  if(!storyblokApi) {
    return ;
  }
  const { data } = await storyblokApi.get('cdn/links', {
    version: 'draft' | 'published',
  })
  const links = data ? data.links : null
  return links
}

export async function getConfig() {
  if (!storyblokApi) {
    return;
  }
  const { data } = await storyblokApi.get(`cdn/stories/config`, {
    version: "draft" | "published",
  });
  const config = data ? data.story : null;
  return config;
}

export async function getReview() {
  if (!storyblokApi) {
    return;
  }
  const { data } = await storyblokApi.get(`cdn/stories/`, {
    starts_with: "reviews/",
  });
  const reviews = data.stories;
  return reviews;
}

export async function getReviews(slug) {
  if (!storyblokApi) {
    return;
  }
  const { data } = await storyblokApi.get(`cdn/stories/`, {
    version: "draft",
    starts_with: "reviews/",
  });
  const reviews = data.stories;
  return reviews;
}
