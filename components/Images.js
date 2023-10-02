import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";

const Images = ({ blok }) => {
  // console.log("img ==>", blok);
  return (
    <div className="px-7 mb-10" {...storyblokEditable(blok)}>
      <figure className="w-full relative aspect-w-16 aspect-h-9">
        {blok?.image.filename && (
          <Image
            alt={blok.image.alt}
            src={`${blok.image.filename}/m/`}
            fill
            className="w-full h-full object-cover object-center rounded-xl"
            loading="lazy"
          />
        )}
      </figure>
    </div>
  );
};
export default Images;
