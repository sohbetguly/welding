import React from "react";

function Footer() {
  return (
    <section class="theme-default border-t py-14 px-5 font-theme-text bg-secondary-color text-secondary-color">
      <div class="max-w-6xl mx-auto px-4 lg:px-5">
        <ul class="flex flex-wrap justify-center gap-5 font-normal">
          <li>
            <a
              class="text-secondary-link hover:text-secondary-link-hover duration-200"
              href="#"
            >
              about
            </a>
          </li>
          <li>
            <a
              class="text-secondary-link hover:text-secondary-link-hover duration-200"
              href="#"
            >
              licensing
            </a>
          </li>
          <li>
            <a
              class="text-secondary-link hover:text-secondary-link-hover duration-200"
              href="#"
            >
              privacy policy
            </a>
          </li>
          <li>
            <a
              class="text-secondary-link hover:text-secondary-link-hover duration-200"
              href="#"
            >
              plans
            </a>
          </li>
          <li>
            <a
              class="text-secondary-link hover:text-secondary-link-hover duration-200"
              href="#"
            >
              blog
            </a>
          </li>
          <li>
            <a
              class="text-secondary-link hover:text-secondary-link-hover duration-200"
              href="#"
            >
              contact
            </a>
          </li>
        </ul>
        <div class="pt-3 text-center">
          <div class="font-theme-title text-md mx-auto sm:mx-0">©2024 </div>
        </div>
        <div class="flex justify-center">
        </div>
      </div>
    </section>
  );
}

export default Footer;
