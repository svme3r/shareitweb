import React from "react";
import Button from "../../layout/Button";
import Image from "next/image";

const Section = ({
  isImageFirst,
  heading,
  paragraph,
  buttonText,
  buttonLink,
  image,
}) => {
  return (
    <div
    style={{ minHeight: "80vh" }}
    className={`flex flex-wrap justify-center items-center md:flex-row ${isImageFirst ? "flex-col" : "flex-col-reverse"} `}
    >
      {/* Left */}
      <div className="flex-1">
        {isImageFirst ? <ImageSection image={image} /> : <ContentSection heading={heading} paragraph={paragraph} buttonText={buttonText} buttonLink={buttonLink} />}
      </div>
      {/* Right */}
      <div className="flex-1">
        {!isImageFirst ? <ImageSection image={image} /> : <ContentSection heading={heading} paragraph={paragraph} buttonText={buttonText} buttonLink={buttonLink} />}
      </div>
    </div>
  );
};

const ContentSection = ({
  heading,
  paragraph,
  buttonText = "Good",
  buttonLink = "/",
}) => {
  return (
    <div className="flex flex-col md:w-2/3 w-96 text-center md:text-left p-8 md:ml-28">
      <h1 className="text-5xl font-bold">{heading}</h1>
      <p className="my-4 text-gray-700 dark:text-gray-400">{paragraph}</p>
      <Button to={buttonLink} text={buttonText} classes="md:w-1/2" />
    </div>
  );
};

const ImageSection = ({ image }) => {
  return (
    <div className="flex justify-center">
      <div className="md:w-1/2 w-full">
        <Image src={image} layout="intrinsic" />
      </div>
    </div>
  );
};

export default Section;
