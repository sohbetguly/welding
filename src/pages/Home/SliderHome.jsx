import React from "react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import HeaderImage1 from "../../images/home/slider-1.webp";
import HeaderImage2 from "../../images/home/slider-2.webp";

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
          className="px-5 h-full swiper-slide bg-cover bg-center bg-zinc-700"
        >
          <div className="max-w-6xl mx-auto h-full flex items-end">
            <div className="px-4 lg:px-5 py-8 md:py-10 lg:py-14">
              <div className="flex justify-start pt-28 sm:pt-32 md:pt-36 lg:pt-48">
                <div className="rounded-btn w-full sm:max-w-[500px] text-tertiary-color md:bg-tertiary-marked/50 py-6 sm:py-8 sm:px-10">
                  <div className="text-base md:text-lg text-shadow-sm [&_strong]:font-semibold">
                    <p>Handcrafted Iron Products Tailored to Your Needs</p>
                  </div>
                  <div className="font-theme-title text-3xl lg:text-[44px]/10 text-shadow-sm uppercase font-light [&_strong]:font-semibold mt-2">
                    <p>Strong and Stylish Metalwork</p>
                  </div>
                  <div className="flex items-center space-x-3 mt-4">
                    <a
                      className="border tertiary-regular-btn rounded-btn border-2 group/btn text-sm sm:text-base font-semibold uppercase py-2 px-4 duration-200 inline-flex items-center justify-center"
                      href="/services"
                    >
                      <span className="group-[.tertiary-link-btn]/btn:duration-200 leading-6 group-[.tertiary-link-btn]/btn:border-b-2 group-[.tertiary-link-btn]/btn:text-[16px] border-transparent group-hover/btn:border-tertiary-text">
                        Our Services
                      </span>
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
          <div className="max-w-6xl mx-auto h-full flex justify-end items-end">
            <div className="px-4 lg:px-5 py-8 md:py-10 lg:py-14">
              <div className="flex justify-start pt-28 sm:pt-32 md:pt-36 lg:pt-48">
                <div className="rounded-btn w-full sm:max-w-[500px] text-tertiary-color md:bg-tertiary-marked/50 py-6 sm:py-8 sm:px-10">
                  <div className="text-base md:text-lg text-shadow-sm [&_strong]:font-semibold">
                    <p>From Iron Gates to Outdoor Furniture, We Build It All</p>
                  </div>
                  <div className="font-theme-title text-3xl lg:text-[44px]/10 text-shadow-sm uppercase font-light [&_strong]:font-semibold mt-2">
                    <p>Custom Metal Solutions</p>
                  </div>
                  <div className="flex items-center space-x-3 mt-4">
                    <a
                      className="border tertiary-regular-btn rounded-btn border-2 group/btn text-sm sm:text-base font-semibold uppercase py-2 px-4 duration-200 inline-flex items-center justify-center"
                      href="/about"
                    >
                      <span className="group-[.tertiary-link-btn]/btn:duration-200 leading-6 group-[.tertiary-link-btn]/btn:border-b-2 group-[.tertiary-link-btn]/btn:text-[16px] border-transparent group-hover/btn:border-tertiary-text">
                        About Us
                      </span>
                      <svg
                        className="size-3 ms-1 hidden group-[.tertiary-link-btn]/btn:inline-block"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="3"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
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
