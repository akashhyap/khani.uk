import Image from "next/image";
import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";

const InsightsCard = ({ blok }) => {
  console.log(blok);
  const isSponsored = blok?.sponsored;
  const isBackgroundImageLayout = blok?.backgroundImageLayout;

  return (
    <Link href={blok?.button?.cached_url}>
      {!isBackgroundImageLayout ? (
        <div className="group rounded-xl overflow-hidden">
          <div className="relative rounded-xl overflow-hidden">
            <div className="relative aspect-w-16 aspect-h-9">
              <Image
                src={`${blok?.image?.filename}`}
                alt={blok?.image?.alt}
                fill
                objectFit="cover"
                objectPosition="center"
                sizes="(min-width: 1540px) 433px, (min-width: 1280px) 380px, (min-width: 1040px) 275px, (min-width: 780px) 309px, (min-width: 640px) 245px, calc(100vw - 40px)"
                className="w-full h-full absolute top-0 left-0 group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                {...(blok.isPriority ? { priority: true } : {})}
              />
            </div>

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
            </p>
          </div>
        </div>
      ) : (
        <div
          className={`group relative flex flex-col w-full min-h-[15rem] h-full bg-center bg-cover rounded-xl hover:shadow-lg`}
          style={{ backgroundImage: `url(${blok?.image?.filename}/m/)` }}
        >
          <div className="flex-auto p-4 md:p-6 [&>h2]:text-xl [&>h2]:text-white/[.9] [&>h2]:group-hover:text-white/[.9]">
            {render(blok.content)}
          </div>
          <div className="pt-0 p-4 md:p-6">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/[.7]">
              {blok.button_label}
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
        </div>
      )}
    </Link>
  );
};
export default InsightsCard;
