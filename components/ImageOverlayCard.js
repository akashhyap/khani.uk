import { storyblokEditable,StoryblokComponent } from "@storyblok/react/rsc";

const ImageOverlayCard = ({ blok }) => {
  // console.log("overlay image style", blok);

  return (
    <div className="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto" {...storyblokEditable(blok)}>
      <div className="grid lg:grid-cols-2 gap-6">
      {blok.content.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
      </div>
    </div>
  );
};

export default ImageOverlayCard;
