import { StoryblokComponent } from "@storyblok/react";

const ArticleBody = ({ blok }) => {
  // console.log("ArticleBody");
  return (
    <>
      {blok.body.map((nestedBlok) => {
        const isTitle = nestedBlok.component == "h1_title";
        const isBlogAuthorInfo = nestedBlok.component == "blogAuthorInfo";
        const isFeaturedImage = nestedBlok.component == "featuredImage";
        const content =
          !isTitle && !isBlogAuthorInfo && !isFeaturedImage ? (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ) : null;
        return content;
      })}
    </>
  );
};
export default ArticleBody;
