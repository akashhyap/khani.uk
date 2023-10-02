import { storyblokEditable } from "@storyblok/react";
import React from "react";

const TitleH1 = ({ blok }) => {
  const textColor = {
    color: blok?.textColor?.color || "#000",
  };

  return (
    <h1
      className="h1_style"
      style={textColor}
      {...storyblokEditable(blok)}
    >
      {blok.text}
    </h1>
  );
};

export default TitleH1;
