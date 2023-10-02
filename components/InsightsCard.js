import Image from "next/image";
import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";

const InsightsCard = ({ blok }) => {
  // console.log("insight card ==>", blok);

  const isSponsored = blok?.sponsored;
  const isBackgroundImageLayout = blok?.backgroundImageLayout;

  return (
    <Link href={blok?.button?.cached_url} legacyBehavior>
      {!isBackgroundImageLayout ? (
        <a className=" 01 group rounded-xl overflow-hidden">
          <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
              <Image
                src={`${blok?.image?.filename}/m/`}
                alt="Image Description"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="w-full h-full absolute top-0 left-0 object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                priority={true}
              />
           
            {isSponsored ? (
              <span className="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-poppy-900 text-white py-1.5 px-3">
                Sponsored
              </span>
            ) : undefined}
          </div>

          <div className="mt-7 [&>h2]:text-xl [&>h2]:font-semibold [&>h2]:group-hover:text-gray-600 [&>p]:leading-7 [&>p]:mt-3 ">
            {render(blok.content)}

            <p className="mt-5 inline-flex items-center gap-x-1.5 text-poppy-900 decoration-2 group-hover:underline font-medium">
              Read more
              <svg
                className="w-2.5 h-2.5"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </p>
          </div>
        </a>
      ) : (
        <a
          className={`group relative flex flex-col w-full min-h-[15rem] bg-center bg-cover rounded-xl hover:shadow-lg`}
          style={{ backgroundImage: `url(${blok?.image?.filename}/m/)` }}
        >
          <div className="flex-auto p-4 md:p-6 [&>h2]:text-xl [&>h2]:text-white/[.9] [&>h2]:group-hover:text-white/[.9]">
            {render(blok.content)}
          </div>
          <div className="pt-0 p-4 md:p-6">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/[.7]">
              Visit the site
              <svg
                className="w-2.5 h-2.5"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </a>
      )}
    </Link>
  );
};
export default InsightsCard;
