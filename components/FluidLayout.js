import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import ArticleHeader from "./ArticleHeader";
import ArticleBody from "./ArticleBody";

const FluidLayout = ({ blok }) => {
  const tableOfContent = blok.content[0]?.component === "tableOfContent";
  const containerFluid = blok.containerFluid === true;

  return (
    <div
      className={`relative fluid-layout md:w-6/12 my-10 lg:my-16 m-auto ${
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
