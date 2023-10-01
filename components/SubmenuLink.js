import { storyblokEditable,StoryblokComponent } from "@storyblok/react/rsc";

const SubmenuLink = ({ blok }) => {
  // console.log("sub menu", blok);

  return (
    <div className="">
      <span className="">
        {blok?.name}
      </span>
    </div>
  );
};
export default SubmenuLink;
