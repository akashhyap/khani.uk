import { storyblokEditable,StoryblokComponent } from "@storyblok/react/rsc";
import MenuLink from "./MenuLink";

const CustomStoryblokComponent = ({ blok, closeMenu }) => {
  if (blok.component === "menu_link") {
    return <MenuLink blok={blok} closeMenu={closeMenu} />;
  }
  
  return <StoryblokComponent blok={blok} />;
};

export default CustomStoryblokComponent;
