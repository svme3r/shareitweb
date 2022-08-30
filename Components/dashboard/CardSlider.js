import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Card from "./Card";
import "swiper/css";
import Link from "next/link";

export default function CardSlider({ leagues }) {
  
  return (
    <>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={false}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {leagues?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Link href={"/dashboard/league/" + item._id}>
                <a>
                  <Card image={item.thumbnail} />
                </a>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
