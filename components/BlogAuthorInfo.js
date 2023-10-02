import { storyblokEditable } from "@storyblok/react";

// International Date formatter
const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

const BlogAuthorInfo = ({ blok }) => {
  // console.log("BlogAuthorInfo", blok);

  const isPageComponent = blok.component == "page";
  let date = !isPageComponent && new Date(blok.date.split(" ")[0]);

  return (
    <div className="flex items-center mt-8 mb-5 meta_info" {...storyblokEditable(blok)}>
      <figure className="mr-2 basis-1/4 md:basis-auto">
        {blok.image.filename && (
          <img
            className="w-[46px] h-[46px] object-center rounded-full author_img"
            alt={blok.image.alt}
            src={`${blok.image.filename}/m/`}
          />
        )}
      </figure>
      <div className="text-base text-white hover:text-gray-100 font-light">
        <span className="mr-1 pseudo_blok">
          <svg
            className="inline"
            width="20"
            height="20"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="IconChangeColor"
          >
            {" "}
            <path
              d="M10.5213 2.62368C11.3147 1.75255 12.6853 1.75255 13.4787 2.62368L14.4989 3.74391C14.8998 4.18418 15.4761 4.42288 16.071 4.39508L17.5845 4.32435C18.7614 4.26934 19.7307 5.23857 19.6757 6.41554L19.6049 7.92905C19.5771 8.52388 19.8158 9.10016 20.2561 9.50111L21.3763 10.5213C22.2475 11.3147 22.2475 12.6853 21.3763 13.4787L20.2561 14.4989C19.8158 14.8998 19.5771 15.4761 19.6049 16.071L19.6757 17.5845C19.7307 18.7614 18.7614 19.7307 17.5845 19.6757L16.071 19.6049C15.4761 19.5771 14.8998 19.8158 14.4989 20.2561L13.4787 21.3763C12.6853 22.2475 11.3147 22.2475 10.5213 21.3763L9.50111 20.2561C9.10016 19.8158 8.52388 19.5771 7.92905 19.6049L6.41553 19.6757C5.23857 19.7307 4.26934 18.7614 4.32435 17.5845L4.39508 16.071C4.42288 15.4761 4.18418 14.8998 3.74391 14.4989L2.62368 13.4787C1.75255 12.6853 1.75255 11.3147 2.62368 10.5213L3.74391 9.50111C4.18418 9.10016 4.42288 8.52388 4.39508 7.92905L4.32435 6.41553C4.26934 5.23857 5.23857 4.26934 6.41554 4.32435L7.92905 4.39508C8.52388 4.42288 9.10016 4.18418 9.50111 3.74391L10.5213 2.62368Z"
              stroke="#ffffff"
              strokeWidth="0"
              id="mainIconPathAttribute"
              fill="#1d9bf0"
            ></path>{" "}
            <path
              d="M9 12L11 14L15 10"
              stroke="#ffffff"
              strokeLinecap="round"
              strokeLinejoin="round"
              id="mainIconPathAttribute"
              fill="#1d9bf0"
            ></path>{" "}
          </svg>
           Written by {blok.authorName}
        </span>
        <span className="mr-1"> | Last updated</span>
        {blok.date && <span>{dateFormatter.format(date)}</span>}
      </div>
    </div>
  );
};

export default BlogAuthorInfo;
