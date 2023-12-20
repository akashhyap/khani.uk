import { getAllStory, getLinks } from "@/utils/storyblok";
import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import { ArticleJsonLd } from "next-seo";

export const dynamicParams = true;

async function fetchData(params) {
  let slug = params.slug ? params.slug.join('/') : 'home'

  const story = await getAllStory(slug)
  return {
    story: story ?? false
  }
}

export default async function Page({ params }) {
  const { story } = await fetchData(params);
  const isBlogPage = story.content.component === "blog";
  return (
    <>
      {isBlogPage && (
        <ArticleJsonLd
          useAppDir={true}
          url={`https://https://khani.co.uk/${story?.full_slug}`}
          title={
           story?.content?.body
              ? `${story?.content?.body[0]?.text}`
              : `${content?.name}`
          }
          datePublished={story?.first_published_at}
          authorName={
            story.content?.body &&
            `${story.content?.body[1]?.authorName}`
          }
          images={
            story.content?.body &&
            `${story.content?.body[2]?.image.filename}`
          }
          description={
            story.content?.seo &&
            story.content?.seo[0]?.site_description
          }
        />
      )}
      <div className="min-h-screen">
       <StoryblokStory story={story} full_slug={story?.full_slug} />
      </div>
    </>
  );
}

export const generateMetadata = async ({ params }) => {
  let slug = params.slug ? params.slug.join("/") : "home";

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
    version: "draft",
  });
  const hasSEOdata = data?.story?.content?.seo;
  return {
    title: hasSEOdata ? data?.story?.content?.seo[0]?.site_title : "Khani",
    description: hasSEOdata
      ? data?.story?.content?.seo[0]?.site_description
      : "Khani",
    openGraph: {
      title: data?.story?.content?.seo
        ? data?.story?.content?.seo[0]?.og_title
        : "Khani",
      description: hasSEOdata
        ? data?.story?.content?.seo[0]?.og_description
        : "Khani",
      url: hasSEOdata ? data?.story?.content?.seo[0]?.og_url : "",
      siteName: hasSEOdata
        ? data?.story?.content?.seo[0]?.og_siteName
        : "Khani",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: hasSEOdata ? data?.story?.content?.seo[0]?.twitter_title : "Khani",
      description: hasSEOdata
        ? data?.story?.content?.seo[0]?.og_description
        : "Khani",
      creator: "@trustseo",
    },
    icons: {
      apple: [{ url: "/apple-touch-icon.png" }],
    },
  };
};

export async function generateStaticParams() {
  const links = await getLinks()
  const paths = [];
  Object.keys(links).forEach((linkKey) => {
    if (links[linkKey].is_folder || links[linkKey].slug === 'home') {
      return
    }

    const slug = links[linkKey].slug
    let splittedSlug = slug.split('/')
    paths.push({ slug: splittedSlug })
  })

  return paths
}
