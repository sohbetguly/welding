import React, { useEffect } from "react";
import * as basicLightbox from "basiclightbox";
import "basiclightbox/dist/basicLightbox.min.css";

import work1 from "../../images/services/pak ussa (1).jpg";
import work2 from "../../images/services/pak ussa (10).jpg";
import work3 from "../../images/services/pak ussa (22).jpg";
import work4 from "../../images/services/pak ussa (27).jpg";
import work5 from "../../images/services/pak ussa (3).jpg";
import work6 from "../../images/services/pak ussa (30).jpg";
import work7 from "../../images/services/pak ussa (32).jpg";
import work8 from "../../images/services/pak ussa (33).jpg";
import work9 from "../../images/services/pak ussa (34).jpg";
import work10 from "../../images/services/pak ussa (34).jpg";
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
    name: "",
    img: work1,
  },
  {
    name: "",
    img: work2,
  },
  {
    name: "",
    img: work3,
  },
  {
    name: "",
    img: work4,
  },
  {
    name: "",
    img: work5,
  },
  {
    name: "",
    img: work6,
  },
  {
    name: "",
    img: work7,
  },
  {
    name: "",
    img: work8,
  },
  {
    name: "",
    img: work9,
  },
  {
    name: "",
    img: work10,
  },
  {
    name: "",
    img: work11,
  },
  {
    name: "",
    img: work12,
  },
  {
    name: "",
    img: work13,
  },
  {
    name: "",
    img: work14,
  },
  {
    name: "",
    img: work15,
  },
  {
    name: "",
    img: work16,
  },
  {
    name: "",
    img: work17,
  },
  {
    name: "",
    img: work18,
  },
];

const showImage = (e) => {
  const image = e.currentTarget.querySelector("img");
  const instance = basicLightbox.create(image.outerHTML);
  instance.show();
};

function Index() {
  return (
    <div>
      <section className="theme-gold font-default shape-rounded left theme-classes group/alignment px-9">
        <div className="max-width-md padding-top-full padding-bottom-zero mx-auto">
          <div className="flex flex-col text-alignment">
            <div
              className="animate-element ql-content-styles margin-bottom font-theme-title"
              animation-type=""
              animation-delay=""
            >
              <h3 className="text-7xl text-secondary-marked">Our Work</h3>
            </div>

            <div
              className="animate-element ql-content-styles margin-bottom max-width-sm margin-alignment"
              animation-type=""
              animation-delay=""
            >
              <p className="text-2xl">
                Crafting Metal Masterpieces with Precision and Passion{" "}
              </p>
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

                    <div className="ql-content-styles font-theme-label uppercase text-end pt-1 pe-3">
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
