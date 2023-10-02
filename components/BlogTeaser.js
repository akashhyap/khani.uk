import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";
import { StoryblokComponent } from "@storyblok/react";

// International Date formatter
const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

const BlogTeaser = ({ article, slug, category }) => {
  // console.log("blog teaser", category.toLowerCase().split(" ").join("-"));
  const cat_link = category?.toLowerCase().split(" ").join("-")
  
  const isPageComponent = article?.component == "page";
  // let date = !isPageComponent && new Date(article?.date?.split(" ")[0]);
  return (
    <>
      {!isPageComponent && (
        <div className="blog_teaser flex flex-col group bg-gray-100 p-4 rounded-xl transition duration-500 ease-in-out">
          {article?.body.map((item) => {
            switch (item.component) {
              case "featuredImage":
                return (
                  <figure
                    key={item._uid}
                    className="relative pt-[50%] sm:pt-[70%] mb-4 rounded-xl overflow-hidden order-1"
                  >
                    <Link href={`/${slug}`} legacyBehavior>
                      <a>
                        <img
                          className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                          src={`${item.image?.filename}/m/`}
                          alt="blog"
                        />
                      </a>
                    </Link>
                  </figure>
                );
                break;

              case "h1_title":
                return (
                  <div key={item._uid} className="order-2">
                    {category ? (
                      <Link href={`${cat_link}/`} legacyBehavior>
                        <a className="capitalize bg-lavender text-salmon-900 px-2 py-1 rounded-3xl">{category?.split("-").join(" ")}</a>
                      </Link>
                    ) : undefined}
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
