import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

const ArticleContentArea = ({ blok }) => {
  return (
    <div className="md:w-6/12 w-full mx-auto" {...storyblokEditable(blok)}>
      {blok?.content.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default ArticleContentArea;
