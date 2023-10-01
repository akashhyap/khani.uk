import BlogTeaser from "./BlogTeaser";
import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

const RelatedArticles = ({ blok }) => {
  // console.log('related articles',blok);
  const bgColor = {
    backgroundColor: blok?.backgroundColor?.color,
  };
  return (
    <div className="related-articles py-3 md:py-14" style={bgColor} {...storyblokEditable(blok)}>
      <div className="mx-auto max-w-6xl px-3">
        <h2 className="exclude-index text-2xl sm:text-4xl lg:text-4xl font-semibold px-3 pb-7">
          {blok.title}
        </h2>
        <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3 mb-16">
          {blok.articles.map((article) => {
            // console.log("home related articles", article);
            return (
              <BlogTeaser
                article={article.content}
                slug={article.full_slug}
                key={article.uuid}
              />
            );
          })}
        </div>
        {blok.button.cached_url && (
          <Link href={`/${blok.button.cached_url}`} legacyBehavior>
            <a className="flex bg-poppy-800 hover:bg-poppy-900 shadow hover:shadow-lg transition-all duration-100 ease-linear rounded-md max-w-fit mx-auto text-white mb-5  px-7 py-3">
              View All{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </a>
          </Link>
        )}
      </div>

    </div>
  );
};
export default RelatedArticles;
