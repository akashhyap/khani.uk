import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const Page = ({ blok }) => {
  return (
    <div className={`container mx-auto px-0 sm:px-6 xl:px-0 ${blok.maxWidth}`} {...storyblokEditable(blok)}>
      {blok?.body?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  )
};

export default Page;