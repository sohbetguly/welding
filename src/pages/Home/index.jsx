import React, { useEffect } from "react";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Slider from "./Slider";
import Slider2 from "./Slider2";
import SliderHome from "./SliderHome";
import { jarallax } from "jarallax";
import image from "../../images/home/home-1.webp";

function Sections() {
  useEffect(() => {
    jarallax(document.querySelectorAll(".jarallax"), {
      speed: 0.2,
    });
  }, []);

  return (
    <div>
      <SliderHome />
      <Section3 />
      <Section4 />
      <section
        data-controller="jarallax"
        data-jarallax
        data-speed="0.2"
        className="theme-gold jarallax font-theme-text text-secondary-gray"
      >
        <div className="h-96"></div>
        <div id="jarallax-container-0" className="jarallax-container">
          <img
            className="jarallax-img duration-200 group-hover/image:brightness-[.90] h-full mx-auto object-cover"
            src={image}
          />
        </div>
      </section>
      <Slider />
      <Slider2 />
    </div>
  );
}

export default Sections;
