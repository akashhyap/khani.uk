import React from "react";

const TitleH1 = ({ blok }) => {
  return <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight pt-5 mb-7 leading-tight lg:leading-[3.25rem]">{blok.text}</h1>;
};

export default TitleH1;
