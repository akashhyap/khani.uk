import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";

const FeaturedImage = ({ blok }) => {
  // console.log("img ==>", blok);
  return (
    <figure className="w-full z-20 relative" {...storyblokEditable(blok)}>
      {blok.image.filename && (
        // <img
        //   className="w-full object-cover object-center rounded-2xl"
        //   alt={blok.image.alt}
        //   src={`${blok.image.filename}/m/`}
        //   width={644}
        //   height={429}
        // />
        <div className="relative">
          <Image
            src={`${blok.image.filename}/m/`}
            alt={blok.image.alt}
            width={644}
            height={429}
            className="w-full object-cover object-center rounded-2xl"
            priority={true}
          />
        </div>
      )}
    </figure>
  );
};
export default FeaturedImage;
