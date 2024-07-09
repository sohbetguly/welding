import React from "react";

function Navbar() {
  return (
    <nav
      data-controller="burger"
      class="px-5 sticky top-0 border-b border-b-secondary-color/50 bg-secondary-color text-secondary-color relative"
    >
      <div class="flex items-center relative z-[9] px-4 py-3 lg:px-5 justify-between max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
        <a href="#" class="text-inherit text-xl font-bold">
          <svg
            class="h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2033.96 480"
          >
            <path
              class="bg-tertiary-fill"
              d="M86.87,2.26H392.61c46.91,0,84.93,37.84,84.93,84.53V391.08c0,46.68-38,84.53-84.93,84.53H86.87c-46.9,0-84.93-37.85-84.93-84.53V86.79C1.94,40.1,40,2.26,86.87,2.26Z"
              fill="transparent"
            ></path>
            <polyline
              points="55.21 165.55 87.2 137.84 149.15 279.76 126.4 315.13"
              style={{ fill: "currentcolor" }}
            ></polyline>
            <polyline
              points="400.29 137.85 428.28 165.36 361 315.64 333.74 279.54"
              style={{ fill: "currentcolor" }}
            ></polyline>
            <polyline
              points="169.67 93.97 201.97 67.21 241.19 158.57 285.03 66.51 316.87 94.2 273.03 186.95 209.58 186.72"
              style={{ fill: "currentcolor" }}
            ></polyline>
            <polyline
              points="209.91 196.48 272.79 196.48 335.39 355.65 298.9 355.09 241.91 213.04 183.52 355.37 148.15 355.37"
              style={{ fill: "currentcolor" }}
            ></polyline>
            <path
              d="M96.42,397.74l7.11,25.6,7.2-25.69h3.87l-9.23,31.5h-3.82l-7.16-25.74-7.11,25.74H83.41l-9.18-31.5h4.1l7.06,25.87,7.11-25.78Z"
              style={{ fill: "currentcolor" }}
            ></path>
            <path
              d="M132.91,397.65h22.77v3.42H136.83v10.48h16.51v3.51H136.83v10.67h19.3v3.42H132.91Z"
              style={{ fill: "currentcolor" }}
            ></path>
            <path
              d="M175.93,397.65h13.19c6.7,0,9.27,3.28,9.27,8.14a7.06,7.06,0,0,1-4.59,7c3.73.77,5.4,4.05,5.4,7.34,0,5.89-3.47,9-10.58,9H175.93Zm3.92,3.33v10.35h9.09c3.91,0,5.49-2.39,5.49-5.22,0-3.6-2-5.13-5.31-5.13Zm0,13.81v11h9c4.27,0,6.39-1.85,6.39-5.72,0-3.37-1.85-5.31-6.26-5.31Z"
              style={{ fill: "currentcolor" }}
            ></path>
            <path
              d="M220.08,397.65h12.55c7.25,0,10.8,3.6,10.8,9.9,0,6.93-3.87,10.57-11.25,10.57h-8.1v11h-4Zm4,3.42V414.7h8.55c4.23,0,6.8-2.34,6.8-7,0-4.23-2.21-6.61-6.75-6.61Z"
              style={{ fill: "currentcolor" }}
            ></path>
            <path
              d="M267.37,429.15h-4v-31.5h12.51c7.11,0,10.57,3.42,10.57,9.45,0,4.95-2.25,8.1-6.21,9.45l6.75,12.6h-4.41l-6.39-11.93h-8.82Zm0-28.08v12.69h8.46c4.14,0,6.62-2.12,6.62-6.53,0-3.91-2.12-6.16-6.57-6.16Z"
              style={{ fill: "currentcolor" }}
            ></path>
            <path
              d="M306.84,397.65h22.77v3.42H310.75v10.48h16.52v3.51H310.75v10.67h19.31v3.42H306.84Z"
              style={{ fill: "currentcolor" }}
            ></path>
            <path
              d="M366.6,404.67c-1.67-3.06-3.92-4.46-7.88-4.46-5.26,0-7.11,2.34-7.11,5.45,0,2.38,1.35,4.27,5.76,5.22l3.2.67c7,1.49,9.94,4.14,9.94,9.09,0,5.85-4.27,9.05-11.56,9.05-5.22,0-9.59-1.53-12.33-6.12l3.15-2c2.34,3.46,4.81,5,9.09,5,5.49,0,7.83-2.07,7.83-5.53,0-3.24-1.49-4.55-6.71-5.72l-3.19-.72q-8.91-2-8.91-8.77c0-5.18,3.78-8.73,10.84-8.73,5.9,0,8.91,2,11,5.58Z"
              style={{ fill: "currentcolor" }}
            ></path>
            <path
              d="M408,404.67c-1.66-3.06-3.91-4.46-7.87-4.46-5.27,0-7.11,2.34-7.11,5.45,0,2.38,1.35,4.27,5.76,5.22l3.19.67c7,1.49,9.94,4.14,9.94,9.09,0,5.85-4.27,9.05-11.56,9.05-5.22,0-9.58-1.53-12.33-6.12l3.15-2c2.34,3.46,4.82,5,9.09,5,5.49,0,7.83-2.07,7.83-5.53,0-3.24-1.49-4.55-6.71-5.72l-3.19-.72q-8.91-2-8.91-8.77c0-5.18,3.78-8.73,10.85-8.73,5.89,0,8.9,2,11,5.58Z"
              style={{ fill: "currentcolor" }}
            ></path>
            <path
              d="M652.2,173.08l31,111.52,31.36-111.91h16.85L691.2,309.89H674.54L643.38,197.78l-31,112.11H595.56l-40-137.2h17.84l30.77,112.7,31-112.31Z"
              style={{ fill: "currentcolor" }}
            ></path>
            <path
              d="M811.16,172.69h99.17v14.9H828.21v45.66h71.93v15.29H828.21V295h84.08v14.9H811.16Z"
              style={{ fill: "currentcolor" }}
            ></path>
            <path
              d="M998.53,172.69H1056c29.2,0,40.37,14.31,40.37,35.48,0,15.09-7.64,25.87-20,30.57,16.27,3.33,23.52,17.64,23.52,31.95,0,25.67-15.09,39.2-46.06,39.2H998.53Zm17.05,14.5v45.08h39.59c17,0,23.91-10.38,23.91-22.73,0-15.68-8.82-22.35-23.12-22.35Zm0,60.18v48h39.2c18.62,0,27.83-8,27.83-24.89,0-14.7-8-23.12-27.24-23.12Z"
              style={{ fill: "currentcolor" }}
            ></path>
            <path
              d="M1190.8,172.69h54.69c31.55,0,47,15.68,47,43.12,0,30.18-16.86,46.06-49,46.06h-35.28v48H1190.8Zm17.45,14.9V247h37.24c18.42,0,29.59-10.19,29.59-30.57,0-18.43-9.6-28.81-29.4-28.81Z"
              style={{ fill: "currentcolor" }}
            ></path>
            <path
              d="M1396.8,309.89h-17.45V172.69h54.49c31,0,46.06,14.9,46.06,41.16,0,21.56-9.8,35.28-27.05,41.16l29.4,54.88h-19.2L1435.21,258H1396.8Zm0-122.3v55.27h36.85c18,0,28.81-9.21,28.81-28.42,0-17.05-9.21-26.85-28.62-26.85Z"
              style={{ fill: "currentcolor" }}
            ></path>
            <path
              d="M1568.69,172.69h99.18v14.9h-82.13v45.66h71.93v15.29h-71.93V295h84.09v14.9H1568.69Z"
              style={{ fill: "currentcolor" }}
            ></path>
            <path
              d="M1829,203.27c-7.25-13.33-17-19.41-34.3-19.41-22.93,0-31,10.19-31,23.72,0,10.39,5.88,18.62,25.08,22.73l13.92,2.94c30.38,6.47,43.32,18,43.32,39.59,0,25.49-18.62,39.4-50.38,39.4-22.73,0-41.74-6.66-53.7-26.66l13.72-8.62c10.19,15.09,21,21.76,39.59,21.76,23.91,0,34.11-9,34.11-24.11,0-14.11-6.47-19.8-29.21-24.89l-13.91-3.14q-38.8-8.82-38.81-38.22c0-22.54,16.46-38,47.23-38,25.68,0,38.81,8.82,48,24.3Z"
              style={{ fill: "currentcolor" }}
            ></path>
            <path
              d="M2009.1,203.27c-7.25-13.33-17-19.41-34.3-19.41-22.93,0-31,10.19-31,23.72,0,10.39,5.88,18.62,25.09,22.73l13.91,2.94c30.38,6.47,43.32,18,43.32,39.59,0,25.49-18.62,39.4-50.37,39.4-22.74,0-41.75-6.66-53.71-26.66l13.72-8.62c10.2,15.09,21,21.76,39.6,21.76,23.91,0,34.1-9,34.1-24.11,0-14.11-6.47-19.8-29.2-24.89l-13.92-3.14q-38.8-8.82-38.81-38.22c0-22.54,16.47-38,47.24-38,25.67,0,38.81,8.82,48,24.3Z"
              style={{ fill: "currentcolor" }}
            ></path>
          </svg>
        </a>
        <ul class="hidden flex-wrap lg:flex justify-start items-center flex-1 px-6">
          <li>
            <a
              href="/"
              class="flex items-center text-secondary-link group hover:text-secondary-link-hover px-3 py-2"
            >
              <span class="text-base border-b border-b-transparent group-hover:border-b-secondary-color duration-100 pb-0">Home</span>
            </a>
          </li>
          <li>
            <a
              href="/"
              class="flex items-center text-secondary-link group hover:text-secondary-link-hover px-3 py-2"
            >
              <span class="text-base border-b border-b-transparent group-hover:border-b-secondary-color duration-100 pb-0">About</span>
            </a>
          </li>
          <li>
            <a
              href="/"
              class="flex items-center text-secondary-link group hover:text-secondary-link-hover px-3 py-2"
            >
              <span class="text-base border-b border-b-transparent group-hover:border-b-secondary-color duration-100 pb-0">Contact</span>
            </a>
          </li>
          <li>
            <a
              href="/"
              class="flex items-center text-secondary-link group hover:text-secondary-link-hover px-3 py-2"
            >
              <span class="text-base border-b border-b-transparent group-hover:border-b-secondary-color duration-100 pb-0">Services</span>
            </a>
          </li>
        </ul>
        <div class="flex">
          <div class="hidden md:flex items-center space-x-3">
            <a
              class="secondary-outline-btn rounded-btn duration-300 text-bold [&.secondary-link-btn]:font-semibold [&.secondary-link-btn]:text-[15px] group/btn border px-4 py-1"
              href="tel:+99361616161"
            >
              <span class="flex items-center group-[.secondary-link-btn]/btn:duration-300 group-[.secondary-link-btn]/btn:border-b-2 border-transparent group-hover/btn:border-secondary-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="size-4 me-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                <span>+993 61616161</span>
              </span>
            </a>
          </div>
          <button
            aria-expanded="false"
            data-action="burger#navbarTogglerTwo"
            class="group w-6 h-6 relative block lg:hidden ms-3 my-auto navbar-toggler"
          >
            <svg
              class="w-6 h-6 opacity-0 duration-300 delay-100 text-secondary-fill absolute top-0 group-aria-[expanded=false]:opacity-100"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              ></path>
            </svg>
            <svg
              class="w-6 h-6 opacity-0 duration-300 delay-100 text-secondary-fill absolute top-0 group-aria-[expanded=true]:opacity-100"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        id="menuItems"
        style={{ maxHeight: 0 }}
        class="flex flex-col items-start overflow-auto absolute z-[8] bg-white w-full bottom-100 start-0 lg:hidden duration-300"
      >
        <ul class="flex flex-col px-4 uppercase mt-4 mx-auto">
          <li>
            <a
              href="/"
              class="flex items-center justify-center px-2 py-[8px] me-2"
            >
              <span class="hover:text-secondary-link-hover pb-0">Home</span>
            </a>
          </li>
        </ul>
        <div class="flex w-full justify-center border-t p-4 space-x-2">
          <a
            class="secondary-regular-btn duration-300 text-sm [&.secondary-link-btn]:font-semibold [&.secondary-link-btn]:text-[15px] group/btn border px-4 py-2"
            href="/"
          >
            <span class="group-[.secondary-link-btn]/btn:duration-300 group-[.secondary-link-btn]/btn:border-b-2 border-transparent group-hover/btn:border-secondary-text">
              Get Started
            </span>
            <svg
              class="size-3 ms-1 hidden group-[.secondary-link-btn]/btn:inline-block"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="3"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              ></path>
            </svg>
          </a>{" "}
          <a
            class="secondary-outline-btn duration-300 text-sm [&.secondary-link-btn]:font-semibold [&.secondary-link-btn]:text-[15px] group/btn border px-4 py-2"
            href="/"
          >
            <span class="group-[.secondary-link-btn]/btn:duration-300 group-[.secondary-link-btn]/btn:border-b-2 border-transparent group-hover/btn:border-secondary-text">
              Sign In
            </span>
            <svg
              class="size-3 ms-1 hidden group-[.secondary-link-btn]/btn:inline-block"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="3"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              ></path>
            </svg>
          </a>{" "}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
