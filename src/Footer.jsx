import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Footer() {
  const { t } = useTranslation();

  const items = [
    { name: t("navbar.navItem2"), link: "/about" },
    { name: t("navbar.navItem3"), link: "/services" },
    { name: t("navbar.navItem4"), link: "/our-work" },
    { name: t("navbar.navItem5"), link: "/contact" },
  ];

  return (
    <section className="theme-default border-t py-14 px-5 font-theme-text bg-secondary-color text-secondary-color">
      <div className="max-w-6xl mx-auto px-4 lg:px-5">
        <div className="flex flex-col sm:flex-row gap-x-6 gap-y-8">
          <div className="min-w-[100px] md:w-[25%] text-3xl uppercase shrink-0">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#f65701"
              className="w-[150px] -ms-10"
              viewBox="0 0 841.89 595.28"
            >
              <g>
                <polygon
                  points="228.99,174.83 228.7,396.89 284.76,430.49 285.1,206.98 440.84,119.85 595.43,206.94 597.4,428.31 655,397.44 
		651.68,171.01 444.96,51.32 	"
                />
                <polygon
                  points="413.96,194.81 414.87,450.64 440.77,465.94 466.5,452.55 466.63,192.81 540.52,237.94 542.13,457.98 
		440.59,517.86 338.7,458.63 340.67,237.82 	"
                />
              </g>
            </svg>
          </div>
          <div className="hidden md:block w-[25%]">
            <div className="text-xl font-semibold mb-4">
              {t("footer.pages")}
            </div>
            <ul className="flex flex-col justify-center gap-2 font-normal">
              {items.map((item) => {
                return (
                  <li key={item.link}>
                    <Link
                      onClick={() => window.scrollTo(0, 0)}
                      className="text-secondary-link hover:text-secondary-link-hover duration-200"
                      to={item.link}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="md:w-[50%]">
            <div className="text-xl font-semibold mb-4">
              {t("footer.addressTitle")}
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 me-1.5 mt-0.5 inline-block shrink-0"
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
              {t("footer.address")}
            </div>
            <div className="text-xl font-semibold mt-5">
              {t("footer.contact")}
            </div>
            <div className="mt-3">
              <div className="mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 me-1.5 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                {t("footer.email")}:{" "}
                <a href="mailto:pakussa@sanly.tm">pakussa@sanly.tm</a>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 -mt-0.5 me-1.5 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                {t("footer.phone")}:{" "}
                <a href="tel:+99364177660">+993 64177660</a>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-3 text-center">
          <div className="font-theme-title text-md mx-auto sm:mx-0 mt-8">
            ©2024{" "}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
