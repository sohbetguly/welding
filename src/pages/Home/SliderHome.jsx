import React from "react";
import HeaderImage1 from "../../images/home/slider-1.webp";
import HeaderImage2 from "../../images/home/slider-2.webp";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

function SliderHome() {
  return (
    <section className="theme-gold font-theme-text text-secondary-color swiper wpSwiper group/slider">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        loop={true}
        effect="fade"
        autoplay={{ delay: 2500 }}
        speed={3000}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
      >
        <SwiperSlide
          style={{ backgroundImage: `url(${HeaderImage1})` }}
          className="px-5 swiper-slide bg-cover bg-center bg-zinc-700"
        >
          <div class="max-w-6xl mx-auto h-full flex items-end">
            <div class="px-4 lg:px-5 py-8 md:py-10 lg:py-14">
              <div class="flex justify-start pt-28 sm:pt-32 md:pt-36 lg:pt-48">
                <div class="rounded-btn w-full sm:max-w-[500px] text-tertiary-color md:bg-tertiary-marked/50 py-6 sm:py-8 sm:px-10">
                  <div class="text-base md:text-lg text-shadow-sm [&_strong]:font-semibold">
                    <p>Optimizing Websites for Faster Loading Times</p>
                  </div>
                  <div class="font-theme-title text-3xl lg:text-[44px]/10 text-shadow-sm uppercase font-light [&_strong]:font-semibold mt-2">
                    <p>Speed and Performance</p>
                  </div>
                  <div class="flex items-center space-x-3 mt-4">
                    <a
                      class="border tertiary-regular-btn rounded-btn border-2 group/btn text-sm sm:text-base font-semibold uppercase py-2 px-4 duration-200 inline-flex items-center justify-center"
                      href="get-started"
                    >
                      <span class="group-[.tertiary-link-btn]/btn:duration-200 leading-6 group-[.tertiary-link-btn]/btn:border-b-2 group-[.tertiary-link-btn]/btn:text-[16px] border-transparent group-hover/btn:border-tertiary-text">
                        Get Started
                      </span>
                      <svg
                        class="size-3 ms-1 hidden group-[.tertiary-link-btn]/btn:inline-block"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="3"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{ backgroundImage: `url(${HeaderImage2})` }}
          className="px-5 swiper-slide bg-cover bg-center bg-zinc-700"
        >
          <div class="max-w-6xl mx-auto h-full flex justify-end items-end">
            <div class="px-4 lg:px-5 py-8 md:py-10 lg:py-14">
              <div class="flex justify-start pt-28 sm:pt-32 md:pt-36 lg:pt-48">
                <div class="rounded-btn w-full sm:max-w-[500px] text-tertiary-color md:bg-tertiary-marked/50 py-6 sm:py-8 sm:px-10">
                  <div class="text-base md:text-lg text-shadow-sm [&_strong]:font-semibold">
                    <p>Optimizing Websites for Faster Loading Times</p>
                  </div>
                  <div class="font-theme-title text-3xl lg:text-[44px]/10 text-shadow-sm uppercase font-light [&_strong]:font-semibold mt-2">
                    <p>Speed and Performance</p>
                  </div>
                  <div class="flex items-center space-x-3 mt-4">
                    <a
                      class="border tertiary-regular-btn rounded-btn border-2 group/btn text-sm sm:text-base font-semibold uppercase py-2 px-4 duration-200 inline-flex items-center justify-center"
                      href="get-started"
                    >
                      <span class="group-[.tertiary-link-btn]/btn:duration-200 leading-6 group-[.tertiary-link-btn]/btn:border-b-2 group-[.tertiary-link-btn]/btn:text-[16px] border-transparent group-hover/btn:border-tertiary-text">
                        Get Started
                      </span>
                      <svg
                        class="size-3 ms-1 hidden group-[.tertiary-link-btn]/btn:inline-block"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="3"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div>
        <div className="swiper-pagination max-w-[26px] md:max-w-[30px] bg-secondary-white py-4 !bottom-auto pe-1 rounded-full swiper-pagination-vertical [&_>span]:bg-secondary-btn-color group-[.theme-default]/slider:[&__span]:bg-[#cac7b8] [&_>span]:border-tertiary-color [&_>span]:border-[1px] [&_>span]:shadow-2xl flex justify-center flex-col items-end space-y-2 *:size-2.5 md:*:size-3.5 swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal swiper-pagination-lock"></div>
      </div>
    </section>
  );
}

export default SliderHome;
