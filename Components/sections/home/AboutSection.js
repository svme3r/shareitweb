import React from "react";
import Image from "next/image";
import logo from "/public/assets/logo.png";
import Button from "../../layout/Button";

const AboutSection = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-10 flex items-center justify-center flex-col pb-12">
      <div className="w-32">
        <Image src={logo} layout="intrinsic" alt="about-logo" />
      </div>
      <div className="w-1/2 text-center">
        <h2 className="text-4xl font-bold my-3">About Us</h2>
        <div className="text-lg">
          <p>
            In life, we all have a story to tell. And whether that story is
            happy, sad, or somewhere in between, it is always worth sharing.
          </p>
          <br />
          <p>
            We&apos;re excited to announce our new &apos;Share Your Story&apos; program.
            Through this program, we are offering a reward to anyone who shares
            their story with us. Whether it&apos;s a story about a time when you
            overcame adversity or a story about a moment of joy, we want to hear
            it.
          </p>
          <br />
          <p>
            Here at Share it, we believe that stories have the power to connect
            us and make us feel more connected to the world around us.
          </p>
          <br />
          <p>But you have to post as par the standard set in each league.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
