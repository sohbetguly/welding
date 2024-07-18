import React from "react";

function Feature() {
  return (
    <section className="theme-gold group/section font-theme-text px-5 bg-secondary-color [&_.theme-default]:bg-secondary-gray text-secondary-color">
      <div
        className="max-w-4xl lg:max-w-6xl xl:max-w-7xl py-14 mx-auto"
      >
        <div className="mx-auto max-w-3xl text-center">
          <div className="font-theme-title text-3xl md:text-4xl text-secondary-marked [&__strong]:font-semibold [&__p]:mb-3">
            <p>Trusted by Millions</p>
          </div>
          <div className="text-md md:text-lg text-secondary-color [&__strong]:font-semibold [&__p]:mb-8">
            <p>Your one-stop shop for all your web design needs</p>
          </div>
        </div>
        <ul className="flex flex-wrap justify-center gap-4 px-4 lg:px-5">
          <li className="h-auto w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333333333333336%-12px)] lg:w-[calc(25%-13px)] rounded-btn shadow border border-tertiary-color/20 bg-tertiary-color">
            <div className="flex flex-col justify-center items-center text-tertiary-color text-center p-8">
              <div className="mb-2 text-tertiary-marked dark:text-violet-60 text-2xl md:text-3xl lg:text-4xl [&__strong]:font-semibold">
                <p>2K+</p>
              </div>
              <div className="mb-0 leading-5 text-sm lg:text-base [&__strong]:font-semibold">
                <p>Sites Created Per Day</p>
              </div>
            </div>
          </li>
          <li className="h-auto w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333333333333336%-12px)] lg:w-[calc(25%-13px)] rounded-btn shadow border border-tertiary-color/20 bg-tertiary-color">
            <div className="flex flex-col justify-center items-center text-tertiary-color text-center p-8">
              <div className="mb-2 text-tertiary-marked dark:text-violet-60 text-2xl md:text-3xl lg:text-4xl [&__strong]:font-semibold">
                <p>100K+</p>
              </div>
              <div className="mb-0 leading-5 text-sm lg:text-base [&__strong]:font-semibold">
                <p>Users Worldwide</p>
              </div>
            </div>
          </li>
          <li className="h-auto w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333333333333336%-12px)] lg:w-[calc(25%-13px)] rounded-btn shadow border border-tertiary-color/20 bg-tertiary-color">
            <div className="flex flex-col justify-center items-center text-tertiary-color text-center p-8">
              <div className="mb-2 text-tertiary-marked dark:text-violet-60 text-2xl md:text-3xl lg:text-4xl [&__strong]:font-semibold">
                <p>24/7</p>
              </div>
              <div className="mb-0 leading-5 text-sm lg:text-base [&__strong]:font-semibold">
                <p>Get Live Support</p>
              </div>
            </div>
          </li>
          <li className="h-auto w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333333333333336%-12px)] lg:w-[calc(25%-13px)] rounded-btn shadow border border-tertiary-color/20 bg-tertiary-color">
            <div className="flex flex-col justify-center items-center text-tertiary-color text-center p-8">
              <div className="mb-2 text-tertiary-marked dark:text-violet-60 text-2xl md:text-3xl lg:text-4xl [&__strong]:font-semibold">
                <p>10+</p>
              </div>
              <div className="mb-0 leading-5 text-sm lg:text-base [&__strong]:font-semibold">
                <p>Years of Dedication</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Feature;
