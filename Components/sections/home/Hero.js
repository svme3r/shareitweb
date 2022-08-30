import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Button from "../../layout/Button";
import { Autoplay, Pagination, Navigation } from "swiper";
import styles from "../../../styles/Home.module.css";

const Hero = () => {
  return (
    <Swiper
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className={`relative`}>
          <div className={`w-screen ${styles.hero}`}>
            <Image src={"/assets/slide1.jpg"} layout="fill" objectFit="cover" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 md:-translate-x-96 -translate-y-1/2">
            <h1 className="text-4xl font-bold text-white">
              Give your stories the spotlight they deserve.
            </h1>
            <p className="my-4 text-white">
              Share your story now and make it go viral on our platform.
            </p>
            <Button to={"/signin"} text="Get Started Now" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <div className={`w-screen ${styles.hero}`}>
            <Image src={"/assets/slide2.jpg"} layout="fill" objectFit="cover" />
          </div>
          <div className="absolute top-1/2 left-1/2  -translate-x-1/2 md:-translate-x-96 -translate-y-1/2">
            <h1 className="text-4xl font-bold text-white">
              Create, Compete, Win
            </h1>
            <p className="my-4 text-white">
              Earn Up-votes on Share It to earn valuable rewards.
            </p>
            <Button to={"/signin"} text="Get Started Now" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <div className={`w-screen ${styles.hero}`}>
            <Image src={"/assets/slide3.jpg"} layout="fill" objectFit="cover" />
          </div>
          <div className="absolute top-1/2 left-1/2  -translate-x-1/2 md:-translate-x-96  -translate-y-1/2">
            <h1 className="text-4xl font-bold text-white">
              Be a Part of the Storytelling Community
            </h1>
            <p className="my-4 text-white">
              Share-it is a robust storytelling platform that helps you connect
              with other storytellers and create beautiful, original content.
            </p>
            <Button to={"/signin"} text="Get Started Now" />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
