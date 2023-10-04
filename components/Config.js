"use client";
import { Fragment, useState } from "react";
import Link from "next/link";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import { Transition } from "@headlessui/react";
import CustomStoryblokComponent from "./StoryblokMenuComponent";
import Image from "next/image";

const Config = ({ blok }) => {
  // console.log("config file", blok);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div
      className="relative bg-[#f1f1f1] border-b border-gray-200 py-2"
      {...storyblokEditable(blok)}
    >
      <div className="md:max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-3 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="relative">
              <span className="sr-only">Khani</span>
              {blok?.logo && (
                <img
                  src={blok?.logo?.filename}
                  alt="Khani logo"
                  className="h-full object-contain"
                  width={120}
                  height={80}
                />
              )}
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-black hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
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
          <nav className="hidden md:flex space-x-8">
            {blok?.header_menu?.map((nestedBlok) => (
              <StoryblokComponent
                blok={nestedBlok}
                key={nestedBlok._uid}
                closeMenu={() => setMenuOpen(false)}
              />
            ))}
          </nav>
        </div>
      </div>

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
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      </Transition>

      {/* Mobile menu */}
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
        <div className="fixed top-0 left-0 w-10/12 h-screen bg-white overflow-y-auto z-50 shadow-lg">
          <div className="overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <Link href="/">
                  <span className="sr-only">Khani</span>
                  {blok?.logo && (
                    <img
                      src={blok?.logo?.filename}
                      alt="Khani"
                      className="h-full object-cove"
                      width={180}
                      height={150}
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
    </div>
  );
};

export default Config;
