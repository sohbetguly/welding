import React, { useEffect } from "react";
import { jarallax } from "jarallax";
import image from "../../images/services/pak ussa (22).png";
import image2 from "../../images/services/9314.jpg";
import { Link } from "react-router-dom";
import Feature from "../About/Feature";

function Services() {
  useEffect(() => {
    jarallax(document.querySelectorAll(".jarallax"), {
      speed: 0.2,
    });
  }, []);

  return (
    <div>
      <section
        data-jarallax=""
        class="secondary-default font-default shape-rounded left secondary-classes relative flex flex-col group/alignment jarallax min-h-[400px]"
        data-controller="jarallax"
      >
        <img
          class="animate-element jarallax-img absolute h-full w-full object-cover z-[-2]"
          src={image2}
          alt="welding"
        />

        <div class="flex grow items-end justify-center bg-gradient-to-bl from-transparent via-transparent to-gray-900/80 px-9">
          <div class="absolute combined-shadow w-full h-full bg-gradient-to-b from-gray-900/40 via-transparent to-transparent z-[-1]"></div>
          <div class="max-width-md rounded-shape w-full text-secondary-white text-alignment padding-top-full padding-bottom-full">
            <div class="animate-element ql-content-styles text-5xl text-secondary-on-image font-secondary-title margin-bottom">
              <p>Our Welding Masterpieces</p>
            </div>
            <div class="animate-element ql-content-styles text-2xl text-secondary-on-image max-width-sm margin-bottom margin-alignment">
              <p>Bringing Your Metalwork Visions to Life</p>
            </div>
            <Link
              class="rounded-btn bg-secondary-white text-secondary-dark hover:bg-secondary-btn-color hover:text-secondary-btn-color text-xl border-transparent flex items-center justify-center duration-300 group/btn border-2 font-semibold text-center inline-block w-full md:w-6/12 md:max-w-52 py-2 px-4"
              to="/contact"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
      <section class="theme-gold font-default shape-rounded center theme-classes px-9 group/alignment">
        <div class="max-width-4xl padding-top-full padding-bottom-full mx-auto">
          <div class="text-alignment">
            <div
              animation-type=""
              animation-delay=""
              class="animate-element ql-content-styles only:m-0 last:m-0 margin-bottom font-theme-title duration-200"
            >
              <h4 className="text-4xl uppercase text-secondary-marked">
                <strong>At Päk Ussa, we offer</strong>
              </h4>
            </div>

            <div
              animation-type=""
              animation-delay=""
              class="animate-element margin-bottom only:mb-0 last:mb-0"
            >
              <div class="ql-content-styles dynamic-font-size-md opacity-70 max-width-sm">
                <p className="text-xl">
                  <strong>
                    a range of welding and metalwork services designed to meet{" "}
                    <br />
                    your needs, from custom gates to artistic iron pieces.{" "}
                  </strong>
                </p>
              </div>
            </div>

            <div
              animation-type=""
              animation-delay=""
              class="animate-element flex flex-wrap justify-alignment gap-9 mt-12"
            >
              <div class="w-full md:w-[calc(50%-18px)]">
                <div class="flex group-[.right]/alignment:flex-row-reverse group-[.right]/alignment:justify-start items-center text-start group-[.right]/alignment:text-end pb-4">
                  <div>
                    <div class="ql-content-styles font-theme-title pt-1">
                      <h6>
                        <strong>Custom Iron Creations</strong>
                      </h6>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="ql-content-styles opacity-90 font-theme-text w-full md:max-w-[40vw] lg:max-w-[30vw] group-[.right]/alignment:max-w-full text-start group-[.right]/alignment:text-end">
                    We specialize in crafting custom iron products, from
                    intricate gates to durable furniture. Our expert team
                    tailors each piece to your exact specifications, combining
                    beauty and functionality to meet your unique vision.
                  </div>
                </div>
              </div>

              <div class="w-full md:w-[calc(50%-18px)]">
                <div class="flex group-[.right]/alignment:flex-row-reverse group-[.right]/alignment:justify-start items-center text-start group-[.right]/alignment:text-end pb-4">
                  <div>
                    <div class="ql-content-styles font-theme-title pt-1">
                      <h6>
                        <strong>Residential & Commercial Solutions</strong>
                      </h6>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="ql-content-styles opacity-90 font-theme-text w-full md:max-w-[40vw] lg:max-w-[30vw] group-[.right]/alignment:max-w-full text-start group-[.right]/alignment:text-end">
                    Whether for home or business, we provide top-quality
                    metalwork solutions. From tapchans to iron doors and
                    carports, our designs blend practicality with artistry,
                    ensuring long-lasting, durable installations for any
                    environment.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="font-theme-text pb-8 theme-gold text-start font-roboto py-10 px-5 bg-secondary-gray text-secondary-color">
        <div class="max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4 lg:px-5">
          <div class="flex flex-col-reverse md:flex-row items-center">
            <div class="pt-5 md:me-8 w-full md:w-6/12">
              <img
                class="object-cover rounded-lg h-auto"
                src={image}
                alt="welding"
              />
            </div>
            <div class="w-full mb-4 md:w-6/12">
              <div class="ps-1 mt-6 text-md py-1 text-secondary-color">
                <p class="uppercase">Custom Iron Gate Craftsmanship</p>
              </div>
              <div class="font-theme-title theme-gold text-secondary-marked [&amp;_strong]:font-semibold pt-3 pb-5 text-4xl lg:text-5xl">
                <p>Secure, Durable, and Beautifully Designed</p>
              </div>
              <div class="text-md max-w-[400px] lg:text-[18px] text-secondary-muted max-w-[500px]">
                <p>
                  Our custom iron gates combine security and elegance, offering
                  both protection and aesthetic appeal. Each gate is handcrafted
                  to match your style and needs, whether for residential or
                  commercial spaces. Built to last, our gates are designed with
                  precision, ensuring durability and weather resistance without
                  compromising beauty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      <Feature />
    </div>
  );
}

export default Services;
