import React, { useEffect } from "react";
import image1 from "./images/welding-1.png";
import { jarallax } from "jarallax";

function Header() {
  useEffect(() => {
    jarallax(document.querySelectorAll(".jarallax"), {
      speed: 0.2,
    });
  }, []);

  return (
    <section
      data-jarallax
      data-speed="0.2"
      className="jarallax font-theme-text text-secondary-gray"
      style={{
        backgroundImage: `url(${image1})`,
        backgroundSize: "cover",
      }}
    >
      <div className="w-full mx-auto">
        <div className="px-5">
          <div className="max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
            <div className="px-4 lg:px-5">
              <div className="py-14 md:py-24">
                <div className="max-w-xl lg:max-w-3xl">
                  <div>
                    <div className="ps-1 font-theme-title [&_strong]:font-semibold text-md py-1.5 text-secondary-white">
                      <p>INNOVATION</p>
                    </div>
                    <div className="font-theme-title [&_strong]:font-semibold text-secondary-white pt-3 text-4xl md:text-5xl">
                      <p>Welding Art</p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="text-base lg:text-lg text-secondary-white [&_strong]:font-semibold">
                      <p className="max-w-[420px]">
                        Discover the Future of Welding Through Skillful
                        Precision and Cutting-Edge Innovation{" "}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap sm:items-center">
                    <a
                      className="secondary-link-btn mt-4 rounded-btn hover:[&.secondary-outline-btn]:bg-secondary-btn-color [&.secondary-outline-btn]:bg-secondary-white border me-4 text-center group/btn py-2 border-0 px-5 duration-300"
                      href="#"
                    >
                      <span className="group-[.secondary-link-btn]/btn:duration-300 group-[.secondary-link-btn]/btn:text-secondary-white group-[.secondary-link-btn]/btn:border-b-2 group-[.secondary-link-btn]/btn:text-lg group-hover/btn:border-secondary-white font-semibold border-transparent group-hover/btn:border-secondary-text">
                        Contact us
                      </span>
                      <svg
                        className="size-3 ms-1 hidden group-[.secondary-link-btn]/btn:inline-block group-[.secondary-link-btn]/btn:text-secondary-white"
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
        </div>
      </div>
    </section>
  );
}

export default Header;
