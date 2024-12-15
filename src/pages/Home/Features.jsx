import React from "react";
import { useTranslation } from "react-i18next";
import image from "../../images/home/feature/1.png";

function Features() {
  const { t } = useTranslation();

  return (
    <section
      id="Feature-114"
      className="font-default shape-rounded center vertical-bottom theme-classes group/alignment px-9"
    >
      <div className="custom-max-width padding-top-full padding-bottom-full mx-auto">
        <div className="@container max-w-7xl custom-width @container count-feature-4 margin-alignment mx-auto">
          <div className="max-w-2xl title-alignment px-2">
            <div className="animate-element text-3xl md:text-4xl ql-content-styles margin-bottom font-theme-title">
              <p>{t("features.main_title")}</p>
            </div>
            <div className="animate-element opacity-80 ql-content-styles margin-bottom margin-alignment">
              <p>{t("features.main_subtitle")}</p>
              <br />
            </div>
          </div>

          <ul className="detail-count-5 font-default shape-rounded detail-count-5 animate-element flex flex-wrap only:mb-0 last:mb-0 gap-4">
            {t("features.items", { returnObjects: true }).map(
              (feature, index) => (
                <li
                  key={index}
                  className="h-auto w-full bg-theme-card rounded-shape border border-theme-color/15 text-theme-color @2xl:w-[calc(50%-12px)] @5xl:w-[calc(25%-13px)]"
                >
                  <div className="flex flex-col p-6 h-full">
                    <div className="mt-2 mb-4 space-y-3">
                      <img
                        className="object-contain h-[40px]"
                        src={image}
                        alt={feature.title}
                      />
                      <div className="ql-content-styles font-theme-title">
                        <p>
                          <strong>{feature.title}</strong>
                        </p>
                      </div>
                      <div className="ql-content-styles font-theme-text">
                        <p>{feature.description}</p>
                      </div>
                    </div>
                  </div>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Features;
