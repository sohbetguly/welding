import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../../Header";
import Content from "./Content";

function About() {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <Content />

      <section className="theme-gold font-default shape-rounded center theme-classes group/alignment px-9">
        <div className="max-width-4xl mx-auto padding-top-full padding-bottom-full">
          <div className="animate-element ql-content-styles text-4xl uppercase margin-bottom font-theme-title text-alignment">
            <p>{t("aboutInfo.title")}</p>
          </div>

          <div className="animate-element" animation-type="" animation-delay="">
            <div className="flex py-3 md:py-6 border-t border-theme-color gap-x-10 mr-0 items-center">
              <div className="ql-content-styles xs-dynamic-fs-md md:w-full max-w-24">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
              </div>
              <div className="ql-content-styles xs-dynamic-fs-md font-theme-title w-[60px] md:w-[500px] max-w-sm">
                <p>{t("aboutInfo.phone")}</p>
              </div>
              <div>
                <div className="ql-content-styles xs-dynamic-fs-md max-w-sm opacity-70">
                  <a className="" href="tel:+993616161">
                    +993 616161
                  </a>
                </div>
              </div>
            </div>

            <div className="flex py-3 md:py-6 border-t border-theme-color gap-x-10 mr-0 items-center">
              <div className="ql-content-styles xs-dynamic-fs-md md:w-full max-w-24">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div className="ql-content-styles xs-dynamic-fs-md font-theme-title w-[60px] md:w-[500px] max-w-sm">
                <p>{t("aboutInfo.email")}</p>
              </div>
              <div>
                <div className="ql-content-styles xs-dynamic-fs-md max-w-sm opacity-70">
                  <a className="" href="mailto:pakussa@sanly.tm">
                    pakussa@sanly.tm
                  </a>
                </div>
              </div>
            </div>

            <div className="flex py-3 md:py-6 border-t border-theme-color gap-x-10 mr-0 items-center">
              <div className="ql-content-styles xs-dynamic-fs-md md:w-full max-w-24">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
              </div>
              <div className="ql-content-styles xs-dynamic-fs-md font-theme-title w-[60px] md:w-[500px] max-w-sm">
                <p>{t("aboutInfo.addressTitle")}</p>
              </div>
              <div>
                <div className="ql-content-styles xs-dynamic-fs-md max-w-sm opacity-70">
                  <p>{t("aboutInfo.address")} </p>
                </div>
              </div>
            </div>
            <div className="flex py-3 md:py-6 border-t border-theme-color gap-x-10 mr-0 items-center">
              <div className="ql-content-styles xs-dynamic-fs-md md:w-full max-w-24">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <div className="ql-content-styles xs-dynamic-fs-md font-theme-title w-[60px] md:w-[500px] max-w-sm">
                <p>{t("aboutInfo.workingHoursTitle")}</p>
              </div>
              <div>
                <div className="ql-content-styles xs-dynamic-fs-md max-w-sm opacity-70">
                  <p>{t("aboutInfo.workingHours")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
