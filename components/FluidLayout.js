import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import ArticleHeader from "./ArticleHeader";
import ArticleBody from "./ArticleBody";

const FluidLayout = ({ blok }) => {
  const tableOfContent = blok.content[0]?.component === "tableOfContent";
  const containerFluid = blok.containerFluid === true;

  return (
    <div
      className={`fluid-layout md:w-6/12 m-auto ${
        containerFluid ? "md:w-full" : ""
      } ${!!tableOfContent ? "flex md:px-5 md:pb-10 layout-with-index" : ""}`}
    >
      {blok.content.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};
export default FluidLayout;
