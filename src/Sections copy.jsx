import React from "react";
import image1 from "./images/welding-1.png";
import image2 from "./images/welding-2.jpg";
import Section3 from "./Section3";

function Sections() {
  return (
    <div>
      <section className="font-theme-text text-secondary-gray">
        <div
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.25)), url(${image1})`,
            backgroundSize: "cover",
          }}
          className="w-full mx-auto"
        >
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
          </div>
        </div>
      </section>

      <section class="font-theme-text bg-secondary-gray  text-secondary-gray py-14 px-6 sm:px-12 xl:px-0">
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 sm:grid-cols-2">
            <div class="flex justify-start">
              <img class="h-full rounded-lg w-auto object-cover" src={image2} />
            </div>
            <div class="flex items-center">
              <div class="text-left px-2 sm:px-8 text-secondary-color">
                <div class="[&_strong]:font-semibold py-4 text-secondary-muted md:py-2">
                  <p className="uppercase">Metalworking</p>
                </div>
                <div class="font-theme-title text-3xl md:text-4xl [&_strong]:font-bold border-secondary-color text-secondary-marked">
                  <p>
                    <strong>
                      High-Accuracy <br /> Welding Services
                    </strong>
                  </p>
                </div>
                <div class="mt-5">
                  <div class="text-sm text-secondary-muted">
                    <p className="max-w-[300px]">
                      Bringing extensive expertise to complex metal fabrication,
                      I excel in diverse welding techniques for precise and
                      durable results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section3 />
    </div>
  );
}

export default Sections;
