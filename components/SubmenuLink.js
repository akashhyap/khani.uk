import { storyblokEditable,StoryblokComponent } from "@storyblok/react/rsc";

const SubmenuLink = ({ blok }) => {

  return (
    <div className="">
      <span className="">
        {blok?.name}
      </span>
    </div>
  );
};
export default SubmenuLink;
