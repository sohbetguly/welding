import React from "react";
import Accordion from "accordion-js";

// new Accordion(accordionContainer, {
//   duration: 200,
//   triggerClass: "trigger",
//   elementClass: "accordion",
//   showMultiple: false,
//   openOnInit: [0],
// });

function index() {
  const faqs = [
    { title: "title", subtitle: "subtitle" },
    { title: "title2", subtitle: "subtitle2" },
    { title: "title3", subtitle: "subtitle3" },
    { title: "title4", subtitle: "subtitle4" },
  ];

  const accordionContainer = document.querySelector(".accordion-container");
  console.log(accordionContainer);

  return (
    <section className="group/alignment px-9">
      <div className="max-width-md mx-auto">
        <div className="flex flex-col md:flex-row md:group-[.right]/alignment:flex-row-reverse md:group-[.right]/alignment:justify-between gap-10">
          <div className="w-full lg:max-w-xl">
            <div className="animate-element accordion-container">
              {faqs.map(({ title, subtitle }) => {
                return (
                  <div key={title} className="accordion border-b py-8 last:border-b-0 border-theme-color/20 overflow-hidden group/accordion">
                    <div className="ac-header">
                      <button
                        type="button"
                        className="trigger flex items-center w-full text-start"
                      >
                        <svg
                          className="size-8 duration-200 group-[.is-active]/accordion:rotate-90 mt-2 ms-1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 50 50"
                        >
                          <path
                            fill="currentColor"
                            d="m22.7 34.7l-1.4-1.4l8.3-8.3l-8.3-8.3l1.4-1.4l9.7 9.7z"
                          />
                        </svg>
                        <div className="ql-content-styles flex items-center font-theme-title ms-2 mt-2 duration-200">
                          {title}
                        </div>
                      </button>
                    </div>
                    <div className="ac-panel">
                      <div className="px-2">
                        <div className="ql-content-styles opacity-0 mt-3 duration-150 group-[.is-active]/accordion:opacity-90 ms-9 font-theme-text">
                          {subtitle}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full lg:max-w-2xl text-alignment ">
            <div className="flex flex-col justify-center text-start group-[.right]/alignment:text-end">
              <img
                src=""
                className="object-cover md:mt-10 rounded-shape h-full w-full"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default index;
