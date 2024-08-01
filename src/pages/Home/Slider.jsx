import * as basicLightbox from "basiclightbox";
import "basiclightbox/dist/basicLightbox.min.css";
import React from "react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import slider1 from "../../images/home/mini-slider/slider1.webp"
import slider2 from "../../images/home/mini-slider/slider2.webp"
import slider3 from "../../images/home/mini-slider/slider3.webp"
import slider4 from "../../images/home/mini-slider/slider4.webp"
import slider5 from "../../images/home/mini-slider/slider5.webp"
import slider6 from "../../images/home/mini-slider/slider6.webp"
import slider7 from "../../images/home/mini-slider/slider7.webp"
import slider8 from "../../images/home/mini-slider/slider8.webp"

function Slider() {
  const showImage = (e) => {
    console.log(e.currentTarget)
    const image = e.currentTarget.querySelector("img");
    const instance = basicLightbox.create(image.outerHTML);
    instance.show();
  };

  return (
    <section id="home-slider-2" className="py-14 px-5 theme-default font-theme-text bg-secondary-color text-secondary-color">
      <div className="max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4 lg:px-5">
        <div className="flex flex-wrap items-center gap-3">
          <div className="bg-secondary-color [&_strong]:font-semibold text-xs flex items-center px-3.5 py-1 border border-secondary-color/50 rounded-md text-secondary-color">
            <p>
              <strong>NEW</strong>
            </p>
          </div>
          <div className="font-theme-title text-secondary-marked [&_strong]:font-semibold text-xl md:text-3xl">
            <p>
              <strong>Crafting Digital Worlds with Artistic Precision</strong>
            </p>
          </div>
        </div>
        <div className="text-secondary-muted [&_strong]:font-semibold max-w-2xl text-md md:text-lg pt-4">
          <p>
            Where Design Innovation Redefines Online Expression with
            Unparalleled Attention to Detail and Creative Ingenuity
          </p>
        </div>
        <div>
          <div className="w-full flex justify-end items-center top-0 md:right-0 mt-5 sm:mt-0 mb-6">
            <button className="prev-swiper-btn text-secondary-color border border-secondary-color/50 hover:bg-secondary-color/50 duration-150 active:bg-secondary-gray/30 bg-secondary-gray text-secondary-btn-color me-3 rounded-full py-2 px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="size-5 pe-[1px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                ></path>
              </svg>
            </button>
            <button className="next-swiper-btn text-secondary-color border border-secondary-color/50 hover:bg-secondary-color/50 duration-150 active:bg-secondary-gray/30 bg-secondary-gray text-secondary-btn-color rounded-full py-2 px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="size-5 ps-[2px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                ></path>
              </svg>
            </button>
          </div>
          <Swiper
            navigation={{
              nextEl: ".next-swiper-btn",
              prevEl: ".prev-swiper-btn",
            }}
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
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            speed={1000}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide
              onClick={showImage}
              className="h-auto overflow-hidden cursor-pointer"
            >
              <div className="flex justify-center h-full">
                <div className="absolute bottom-0 z-10 w-full h-full"></div>
                <img
                  className="h-full relative max-h-96"
                  src={slider1}
                  alt=""
                />
                <p className="absolute bg-gray-900/60 inline-flex items-center bottom-0 z-10 text-secondary-white rounded px-4 text-center font-semibold my-4">
                  Gapy 1
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide
              onClick={showImage}
              className="h-auto overflow-hidden cursor-pointer"
            >
              <div className="flex justify-center h-full">
                <div className="absolute bottom-0 z-10 w-full h-full"></div>
                <img
                  className="h-full relative max-h-96"
                  src={slider2}
                  alt=""
                />
                <p className="absolute bg-gray-900/60 inline-flex items-center bottom-0 z-10 text-secondary-white rounded px-4 text-center font-semibold my-4">
                  Gapy 2
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide
              onClick={showImage}
              className="h-auto overflow-hidden cursor-pointer"
            >
              <div className="flex justify-center h-full">
                <div className="absolute bottom-0 z-10 w-full h-full"></div>
                <img
                  className="h-full relative max-h-96"
                  src={slider3}
                  alt=""
                />
                <p className="absolute bg-gray-900/60 inline-flex items-center bottom-0 z-10 text-secondary-white rounded px-4 text-center font-semibold my-4">
                Gapy 3
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide
              onClick={showImage}
              className="h-auto overflow-hidden cursor-pointer"
            >
              <div className="flex justify-center h-full">
                <div className="absolute bottom-0 z-10 w-full h-full"></div>
                <img
                  className="h-full relative max-h-96"
                  src={slider4}
                  alt=""
                />
                <p className="absolute bg-gray-900/60 inline-flex items-center bottom-0 z-10 text-secondary-white rounded px-4 text-center font-semibold my-4">
                Gapy 6
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide
              onClick={showImage}
              className="h-auto overflow-hidden cursor-pointer"
            >
              <div className="flex justify-center h-full">
                <div className="absolute bottom-0 z-10 w-full h-full"></div>
                <img
                  className="h-full relative max-h-96"
                  src={slider5}
                  alt=""
                />
                <p className="absolute bg-gray-900/60 inline-flex items-center bottom-0 z-10 text-secondary-white rounded px-4 text-center font-semibold my-4">
                Gapy 6
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide
              onClick={showImage}
              className="h-auto overflow-hidden cursor-pointer"
            >
              <div className="flex justify-center h-full">
                <div className="absolute bottom-0 z-10 w-full h-full"></div>
                <img
                  className="h-full relative max-h-96"
                  src={slider6}
                  alt=""
                />
                <p className="absolute bg-gray-900/60 inline-flex items-center bottom-0 z-10 text-secondary-white rounded px-4 text-center font-semibold my-4">
                Gapy 7
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide
              onClick={showImage}
              className="h-auto overflow-hidden cursor-pointer"
            >
              <div className="flex justify-center h-full">
                <div className="absolute bottom-0 z-10 w-full h-full"></div>
                <img
                  className="h-full relative max-h-96"
                  src={slider7}
                  alt=""
                />
                <p className="absolute bg-gray-900/60 inline-flex items-center bottom-0 z-10 text-secondary-white rounded px-4 text-center font-semibold my-4">
                Gapy 8
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide
              onClick={showImage}
              className="h-auto overflow-hidden cursor-pointer"
            >
              <div className="flex justify-center h-full">
                <div className="absolute bottom-0 z-10 w-full h-full"></div>
                <img
                  className="h-full relative max-h-96"
                  src={slider8}
                  alt=""
                />
                <p className="absolute bg-gray-900/60 inline-flex items-center bottom-0 z-10 text-secondary-white rounded px-4 text-center font-semibold my-4">
                  Gapy 8
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Slider;
