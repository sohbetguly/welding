import React from "react";

function Footer() {
  return (
    <section className="theme-default border-t py-14 px-5 font-theme-text bg-secondary-color text-secondary-color">
      <div className="max-w-6xl mx-auto px-4 lg:px-5">
        <ul className="flex flex-wrap justify-center gap-5 font-normal">
          <li>
            <a
              className="text-secondary-link hover:text-secondary-link-hover duration-200"
              href="#"
            >
              about
            </a>
          </li>
          <li>
            <a
              className="text-secondary-link hover:text-secondary-link-hover duration-200"
              href="#"
            >
              licensing
            </a>
          </li>
          <li>
            <a
              className="text-secondary-link hover:text-secondary-link-hover duration-200"
              href="#"
            >
              privacy policy
            </a>
          </li>
          <li>
            <a
              className="text-secondary-link hover:text-secondary-link-hover duration-200"
              href="#"
            >
              plans
            </a>
          </li>
          <li>
            <a
              className="text-secondary-link hover:text-secondary-link-hover duration-200"
              href="#"
            >
              blog
            </a>
          </li>
          <li>
            <a
              className="text-secondary-link hover:text-secondary-link-hover duration-200"
              href="#"
            >
              contact
            </a>
          </li>
        </ul>
        <div className="pt-3 text-center">
          <div className="font-theme-title text-md mx-auto sm:mx-0">©2024 </div>
        </div>
        <div className="flex justify-center">
        </div>
      </div>
    </section>
  );
}

export default Footer;
