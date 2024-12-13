import React from "react";
import image1 from "../../images/home/testimonial/1.webp";
import image2 from "../../images/home/testimonial/2.png";
import image3 from "../../images/home/testimonial/3.webp";
import { useTranslation } from "react-i18next";

function Testimonials() {
  const { t } = useTranslation();

  return (
    <section
      id="Testimonial-113"
      className="font-default shape-rounded-full center vertical-bottom bg-secondary-gray theme-classes center px-9 group/alignment"
    >
      <div
        data-controller="testimonial-13"
        className="custom-max-width padding-top-full padding-bottom-full mx-auto"
      >
        <div className="max-w-3xl custom-width margin-alignment mx-auto">
          <div
            style={{
              "--text-color": "207, 95.00%, 7.84%",
              "--bg-color": "0, 0.00%, 100.00%",
            }}
            className="mx-auto animate-element relative perspective-[1500px] flex flex-wrap justify-alignment gap-x-8 gap-y-4"
          >
            {/* Testimonial 1 */}
            <div
              style={{ top: "100px" }}
              className="w-full h-full sticky z-[5]"
            >
              <div
                className="font-default shape-rounded-full detail-count-3 card shadow-lg border border-theme-color/40 p-6 margin-bottom transition-transform duration-300 rounded-shape bg-secondary-color text-secondary-color border-secondary-color/15 sm:p-[2.5rem]"
                style={{
                  transition: "transform 0.5s ease-out",
                  transform: "translateY(-1.99733px) rotateZ(-0.399466deg)",
                }}
              >
                <div className="flex items-center pb-2">
                  <img
                    src={image1}
                    alt="Ahmet Yılmaz"
                    className="me-3 object-cover rounded-full size-16"
                  />
                  <div>
                    <div className="ql-content-styles margin-bottom-sm font-theme-title">
                      Ahmet Yılmaz
                    </div>
                    <div className="ql-content-styles text-sm font-theme-text">
                      <p>Marketing Manager</p>
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="ql-content-styles font-theme-text w-full">
                    {t("testimonial.ahmet.text")}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div
              style={{ top: "150px" }}
              className="w-full h-full sticky z-[5]"
            >
              <div
                className="font-default shape-rounded-full detail-count-3 card shadow-lg border border-theme-color/40 p-6 margin-bottom transition-transform duration-300 rounded-shape bg-secondary-color text-secondary-color border-secondary-color/15 sm:p-[2.5rem]"
                style={{
                  transition: "transform 0.5s ease-out",
                  transform: "translateY(-3.99466px) rotateZ(-0.798932deg)",
                }}
              >
                <div className="flex items-center pb-2">
                  <img
                    src={image2}
                    alt="Elif Demir"
                    className="me-3 object-cover rounded-full size-16"
                  />
                  <div>
                    <div className="ql-content-styles margin-bottom-sm font-theme-title">
                      Elif Demir
                    </div>
                    <div className="ql-content-styles text-sm font-theme-text">
                      <p>Human Resources Director</p>
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="ql-content-styles font-theme-text w-full">
                    {t("testimonial.elif.text")}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div
              style={{ top: "200px" }}
              className="w-full h-full sticky z-[5]"
            >
              <div
                className="font-default shape-rounded-full detail-count-3 card shadow-lg border border-theme-color/40 p-6 margin-bottom transition-transform duration-300 rounded-shape bg-secondary-color text-secondary-color border-secondary-color/15 sm:p-[2.5rem]"
                style={{
                  transition: "transform 0.5s ease-out",
                  transform: "translateY(-5.99199px) rotateZ(-1.1984deg)",
                }}
              >
                <div className="flex items-center pb-2">
                  <img
                    src={image3}
                    alt="Murat Özdemir"
                    className="me-3 object-cover rounded-full size-16"
                  />
                  <div>
                    <div className="ql-content-styles margin-bottom-sm font-theme-title">
                      Murat Özdemir
                    </div>
                    <div className="ql-content-styles text-sm font-theme-text">
                      <p>Senior Software Developer</p>
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="ql-content-styles font-theme-text w-full">
                    {t("testimonial.murat.text")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
