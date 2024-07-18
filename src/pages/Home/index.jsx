import React, { useEffect } from "react";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Slider from "./Slider";
import SliderHome from "./SliderHome";
import { jarallax } from "jarallax";

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
            src="http://app.localhost:3000/assets/h18-a99bed48eb920daa5f316dee650da1c5220a7b61abe37fb2f03ea95dce444b39.jpg"
          />
        </div>
      </section>
      <Slider />
    </div>
  );
}

export default Sections;
