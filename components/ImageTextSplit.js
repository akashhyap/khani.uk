import { storyblokEditable } from "@storyblok/react/rsc";
import Image from "next/image";
import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";

const ImageTextSplit = ({ blok }) => {
  const buttonSize = blok?.button_size;
  const sizeClass =
    buttonSize === "jumbo"
      ? "px-6 py-4"
      : buttonSize === "large"
      ? "px-4 py-3"
      : "px-2 py-2";

  return (
    <div className="" {...storyblokEditable(blok)}>
      <div
        className={`image_text_split container mx-auto flex flex-wrap md:flex-nowrap gap-6 px-7 mb-10 ${
          blok?.reverse ? "flex-row-reverse" : ""
        } ${blok?.alignItem}`}
      >
        {blok?.image?.filename && <div className="flex p-3 w-full md:w-1/2 rounded-xl border overflow-hidden">
          <div className="relative w-full aspect-w-16 aspect-h-9">
            <Image
              src={blok?.image?.filename}
              alt=""
              fill
              className="w-full object-center object-contain"
            />
          </div>
        </div>}
        <div className={`w-full ${blok?.image?.filename? "md:w-1/2" : "w-full"} content_block`}>
          {render(blok?.content)}
          <div className="mt-10">
            {blok?.button_type === "link" ? (
              <Link href={`/${blok?.button.cached_url}`}>
                {blok?.button_label}
              </Link>
            ) : (
              <Link
                href={`/${blok?.button.cached_url}`}
                className={`inline-block text-white text-sm font-medium bg-poppy-800 rounded-lg ${sizeClass}`}
              >
                {blok?.button_label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageTextSplit;
