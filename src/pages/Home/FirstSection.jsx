import React from "react";
import HeaderImage1 from "../../images/home/home.jpg";

function FirstSection() {
  return (
    <section
      id="Header-203"
      className="font-default shape-rounded left vertical-bottom theme-classes relative translate-y-0 flex flex-col group/alignment min-h-[450px]"
    >
      <img
        className="animate-element fixed top-0 left-0 h-full w-full object-top object-cover z-[-2]"
        src={HeaderImage1}
        alt="Header Background"
      />

      <div className="flex text-white grow items-end justify-center vertical-alignment bg-gradient-to-bl from-transparent via-transparent to-gray-900/80 px-9">
        <div className="absolute combined-shadow w-full h-full bg-gradient-to-b from-gray-900/40 via-transparent to-transparent z-[-1]"></div>
        <div className="custom-max-width mx-auto w-full text-theme-white padding-top-full padding-bottom-full">
          <div className="max-w-7xl custom-width mx-auto">
            <div className="max-w-2xl">
              <div className="margin-bottom-heading">
                <div className="animate-element uppercase text-5xl ql-content-styles text-theme-on-image font-theme-title group-[.center]/alignment:text-center group-[.right]/alignment:text-start margin-bottom">
                  <p>Strong and Stylish Metalwork</p>
                </div>

                <div className="animate-element text-2xl ql-content-styles text-theme-on-image group-[.center]/alignment:text-center group-[.right]/alignment:text-start">
                  <p>Handcrafted Iron Products Tailored to Your Needs</p>
                </div>
              </div>

              <div className="font-default shape-rounded font-theme-title medium-button animate-element group-[.center]/alignment:justify-center group-[.right]/alignment:justify-start rounded-shape flex gap-custom">
                <a
                  className="border mt-8 tertiary-regular-btn rounded-btn border-2 group/btn text-sm sm:text-base font-semibold uppercase py-2 px-4 duration-200 inline-flex items-center justify-center"
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
    </section>
  );
}

export default FirstSection;
