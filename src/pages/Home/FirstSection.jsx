import React from "react";
import HeaderImage1 from "../../images/home/home.jpg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function FirstSection() {
  const { t } = useTranslation();

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
                <div className="animate-element uppercase text-3xl md:text-5xl ql-content-styles text-theme-on-image font-theme-title group-[.center]/alignment:text-center group-[.right]/alignment:text-start margin-bottom">
                  <p>{t("main_heading")}</p>
                </div>

                <div className="animate-element text-xl md:text-2xl ql-content-styles text-theme-on-image group-[.center]/alignment:text-center group-[.right]/alignment:text-start">
                  <p>{t("sub_heading")}</p>
                </div>
              </div>

              <div className="font-default shape-rounded font-theme-title medium-button animate-element group-[.center]/alignment:justify-center group-[.right]/alignment:justify-start rounded-shape flex gap-custom">
                <div className="flex flex-wrap sm:items-center">
                  <Link
                    className="secondary-link-btn mt-8 rounded-btn hover:[&amp;.secondary-outline-btn]:bg-secondary-btn-color [&amp;.secondary-outline-btn]:bg-secondary-white border me-4 text-center group/btn py-2 border-0 px-5 duration-300"
                    to="/contact"
                  >
                    <span className="group-[.secondary-link-btn]/btn:duration-300 group-[.secondary-link-btn]/btn:text-secondary-white group-[.secondary-link-btn]/btn:border-b-2 group-[.secondary-link-btn]/btn:text-lg group-hover/btn:border-secondary-white font-semibold border-transparent group-hover/btn:border-secondary-text">
                      {t("cta_button")}
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
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FirstSection;
