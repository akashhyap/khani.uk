"use client";
import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { StoryblokComponent } from "@storyblok/react/rsc";
import { Transition } from "@headlessui/react";
import CustomStoryblokComponent from "./StoryblokMenuComponent";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

const Config = ({ blok }) => {
  // console.log("config", blok);
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerStyle, setHeaderStyle] = useState("relative at-top my-3");
  const [lastScrollY, setLastScrollY] = useState(0);

  // Function to update the header style based on scroll position
  const scrollHeader = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY === 0) {
      setHeaderStyle("relative show_header my-3");
    } else if (currentScrollY > lastScrollY && currentScrollY > 20) {
      // Scrolling down
      setHeaderStyle("fixed hide_header");
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up
      setHeaderStyle("fixed scrolling top-3");
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);

    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  }, [lastScrollY]);
  return (
    <>
      <div
        className={`${headerStyle} header-transition w-full bg-white md:max-w-6xl mx-auto py-3 px-4 sm:px-6 lg:px-8 rounded-lg z-50`}
      >
        <div className="">
          <div className="flex items-center md:space-x-10">
            {/* Site Logo */}
            <div className="flex justify-start">
              <Link href="/" className="relative">
                <span className="sr-only">Khani</span>
                {blok?.logo && (
                  <Image
                    src={blok?.logo?.filename}
                    alt="logo"
                    width={100}
                    height={60}
                    className="object-contain object-center"
                    priority
                  />
                )}
              </Link>
            </div>
            {/* Mobile buttons */}
            <div className="flex -mr-2 -my-2 order-3">
              <button
                type="button"
                className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-black hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <span className="sr-only">Open menu</span>
                {/* Icon for menu (three horizontal lines) */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
            {/* Menu items */}
            <nav className="hidden md:flex md:flex-1 md:items-center space-x-8">
              {blok?.header_menu?.map((nestedBlok) => (
                <StoryblokComponent
                  blok={nestedBlok}
                  key={nestedBlok._uid}
                  closeMenu={() => setMenuOpen(false)}
                />
              ))}
            </nav>
            {/*Search*/}
            <div className="md:order-none order-2 ml-auto">
              <Link href="/search" aria-label="Search">
                <FaSearch />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}

      {/* Overlay Transition */}
      <Transition
        show={menuOpen}
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          className="fixed w-full h-screen inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      </Transition>
      <Transition
        show={menuOpen}
        enter="transform transition ease-in-out duration-500 sm:duration-700"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transform transition ease-in-out duration-500 sm:duration-700"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
        as={Fragment}
      >
        <div className="side_menu fixed top-0 left-0 w-[95%] h-screen bg-white overflow-y-auto z-50 shadow-lg">
          <div className="overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <Link href="/" className="relative">
                  <span className="sr-only">Khani</span>
                  {blok?.logo && (
                    <Image
                      src={blok?.logo?.filename}
                      alt="logo"
                      width={180}
                      height={150}
                      className="object-contain object-center"
                      priority
                    />
                  )}
                </Link>
              </div>
              <div className="-mr-2">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  {/* X icon for closing menu */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="px-4 pt-2 pb-3 mt-5 sm:px-3 flex flex-col">
              {blok?.header_menu?.map((nestedBlok) => {
                return (
                  <CustomStoryblokComponent
                    blok={nestedBlok}
                    key={nestedBlok._uid}
                    closeMenu={() => setMenuOpen(false)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
};

export default Config;
