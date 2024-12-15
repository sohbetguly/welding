import * as basicLightbox from "basiclightbox";
import "basiclightbox/dist/basicLightbox.min.css";
import React from "react";

import { useTranslation } from "react-i18next";
import work1 from "../../images/services/pak ussa (1).jpg";
import work2 from "../../images/services/pak ussa (10).jpg";
import work3 from "../../images/services/pak ussa (22).jpg";
import work4 from "../../images/services/pak ussa (27).jpg";
import work5 from "../../images/services/pak ussa (3).jpg";
import work6 from "../../images/services/pak ussa (30).jpg";
import work7 from "../../images/services/pak ussa (32).jpg";
import work8 from "../../images/services/pak ussa (33).jpg";
import {
  default as work10,
  default as work9,
} from "../../images/services/pak ussa (34).jpg";
import work11 from "../../images/services/pak ussa (35).jpg";
import work12 from "../../images/services/pak ussa (38).jpg";
import work13 from "../../images/services/pak ussa (39).jpg";
import work14 from "../../images/services/pak ussa (4).jpg";
import work15 from "../../images/services/pak ussa (40).jpg";
import work16 from "../../images/services/pak ussa (41).jpg";
import work17 from "../../images/services/pak ussa (42).jpg";
import work18 from "../../images/services/pak ussa (9).jpg";

const images = [
  {
    name: "00",
    img: work1,
  },
  {
    name: "01",
    img: work2,
  },
  {
    name: "02",
    img: work3,
  },
  {
    name: "03",
    img: work4,
  },
  {
    name: "04",
    img: work5,
  },
  {
    name: "05",
    img: work6,
  },
  {
    name: "06",
    img: work7,
  },
  {
    name: "07",
    img: work8,
  },
  {
    name: "08",
    img: work9,
  },
  {
    name: "09",
    img: work10,
  },
  {
    name: "10",
    img: work11,
  },
  {
    name: "11",
    img: work12,
  },
  {
    name: "12",
    img: work13,
  },
  {
    name: "13",
    img: work14,
  },
  {
    name: "14",
    img: work15,
  },
  {
    name: "15",
    img: work16,
  },
  {
    name: "16",
    img: work17,
  },
  {
    name: "17",
    img: work18,
  },
];

const showImage = (e) => {
  const image = e.currentTarget.querySelector("img");
  const instance = basicLightbox.create(image.outerHTML);
  instance.show();
};

function Index() {
  const { t } = useTranslation();
  return (
    <div>
      <section className="theme-gold font-default shape-rounded left theme-classes group/alignment px-9 overflow-hidden">
        <div className="max-width-md padding-top-full padding-bottom-zero mx-auto">
          <div className="flex flex-col text-alignment mb-6">
            <div
              className="animate-element ql-content-styles margin-bottom font-theme-title"
              animation-type=""
              animation-delay=""
            >
              <h3 className="text-5xl md:text-7xl text-secondary-marked">
                {t("ourWork.title")}
              </h3>
            </div>

            <div
              className="animate-element ql-content-styles margin-bottom max-width-sm margin-alignment"
              animation-type=""
              animation-delay=""
            >
              <p className="text-2xl">{t("ourWork.subtitle")}</p>
            </div>
          </div>

          <div animation-type="" animation-delay="" className="animate-element">
            <ul className="flex flex-wrap justify-alignment gap-3">
              {images.map(({ img, name }) => {
                return (
                  <li
                    onClick={showImage}
                    key={name}
                    className="w-full md:w-[calc(50%-8px)] lg:w-[calc(33.333333333333336%-8px)]"
                  >
                    <img
                      alt="our work"
                      className="object-cover w-full h-72 hover:shadow-3xl duration-500 ease-in rounded-shape"
                      src={img}
                    />

                    <div className="ql-content-styles hidden font-theme-label uppercase text-end pt-1 pe-3">
                      <p>{name}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Index;
