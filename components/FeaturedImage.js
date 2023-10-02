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
        <div className="relative aspect-w-16 aspect-h-10">
          <Image
            src={`${blok.image.filename}/m/`}
            alt={blok.image.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full h-full object-cover object-center rounded-2xl"
            priority={true}
          />
        </div>
      )}
    </figure>
  );
};
export default FeaturedImage;
