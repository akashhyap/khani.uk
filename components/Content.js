"use client"
import { render } from "storyblok-rich-text-react-renderer";
import { useEffect, useState } from "react";
import TableOfContent from "./TableOfContent";
import { storyblokEditable } from "@storyblok/react";

function useHeadings() {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2")).map(
      (element) => {
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
      <main className="article-content text-md md:text-lg content_block" {...storyblokEditable(blok)}>
        {render(blok.content)}
      </main>
  );
};
export default Content;
