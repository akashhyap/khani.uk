import { storyblokEditable,StoryblokComponent } from "@storyblok/react/rsc";

const Insights = ({ blok }) => {
  // console.log("insight ==>", blok);
  return (
    <div className="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6" {...storyblokEditable(blok)}>
      {blok.content.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};
export default Insights;
