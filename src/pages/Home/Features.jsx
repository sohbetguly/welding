import React from "react";
import image from "../../images/home/feature/1.png";

function Features() {
  return (
    <section
      id="Feature-114"
      className="font-default shape-rounded center vertical-bottom theme-classes group/alignment px-9"
    >
      <div className="custom-max-width padding-top-full padding-bottom-full mx-auto">
        <div className="@container max-w-7xl custom-width @container count-feature-4 margin-alignment mx-auto">
          <div className="title-alignment px-2">
            <div className="animate-element ql-content-styles margin-bottom font-theme-title">
              <p>
                <strong>Design Freedom Made Simple</strong>
              </p>
            </div>

            <div className="animate-element ql-content-styles margin-bottom margin-alignment">
              <p>
                Build Beautiful Websites for Any Skill Level, Easy-to-Use
                Features, and a Wide Range of Customizable Templates to Get You
                Started Quickly.
              </p>
            </div>
          </div>

          <ul className="detail-count-5 font-default shape-rounded detail-count-5 animate-element flex flex-wrap only:mb-0 last:mb-0 gap-4">
            {[
              {
                title: "Unlock Beautiful Functionality",
                text: "Tailored solutions meeting unique business needs, outshining the competition.",
              },
              {
                title: "Collaborate with Experts",
                text: "Leveraging latest design trends, best practices, and cutting-edge technologies.",
              },
              {
                title: "Elevate User Experience",
                text: "Meticulously crafting interfaces prioritizing usability, navigation, and seamless interactions.",
              },
              {
                title: "Responsive Across Devices",
                text: "Ensuring consistent, optimal experience across various devices and resolutions.",
              },
              {
                title: "Transform Your Vision",
                text: "Bringing ideas to life with stunning visuals and unparalleled experiences.",
              },
            ].map((feature, index) => (
              <li
                key={index}
                className="h-auto w-full bg-theme-card rounded-shape border border-theme-color/15 text-theme-color @2xl:w-[calc(50%-12px)] @3xl:w-[calc(33.333333333333336%-12px)] @5xl:w-[calc(25%-13px)] @7xl:w-[calc(20%-13px)]"
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
                      <p>{feature.text}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Features;
