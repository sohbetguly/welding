import React from "react";
import image2 from "./images/welding-2.jpg";

function Section3() {
  return (
    <section className="font-theme-text pb-8 theme-gold text-start font-roboto py-10 px-5 bg-secondary-gray text-secondary-color">
      <div className="max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4 lg:px-5">
        <div className="flex flex-col md:flex-row items-center">
          <div className="pt-5 md:me-8 md:w-6/12">
            <img
              className="object-cover rounded-lg h-auto"
              src={image2}
              alt="welding"
            />
          </div>
          <div className="md:w-6/12">
            <div className="ps-1 mt-6 text-md py-1 text-secondary-color [&_strong]:font-semibold">
              <p className="uppercase">Metalworking</p>
            </div>
            <div className="font-theme-title theme-gold text-secondary-marked [&_strong]:font-semibold pt-3 pb-5 text-4xl lg:text-5xl">
              <p>
                High-Accuracy <br /> Welding Services
              </p>
            </div>
            <div className="text-md lg:text-[18px] text-secondary-muted [&_strong]:font-semibold max-w-[500px]">
              <p style={{maxWidth: 400}}>
                Bringing extensive expertise to complex metal fabrication, I
                excel in diverse welding techniques for precise and durable
                results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section3;
