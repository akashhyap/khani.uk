"use client"
import { render } from "storyblok-rich-text-react-renderer";
import { useEffect, useState } from "react";
import TableOfContent from "./TableOfContent";

function useHeadings() {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2")).map(
      (element) => {
        // console.log("element", element.textContent);
        const ID = element.textContent.toLowerCase().split(" ").join("-");
        return element.setAttribute("id", ID);
      }
    );
    setHeadings(elements);
  }, []);
  return headings;
}

const Content = ({ blok }) => {
  // console.log("container ==>", blok);
  useHeadings();
  return (
      <main className="article-content text-md md:text-lg pb-10 px-7 [&>h2]:text-2xl sm:[&>h2]:text-4xl lg:[&>h2]:text-4xl [&>h2]:font-semibold [&>h2]:py-4 [&>p>img]:rounded-2xl [&>p]:text-lg [&>p]:py-4 [&>p]:leading-8 [&>h3]:text-3xl [&>h3]:font-semibold [&>ul]:list-disc [&>ul]:pl-4 [&>ul>li]:leading-8 [&>ol]:list-decimal [&>ol]:pl-4 [&>ol>li]:leading-8">
        {render(blok.content)}
      </main>
  );
};
export default Content;
