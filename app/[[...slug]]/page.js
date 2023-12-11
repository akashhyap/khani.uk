import Config from "@/components/Config";
import Footer from "@/components/Footer";
import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import { ArticleJsonLd } from "next-seo";

export const dynamicParams = true;

export default async function Page({ params }) {
  let slug = params.slug ? params.slug.join("/") : "home";

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
    version: "draft",
    resolve_links: "url",
    resolve_relations: ["related-articles.articles"],
    cv: Math.random(),
  });
  let { data: config } = await storyblokApi.get("cdn/stories/config");
  const isBlogPage = data.story.content.component === "blog";
  return (
    <>
      {isBlogPage && (
        <ArticleJsonLd
          useAppDir={true}
          url={`https://khani-uk.vercel.app/${data.story?.full_slug}`}
          title={data.story.content?.body[0]?.text || data?.content?.name}
          datePublished={data.story?.first_published_at}
          authorName={data.story.content?.body[1]?.authorName}
          images={data.story.content?.body[2]?.image.filename}
          description={data.story.content?.seo && data.story.content?.seo[0]?.site_description}
        />
      )}
      <Config blok={config?.story?.content} />
      <div className="min-h-screen">
        <StoryblokStory story={data.story} full_slug={data.story?.full_slug} />
      </div>
      <Footer blok={config?.story?.content} />
    </>
  );
}

export const generateMetadata = async ({ params }) => {
  let slug = params.slug ? params.slug.join("/") : "home";

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
    version: "draft",
    resolve_links: "url",
    resolve_relations: ["related-articles.articles"],
    cv: Math.random(),
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
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get("cdn/links/", {
    version: "draft",
  });
  let paths = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder) {
      return;
    }
    const slug = data.links[linkKey].slug;

    if (slug == "home") {
      return;
    }

    let splittedSlug = slug.split("/");

    paths.push({ slug: splittedSlug });
  });
  return paths;
}
