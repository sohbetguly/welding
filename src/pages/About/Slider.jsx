import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "../../images/about/slider1.jpg";
import { Autoplay } from "swiper/modules";

function Slider() {
  return (
    <section className="py-10 px-5 theme-default font-theme-text bg-secondary-color text-secondary-color">
      <div className="max-w-4xl lg:max-w-6xl xl:max-w-7xl px-4 lg:px-5 mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="[&_p]:bg-secondary-color [&_strong]:font-semibold text-xs flex items-center [&_p]:me-3 [&_p]:px-3.5 [&_p]:py-1 [&_p]:border [&_p]:border-secondary-color/50 [&_p]:rounded-md [&_p]:text-secondary-color">
            <p>
              <strong>NEW</strong>
            </p>
          </div>
          <div className="font-theme-title text-secondary-marked [&_strong]:font-semibold text-xl md:text-3xl">
            <p>
              <strong>A Look at Modern Architectural Innovation</strong>
            </p>
          </div>
        </div>
        <div className="text-secondary-muted [&_strong]:font-semibold max-w-2xl text-md md:text-lg pt-4">
          <p>
            Discover sustainable design pushing boundaries in modern marvels.
          </p>
        </div>
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            modules={[Autoplay]}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1020: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
            navigation={{
              nextEl: ".next-swiper-btn",
              prevEl: ".prev-swiper-btn",
            }}
            className="mySwiper"
          >
            <SwiperSlide className="mt-12 cursor-pointer swiper-slide group/link rounded-lg h-auto overflow-hidden">
              <div className="absolute z-10 w-full h-full"></div>
              <img
                src={slider1}
                className="object-cover duration-300 group-hover/link:scale-[1.03] h-full"
              />
            </SwiperSlide>
            <SwiperSlide className="mt-12 cursor-pointer swiper-slide group/link rounded-lg h-auto overflow-hidden">
              <div className="absolute z-10 w-full h-full"></div>
              <img
                src={slider1}
                className="object-cover duration-300 group-hover/link:scale-[1.03] h-full"
              />
            </SwiperSlide>
            <SwiperSlide className="mt-12 cursor-pointer swiper-slide group/link rounded-lg h-auto overflow-hidden">
              <div className="absolute z-10 w-full h-full"></div>
              <img
                src={slider1}
                className="object-cover duration-300 group-hover/link:scale-[1.03] h-full"
              />
            </SwiperSlide>
            <SwiperSlide className="mt-12 cursor-pointer swiper-slide group/link rounded-lg h-auto overflow-hidden">
              <div className="absolute z-10 w-full h-full"></div>
              <img
                src={slider1}
                className="object-cover duration-300 group-hover/link:scale-[1.03] h-full"
              />
            </SwiperSlide>
            <SwiperSlide className="mt-12 cursor-pointer swiper-slide group/link rounded-lg h-auto overflow-hidden">
              <div className="absolute z-10 w-full h-full"></div>
              <img
                src={slider1}
                className="object-cover duration-300 group-hover/link:scale-[1.03] h-full"
              />
            </SwiperSlide>
            <SwiperSlide className="mt-12 cursor-pointer swiper-slide group/link rounded-lg h-auto overflow-hidden">
              <div className="absolute z-10 w-full h-full"></div>
              <img
                src={slider1}
                className="object-cover duration-300 group-hover/link:scale-[1.03] h-full"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Slider;
