import { storyblokEditable,StoryblokComponent } from "@storyblok/react/rsc";

const ImageOverlayCard = ({ blok }) => {
 
  return (
    <div className="max-w-6xl px-4 md:px-0 my-10 lg:my-16 mx-auto" {...storyblokEditable(blok)}>
      <div className="grid lg:grid-cols-2 gap-6">
      {blok.content.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
      </div>
    </div>
  );
};

export default ImageOverlayCard;
