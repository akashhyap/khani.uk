import { storyblokEditable,StoryblokComponent } from "@storyblok/react/rsc";

const Insights = ({ blok }) => {
  return (
    <div className="max-w-6xl px-4 md:px-0 my-10 lg:mb-16 mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6" {...storyblokEditable(blok)}>
      {blok.content.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};
export default Insights;
