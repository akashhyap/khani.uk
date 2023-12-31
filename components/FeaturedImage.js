import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";

const FeaturedImage = ({ blok }) => {
  return (
    <figure className="w-full z-20 relative" {...storyblokEditable(blok)}>
      {blok.image.filename && (
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
