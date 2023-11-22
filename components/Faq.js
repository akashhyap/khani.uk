import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const Faq = ({ blok }) => {
  const addedClasses = {
    marginTop: blok?.marginTop,
    marginBottom: blok?.marginBottom,
  };
  return (
    <div className="relative w-full px-7 mb-10" style={addedClasses} {...storyblokEditable(blok)}>
      {blok?.body?.map((nestedBlok) => (
        <StoryblokComponent
          blok={nestedBlok}
          key={nestedBlok._uid}
          itemIdx={nestedBlok._uid}
        />
      ))}
    </div>
  );
};

export default Faq;