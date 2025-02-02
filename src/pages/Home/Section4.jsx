import React from "react";
import image3 from "../../images/welding-13.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Section4() {
  const { t } = useTranslation();

  return (
    <section className="font-theme-text theme-gold text-start font-roboto py-10 px-5 text-secondary-color">
      <div className="max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4 lg:px-5">
        <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-x-5">
          <div>
            <div className="ps-1 text-md py-1 text-secondary-color [&_strong]:font-semibold">
              <p className="uppercase">{t("section4.title")}</p>
            </div>
            <div className="font-theme-title theme-gold text-secondary-marked [&_strong]:font-semibold pt-3 pb-5 text-4xl lg:text-5xl">
              <p>{t("section4.subtitle")}</p>
            </div>
            <div className="text-md lg:text-[18px] text-secondary-muted [&_strong]:font-semibold max-w-[500px]">
              <p>{t("section4.description")}</p>
            </div>
            <div className="flex uppercase theme-gold items-center flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-3 pt-5">
              <Link
                onClick={() => window.scrollTo(0, 0)}
                className="btn-bouncing rounded-btn secondary-regular-btn  duration-300 group/btn border-2 font-semibold text-center inline-block w-full md:w-6/12 md:max-w-52 py-3 px-6"
                to="/contact"
              >
                <span className="group-[.secondary-link-btn]/btn:duration-300 group-[.secondary-link-btn]/btn:border-b-2 border-transparent group-hover/btn:border-secondary-text">
                  {t("section4.buttons.contactUs")}
                </span>
                <svg
                  className="size-3 ms-1 hidden group-[.secondary-link-btn]/btn:inline-block"
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
              <a
                className="rounded-btn secondary-outline-btn flex items-center justify-center duration-300 group/btn border-2 font-semibold text-center inline-block w-full md:w-6/12 md:max-w-52 py-3 px-6"
                href="tel:+99364177660"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="size-4 me-1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>

                <span className="group-[.secondary-link-btn]/btn:duration-300 group-[.secondary-link-btn]/btn:border-b-2 border-transparent group-hover/btn:border-secondary-text">
                  {t("section4.buttons.makeACall")}
                </span>
                <svg
                  className="size-3 ms-1 hidden group-[.secondary-link-btn]/btn:inline-block"
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
            <div className="flex theme-gold flex-wrap sm:flex-row  items-center gap-x-4 gap-y-3 pt-8">
              <div className="flex justify-center items-center space-x-1 lg:space-x-2 ">
                <svg
                  className="size-5 text-secondary-fill"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <g id="check-circle">
                        <path
                          id="Subtract"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM16.5303 10.0303C16.8232 9.73744 16.8232 9.26256 16.5303 8.96967C16.2374 8.67678 15.7626 8.67678 15.4697 8.96967L10.8434 13.5959C10.7458 13.6935 10.5875 13.6935 10.4899 13.5959L8.53033 11.6363C8.23744 11.3434 7.76256 11.3434 7.46967 11.6363C7.17678 11.9292 7.17678 12.4041 7.46967 12.697L9.42923 14.6566C10.1126 15.34 11.2207 15.34 11.9041 14.6566L16.5303 10.0303Z"
                          fill="currentColor"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
                <div className="text-md text-secondary-marked [&_strong]:font-semibold">
                  <p>{t("section4.features.userFriendly")}</p>
                </div>
              </div>
              <div className="flex justify-center items-center space-x-1 lg:space-x-2 ">
                <svg
                  className="size-5 text-secondary-fill"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <g id="check-circle">
                        <path
                          id="Subtract"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM16.5303 10.0303C16.8232 9.73744 16.8232 9.26256 16.5303 8.96967C16.2374 8.67678 15.7626 8.67678 15.4697 8.96967L10.8434 13.5959C10.7458 13.6935 10.5875 13.6935 10.4899 13.5959L8.53033 11.6363C8.23744 11.3434 7.76256 11.3434 7.46967 11.6363C7.17678 11.9292 7.17678 12.4041 7.46967 12.697L9.42923 14.6566C10.1126 15.34 11.2207 15.34 11.9041 14.6566L16.5303 10.0303Z"
                          fill="currentColor"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
                <div className="text-md text-secondary-marked [&_strong]:font-semibold">
                  <p>{t("section4.features.collaborative")}</p>
                </div>
              </div>
              <div className="flex justify-center items-center space-x-1 lg:space-x-2 ">
                <svg
                  className="size-5 text-secondary-fill"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <g id="check-circle">
                        <path
                          id="Subtract"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM16.5303 10.0303C16.8232 9.73744 16.8232 9.26256 16.5303 8.96967C16.2374 8.67678 15.7626 8.67678 15.4697 8.96967L10.8434 13.5959C10.7458 13.6935 10.5875 13.6935 10.4899 13.5959L8.53033 11.6363C8.23744 11.3434 7.76256 11.3434 7.46967 11.6363C7.17678 11.9292 7.17678 12.4041 7.46967 12.697L9.42923 14.6566C10.1126 15.34 11.2207 15.34 11.9041 14.6566L16.5303 10.0303Z"
                          fill="currentColor"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
                <div className="text-md text-secondary-marked [&_strong]:font-semibold">
                  <p>{t("section4.features.precisionDriven")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-5">
            <img
              className="object-cover rounded-lg h-auto"
              src={image3}
              alt="welding"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section4;
