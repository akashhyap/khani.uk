"use client"
import { useEffect, useState, useRef } from "react";
// import Link from "next/link";
import { Link, animateScroll } from "react-scroll";

function useHeadings() {
  const [headings, setHeadings] = useState([]);
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll("h2:not([class^='exclude-index'])")
    ).map((element) => element.textContent);
    setHeadings(elements);
  }, []);
  return headings;
}

const TableOfContent = () => {
  const headings = useHeadings();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const winWidth = window.screen.width > 768;
    if (winWidth) {
      setIsDesktop(true);
    }
  }, []);

  return (
    <>
      {isDesktop ? (
        <div className="table-of-content w-3/12 pt-4">
          <nav className="sticky top-5 bg-slate-100 px-6 py-8 rounded-2xl">
            <p className="text-3xl font-bold mb-4">INDICE</p>
            <ul className="list-decimal pl-4">
              {headings.map((heading) => {
                const ID = heading.toLowerCase().split(" ").join("-");
                return (
                  <li key={heading} className="mb-1">
                    <Link
                      to={ID}
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="index-link cursor-pointer transition-colors ease-in-out delay-100 hover:text-poppy-900"
                    >
                      {heading}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      ) : undefined}
    </>
  );
};
export default TableOfContent;
