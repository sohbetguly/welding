import React from "react";
import { useTranslation } from "react-i18next";

function Content() {
  const { t } = useTranslation();

  return (
    <section className="theme-default font-theme-text py-32 pb-10 px-5 bg-tertiary-color text-tertiary-color swiper-backface-hidden">
      <div className="max-w-4xl mx-auto px-4 lg:px-5 ">
        <div>
          <div className="ww-content-5 [&_p]:text-base">
            <h1>
              <strong>{t("aboutContent.title")}</strong>
            </h1>
            <p>{t("aboutContent.text1")}</p>
            <p className="mb-8">{t("aboutContent.text2")}</p>
            <h1 className="mb-5">
              <strong>{t("aboutContent.listMainTitle")}</strong>
            </h1>

            <ul className="flex list-disc flex-col gap-5">
              <li>
                <p>
                  <span className="font-bold">
                    {t("aboutContent.listTitle1")}
                  </span>{" "}
                  {t("aboutContent.listText1")}
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">
                    {t("aboutContent.listTitle2")}
                  </span>
                  {t("aboutContent.listText2")}
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">
                    {t("aboutContent.listTitle3")}
                  </span>
                  {t("aboutContent.listText3")}
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">
                    {t("aboutContent.listTitle4")}
                  </span>
                  {t("aboutContent.listText4")}
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">
                    {t("aboutContent.listTitle5")}
                  </span>
                  {t("aboutContent.listText5")}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
