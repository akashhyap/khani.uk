import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import ArticleHeader from "./ArticleHeader";
import ArticleBody from "./ArticleBody";

const FluidLayout = ({ blok }) => {
  const tableOfContent = blok.content[0]?.component === "tableOfContent";
  const containerFluid = blok.containerFluid === true;

  return (
    <div
      className={`relative fluid-layout md:w-6/12 mb-10 mt-5 lg:mt-2 m-auto ${
        containerFluid ? "md:w-full" : ""
      } ${!!tableOfContent ? "flex md:px-5 md:pb-10 layout-with-index" : ""}`}
      {...storyblokEditable(blok)}
    >
      {blok.content.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};
export default FluidLayout;
