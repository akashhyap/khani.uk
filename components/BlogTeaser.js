import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";
import { StoryblokComponent } from "@storyblok/react";
import Image from "next/image";

// International Date formatter
const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

const BlogTeaser = ({ article, slug, category, tag, path }) => {
  const postSlugParts = slug.split("/");

  const generateCategoryLink = (categoryName) => {
    const categorySlug = categoryName.toLowerCase().split(" ").join("-");
    let link = "";

    for (let i = 0; i < postSlugParts.length; i++) {
      if (postSlugParts[i] === categorySlug) {
        link = `/${postSlugParts.slice(0, i + 1).join("/")}/`;
        break;
      }
    }

    return link || `/${categorySlug}`;
  };

  const isBaseCategory = (tagName) => {
    // Check if the tag is the base category (e.g., 'dog-breeds')
    return path.split("/")[1] === tagName.toLowerCase().split(" ").join("-");
  };

  const cat_link = category?.toLowerCase().split(" ").join("-");
  const isPageComponent = article?.component == "page";
  return (
    <>
      {!isPageComponent && (
        <div className="blog_teaser flex flex-col group bg-gray-100 p-4 rounded-xl transition duration-500 ease-in-out">
          {article?.body?.map((item) => {
            switch (item.component) {
              case "featuredImage":
                return (
                  <figure
                    key={item._uid}
                    className="relative mb-1 rounded-xl overflow-hidden order-1"
                  >
                    <Link
                      href={`/${slug}`}
                      className="relative block aspect-w-16 aspect-h-9"
                    >
                      <Image
                        src={`${item.image?.filename}/m/`}
                        alt={item.image?.alt}
                        fill
                        objectFit="cover"
                        objectPosition="center"
                        sizes="(min-width: 1540px) 433px, (min-width: 1280px) 380px, (min-width: 1040px) 275px, (min-width: 780px) 309px, (min-width: 640px) 245px, calc(100vw - 40px)"
                        className="w-full h-full absolute top-0 left-0 group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                      />
                    </Link>
                  </figure>
                );
                break;

              case "h1_title":
                return (
                  <div key={item._uid} className="order-2">
                    {tag &&
                      tag.map((tagName, i) => {
                        if (
                          path.split("/").length > 2 &&
                          isBaseCategory(tagName)
                        ) {
                          // Skip the tag if it's the base category and the path is more detailed
                          return null;
                        }

                        const href = generateCategoryLink(tagName);
                        return (
                          <Link
                            key={i}
                            href={href}
                            className="capitalize text-sm bg-lavender text-salmon-900 px-2 py-1 mr-2 rounded-3xl"
                          >
                            {tagName.split("-").join(" ")}
                          </Link>
                        );
                      })}
                    <h2 className="exclude-index font-poppins mb-0 mt-4 text-2xl text-eerie font-semibold leading-8 tracking-tighter">
                      <Link href={`/${slug}`} legacyBehavior>
                        <a>{item.text}</a>
                      </Link>
                    </h2>
                  </div>
                );
                break;

              case "blogAuthorInfo":
                return (
                  <div key={item._uid} className="text-base order-3">
                    <StoryblokComponent blok={item} />
                  </div>
                );
                break;
              default:
                break;
            }
          })}
        </div>
      )}
    </>
  );
};
export default BlogTeaser;
