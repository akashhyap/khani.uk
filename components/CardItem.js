import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import Link from "next/link";
import Image from "next/image";

const CardItem = ({ blok }) => {

  return (
    <Link href={`/${blok?.link.cached_url}`} legacyBehavior>
      <a className="group relative block">
        <div className="flex-shrink-0 relative w-full rounded-xl overflow-hidden h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
          <Image
            src={`${blok?.image?.filename}/m/`}
            alt="Background image of card"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full h-full absolute top-0 left-0 object-cover"
          />
        </div>

        <div className="absolute top-0 inset-x-0 z-10">
          <div className="p-4 flex flex-col h-full sm:p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-[2.875rem] w-[2.875rem] border-2 border-white rounded-full"
                  src={`${blok.insetImage.filename}/m/`}
                  alt="Inset image"
                />
              </div>
              <div className="ml-2.5 sm:ml-3">
                <p className="font-semibold text-white">{blok.authorName}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 z-10">
          <div className="flex flex-col h-full p-4 sm:p-6  [&>h2]:text-lg [&>h2]:sm:text-3xl [&>h2]:font-semibold [&>h2]:text-white [&>h2]:group-hover:text-white/[.8] [&>p]:text-white/[.8] [&>p]:mt-2">
            {render(blok.content)}
          </div>
        </div>
      </a>
    </Link>
  );
};

export default CardItem;
