import { jarallax } from "jarallax";
import React, { useEffect } from "react";
import image from "../../images/home/home-1.webp";
import Features from "./Features";
import FirstSection from "./FirstSection";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Slider from "./Slider";
import Testimonials from "./Testimonial";

function Sections() {
  useEffect(() => {
    jarallax(document.querySelectorAll(".jarallax"), {
      speed: 0.2,
    });
  }, []);

  return (
    <div className="">
      {/* <SliderHome /> */}
      <FirstSection />
      <Features />
      <Section3 />
      <Section4 />
      <section
        data-controller="jarallax"
        data-jarallax
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
      <Testimonials />
      <Slider />
    </div>
  );
}

export default Sections;
