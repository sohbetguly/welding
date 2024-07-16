import React from "react";
import HeaderImage from "./images/welding-1.jpg";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

function SliderHome() {
  return (
    <section className="theme-gold font-theme-text text-secondary-color swiper wpSwiper group/slider">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        loop={true}
        autoplay={{ delay: 2500 }}
        speed={3000}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
      >
        <SwiperSlide
          style={{ backgroundImage: `url(${HeaderImage})` }}
          className="px-5 swiper-slide bg-cover bg-center bg-zinc-700"
        >
          <div>
            <div className="max-w-6xl mx-auto h-full">
              <div className="px-4 lg:px-5 py-8 md:py-10 lg:py-14">
                <div className="flex items-center justify-center h-[400px]">
                  <div className="rounded-btn w-full text-tertiary-white py-6 sm:py-8 px-6 sm:px-10">
                    <div className="text-shadow-sm font-theme-title text-3xl md:text-5xl text-shadow-sm text-center w-full md:max-w-[700px] mx-auto uppercase [&_strong]:font-semibold mt-2">
                      <p>The Future of Technology</p>
                    </div>
                    <div className="text-shadow-sm text-secondary-black [&_strong]:font-semibold opacity-90 mx-auto text-center max-w-2xl text-lg md:text-xl pt-4">
                      <p>How AI and Quantum Computing are Shaping Tomorrow</p>
                    </div>
                    <div className="flex items-center justify-center space-x-4 pt-8">
                      <Link
                        className="border tertiary-regular-btn theme-btn rounded-btn text-nowrap group/btn text-center duration-300 inline-block py-2.5 px-6"
                        href="/get-started"
                      >
                        <span className="group-[.tertiary-link-btn]/btn:duration-300 group-[.tertiary-link-btn]/btn:border-b-2 group-[.tertiary-link-btn]/btn:text-lg font-semibold border-transparent group-hover/btn:border-tertiary-text">
                          Get Started
                        </span>
                        <svg
                          className="size-3 ms-1 hidden group-[.tertiary-link-btn]/btn:inline-block"
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
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{ backgroundImage: `url(${HeaderImage})` }}
          className="px-5 swiper-slide bg-cover bg-center bg-zinc-700"
        >
          <div>
            <div className="max-w-6xl mx-auto h-full">
              <div className="px-4 lg:px-5 py-8 md:py-10 lg:py-14">
                <div className="flex items-center justify-center h-[400px]">
                  <div className="rounded-btn w-full text-tertiary-white py-6 sm:py-8 px-6 sm:px-10">
                    <div className="text-shadow-sm font-theme-title text-3xl md:text-5xl text-shadow-sm text-center w-full md:max-w-[700px] mx-auto uppercase [&_strong]:font-semibold mt-2">
                      <p>The Future of Technology</p>
                    </div>
                    <div className="text-shadow-sm text-secondary-black [&_strong]:font-semibold opacity-90 mx-auto text-center max-w-2xl text-lg md:text-xl pt-4">
                      <p>How AI and Quantum Computing are Shaping Tomorrow</p>
                    </div>
                    <div className="flex items-center justify-center space-x-4 pt-8">
                      <Link
                        className="border tertiary-regular-btn theme-btn rounded-btn text-nowrap group/btn text-center duration-300 inline-block py-2.5 px-6"
                        href="/get-started"
                      >
                        <span className="group-[.tertiary-link-btn]/btn:duration-300 group-[.tertiary-link-btn]/btn:border-b-2 group-[.tertiary-link-btn]/btn:text-lg font-semibold border-transparent group-hover/btn:border-tertiary-text">
                          Get Started
                        </span>
                        <svg
                          className="size-3 ms-1 hidden group-[.tertiary-link-btn]/btn:inline-block"
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
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div>
        <div class="swiper-pagination max-w-[26px] md:max-w-[30px] bg-secondary-white py-4 !bottom-auto pe-1 rounded-full swiper-pagination-vertical [&_>span]:bg-secondary-btn-color group-[.theme-default]/slider:[&__span]:bg-[#cac7b8] [&_>span]:border-tertiary-color [&_>span]:border-[1px] [&_>span]:shadow-2xl flex justify-center flex-col items-end space-y-2 *:size-2.5 md:*:size-3.5 swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal swiper-pagination-lock"></div>
      </div>
    </section>
  );
}

export default SliderHome;
