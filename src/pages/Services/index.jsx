import { jarallax } from "jarallax";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import HeaderImage2 from "../../images/home/slider-2.webp";
import image from "../../images/services/pak ussa (22).png";
import Feature from "../About/Feature";

function Services() {
  useEffect(() => {
    jarallax(document.querySelectorAll(".jarallax"), {
      speed: 0.2,
    });
  }, []);

  const { t } = useTranslation();

  return (
    <div>
      <section
        data-jarallax=""
        className="secondary-default font-default shape-rounded left secondary-classes relative flex flex-col group/alignment jarallax min-h-[400px]"
        data-controller="jarallax"
      >
        <img
          className="animate-element jarallax-img absolute h-full w-full object-cover z-[-2]"
          src={HeaderImage2}
          alt="welding"
        />

        <div className="flex grow items-end justify-center bg-gradient-to-bl from-transparent via-transparent to-gray-900/80 px-9">
          <div className="absolute combined-shadow w-full h-full bg-gradient-to-b from-gray-900/40 via-transparent to-transparent z-[-1]"></div>
          <div className="max-width-md rounded-shape w-full text-secondary-white text-alignment padding-top-full padding-bottom-full">
            <div className="animate-element ql-content-styles text-5xl text-secondary-on-image font-secondary-title margin-bottom">
              <p>{t("services.header.title")}</p>
            </div>
            <div className="animate-element ql-content-styles text-2xl text-secondary-on-image max-width-sm margin-bottom margin-alignment">
              <p>{t("services.header.subtitle")}</p>
            </div>
            <Link
              className="rounded-btn bg-secondary-white text-secondary-dark hover:bg-secondary-btn-color hover:text-secondary-btn-color text-xl border-transparent flex items-center justify-center duration-300 group/btn border-2 font-semibold text-center inline-block w-full md:w-6/12 md:max-w-52 py-2 px-4"
              to="/contact"
            >
              {t("services.header.link")}
            </Link>
          </div>
        </div>
      </section>
      <section className="theme-gold font-default shape-rounded center theme-classes px-9 group/alignment">
        <div className="max-width-4xl padding-top-full padding-bottom-full mx-auto">
          <div className="text-alignment">
            <div
              animation-type=""
              animation-delay=""
              className="animate-element ql-content-styles only:m-0 last:m-0 margin-bottom font-theme-title duration-200"
            >
              <h4 className="text-4xl uppercase font-semibold">
                {t("services.offer.title")}
              </h4>
            </div>

            <div
              animation-type=""
              animation-delay=""
              className="animate-element margin-bottom only:mb-0 last:mb-0"
            >
              <div className="ql-content-styles max-w-2xl dynamic-font-size-md opacity-70 max-width-sm">
                <p className="text-xl">{t("services.offer.subtitle")}</p>
              </div>
            </div>

            <div
              animation-type=""
              animation-delay=""
              className="animate-element flex flex-wrap justify-alignment gap-9 mt-12"
            >
              <div className="w-full md:w-[calc(50%-18px)]">
                <div className="flex group-[.right]/alignment:flex-row-reverse group-[.right]/alignment:justify-start items-center text-start group-[.right]/alignment:text-end pb-4">
                  <div>
                    <div className="ql-content-styles font-theme-title pt-1">
                      <h6>
                        <strong>{t("services.offer.features.title1")}</strong>
                      </h6>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="ql-content-styles opacity-90 font-theme-text w-full md:max-w-[40vw] lg:max-w-[30vw] group-[.right]/alignment:max-w-full text-start group-[.right]/alignment:text-end">
                    {t("services.offer.features.subtitle1")}
                  </div>
                </div>
              </div>

              <div className="w-full md:w-[calc(50%-18px)]">
                <div className="flex group-[.right]/alignment:flex-row-reverse group-[.right]/alignment:justify-start items-center text-start group-[.right]/alignment:text-end pb-4">
                  <div>
                    <div className="ql-content-styles font-theme-title pt-1">
                      <h6>
                        <strong>{t("services.offer.features.title2")}</strong>
                      </h6>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="ql-content-styles opacity-90 font-theme-text w-full md:max-w-[40vw] lg:max-w-[30vw] group-[.right]/alignment:max-w-full text-start group-[.right]/alignment:text-end">
                    {t("services.offer.features.subtitle2")}{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="font-theme-text pb-8 theme-gold text-start font-roboto py-10 px-5 bg-secondary-gray text-secondary-color">
        <div className="max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4 lg:px-5">
          <div className="flex flex-col-reverse md:flex-row items-center">
            <div className="pt-5 md:me-8 w-full md:w-6/12">
              <img
                className="object-cover rounded-lg h-auto"
                src={image}
                alt="welding"
              />
            </div>
            <div className="w-full mb-4 md:w-6/12">
              <div className="ps-1 mt-6 text-md py-1 text-secondary-color">
                <p className="uppercase">{t("services.header2.label")}</p>
              </div>
              <div className="font-theme-title theme-gold text-secondary-marked [&amp;_strong]:font-semibold pt-3 pb-5 text-4xl lg:text-5xl">
                <p>{t("services.header2.title")}</p>
              </div>
              <div className="text-md max-w-[400px] lg:text-[18px] text-secondary-muted max-w-[500px]">
                <p>{t("services.header2.subtitle")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Feature />
    </div>
  );
}

export default Services;
