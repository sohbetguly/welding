import React from "react";
import image2 from "./images/welding-2.jpg";

function SectionSpare() {
  return (
    <section class="font-theme-text bg-secondary-gray  text-secondary-gray py-14 px-6 sm:px-12 xl:px-0">
      <div class="max-w-4xl mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2">
          <div class="flex justify-start">
            <img class="h-full rounded-lg w-auto object-cover" src={image2} />
          </div>
          <div class="flex items-center">
            <div class="text-left px-2 sm:px-8 text-secondary-color">
              <div class="[&_strong]:font-semibold py-4 text-secondary-muted md:py-2">
                <p className="uppercase">Metalworking</p>
              </div>
              <div class="font-theme-title text-3xl md:text-4xl [&_strong]:font-bold border-secondary-color text-secondary-marked">
                <p>
                  <strong>
                    High-Accuracy <br /> Welding Services
                  </strong>
                </p>
              </div>
              <div class="mt-5">
                <div class="text-sm text-secondary-muted">
                  <p className="max-w-[300px]">
                    Bringing extensive expertise to complex metal fabrication, I
                    excel in diverse welding techniques for precise and durable
                    results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionSpare;
