import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navbarTogglerOne = (e) => {
    const navbar = document.getElementById("navbar")
    const burger = e.currentTarget;
    const ariaExpanded = burger.getAttribute("aria-expanded");
    const menuItems = document.getElementById("menuItems");
    if (ariaExpanded === "false") {
      burger.setAttribute("translate", "-100");
      burger.setAttribute("aria-expanded", "true");
      const navHeight = navbar.scrollHeight;
      menuItems.style.height = `calc(100vh - ${navHeight}px)`;
      menuItems.style.maxHeight = `calc(100vh - ${navHeight}px)`;
      document.body.style.overflow = "hidden";
    } else {
      burger.setAttribute("translate", "100");
      burger.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
      menuItems.style.maxHeight = 0;
    }
  };

  return (
    <nav id="navbar" className="px-5 sticky z-50 top-0 border-b border-b-secondary-color/50 bg-secondary-color text-secondary-color relative">
      <div className="flex items-center relative z-[9] px-4 py-3 lg:px-5 justify-between max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
        <Link href="/" className="text-inherit text-xl font-bold">
          Logo
        </Link>
        <ul className="hidden flex-wrap lg:flex justify-start items-center flex-1 px-6">
          <li>
            <Link
              to="/"
              className="flex items-center text-secondary-link group hover:text-secondary-link-hover px-3 py-2"
            >
              <span className="text-base border-b border-b-transparent group-hover:border-b-secondary-color duration-100 pb-0">
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="flex items-center text-secondary-link group hover:text-secondary-link-hover px-3 py-2"
            >
              <span className="text-base border-b border-b-transparent group-hover:border-b-secondary-color duration-100 pb-0">
                About
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="flex items-center text-secondary-link group hover:text-secondary-link-hover px-3 py-2"
            >
              <span className="text-base border-b border-b-transparent group-hover:border-b-secondary-color duration-100 pb-0">
                Contact
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="flex items-center text-secondary-link group hover:text-secondary-link-hover px-3 py-2"
            >
              <span className="text-base border-b border-b-transparent group-hover:border-b-secondary-color duration-100 pb-0">
                Services
              </span>
            </Link>
          </li>
        </ul>
        <div className="flex">
          <div className="flex items-center space-x-3">
            <Link
              className="secondary-outline-btn text-nowrap rounded-btn duration-300 text-bold [&.secondary-link-btn]:font-semibold [&.secondary-link-btn]:text-[15px] group/btn border px-4 py-1"
              to="tel:+99361616161"
            >
              <span className="flex items-center group-[.secondary-link-btn]/btn:duration-300 group-[.secondary-link-btn]/btn:border-b-2 border-transparent group-hover/btn:border-secondary-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="size-4 me-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                <span>+993 61616161</span>
              </span>
            </Link>
          </div>
          <button
            aria-expanded="false"
            onClick={navbarTogglerOne}
            className="group w-6 h-6 relative block lg:hidden ms-3 my-auto navbar-toggler"
          >
            <svg
              className="w-6 h-6 opacity-0 duration-300 delay-100 text-secondary-fill absolute top-0 group-aria-[expanded=false]:opacity-100"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              ></path>
            </svg>
            <svg
              className="w-6 h-6 opacity-0 duration-300 delay-100 text-secondary-fill absolute top-0 group-aria-[expanded=true]:opacity-100"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        id="menuItems"
        style={{ maxHeight: 0 }}
        className="flex flex-col items-start overflow-auto absolute z-[8] bg-white w-full bottom-100 start-0 lg:hidden duration-300"
      >
        <ul className="flex flex-col px-4 uppercase mt-4 mx-auto">
          <li>
            <Link
              href="/"
              className="flex items-center justify-center px-2 py-[8px] me-2"
            >
              <span className="hover:text-secondary-link-hover pb-0">Home</span>
            </Link>
          </li>
        </ul>
        <div className="flex w-full justify-center border-t p-4 space-x-2">
          <Link
            className="secondary-regular-btn duration-300 text-sm [&.secondary-link-btn]:font-semibold [&.secondary-link-btn]:text-[15px] group/btn border px-4 py-2"
            href="/"
          >
            <span className="group-[.secondary-link-btn]/btn:duration-300 group-[.secondary-link-btn]/btn:border-b-2 border-transparent group-hover/btn:border-secondary-text">
              Get Started
            </span>
            <svg
              className="size-3 ms-1 hidden group-[.secondary-link-btn]/btn:inline-block"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="3"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              ></path>
            </svg>
          </Link>{" "}
          <Link
            className="secondary-outline-btn duration-300 text-sm [&.secondary-link-btn]:font-semibold [&.secondary-link-btn]:text-[15px] group/btn border px-4 py-2"
            href="/"
          >
            <span className="group-[.secondary-link-btn]/btn:duration-300 group-[.secondary-link-btn]/btn:border-b-2 border-transparent group-hover/btn:border-secondary-text">
              Sign In
            </span>
            <svg
              className="size-3 ms-1 hidden group-[.secondary-link-btn]/btn:inline-block"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="3"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              ></path>
            </svg>
          </Link>{" "}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
