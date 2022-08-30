import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import heroImg from "/public/assets/hero-img.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Section from "../sections/home/Section";

export default function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
        }}
        modules={[Autoplay]}
        className="bg-white dark:bg-gray-800 w-full"
      >
        <SwiperSlide>
          <Section
            isImageFirst={false}
            image={heroImg}
            heading="Give your stories the spotlight they deserve."
            buttonText="Get Started Now"
            buttonLink="/"
            paragraph="Share your story now and make it go viral on our platform."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Section
            isImageFirst={true}
            image={heroImg}
            heading="Create, Compete, Win"
            buttonText="Get Started Now"
            buttonLink="/"
            paragraph="Earn Up-votes on Share It to earn valuable rewards."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Section
            isImageFirst={false}
            image={heroImg}
            heading="Be a Part of the Storytelling Community"
            buttonText="Get Started Now"
            buttonLink="/"
            paragraph="Share-it is a robust storytelling platform that helps you connect with other storytellers and create beautiful, original content."
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
