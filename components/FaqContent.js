import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import { Disclosure, Transition } from "@headlessui/react";
import { BiSolidChevronDown } from "react-icons/bi";
import { render } from "storyblok-rich-text-react-renderer";

const FaqContent = ({ blok, itemIdx }) => {
  // console.log(blok);
  return (
    <div {...storyblokEditable(blok)}>
      <Disclosure
        key={itemIdx}
        as="div"
        className="mt-2 border-b border-gray-200 w-full"
      >
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between items-center w-full py-2 font-medium text-left rounded-md focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
              <span>{blok.question}</span>
              <BiSolidChevronDown
                className={`${
                  open ? "transform rotate-180" : ""
                } w-5 h-5 transition-transform ease-out duration-500`}
              />
            </Disclosure.Button>
            <Transition
              show={open}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel static className="pt-4 pb-2 [&>ul]:mb-8 [&>ul]:list-disc [&>ul]:pl-4 [&>ul>li]:leading-8 [&>ol]:list-decimal [&>ol]:pl-4 [&>ol>li]:leading-8">
                {render(blok.answer)}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default FaqContent;