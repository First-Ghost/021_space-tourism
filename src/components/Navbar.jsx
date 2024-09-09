import React, { useState } from "react";
import logo from "../assets/shared/logo.svg";
import menu from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="lg:max-w-[1440px] lg:h-[136px] w-full md:h-[96px] h-[88px] bg-inherit flex mx-auto md:justify-between justify-between">
      <div className="lg:w-[736px] lg:h-[48px] lg:mt-[64px] flex lg:items-start items-center">
        <img
          className="md:w-[48px] md:h-[48px] w-[40px] h-[40px] lg:ml-[64px] md:ml-[40px] ml-[24px]"
          src={logo}
          alt="logo"
        />

        <hr className="absolute lg:block hidden w-[560px] ml-[176px] h-[1px] mx-auto bg-gray-500 border-0 rounded md:my-7 dark:bg-gray-700 z-20" />
      </div>
      <div
        onClick={() => setNav(!nav)}
        className="md:hidden flex items-center mr-[24px]"
      >
        <img className="hover:cursor-pointer" src={menu} alt="menu" />
      </div>

      <div className="lg:w-[736px] md:w-[640px] lg:h-[96px] backdrop-blur-lg bg-white/10 lg:mt-[40px] text-white md:flex items-center justify-around hidden">
        <button className="h-full lg:ml-[159px] flex flex-row items-center">
          <a
            className="h-full flex items-center hover:border-b-4 ease-in-out duration-100"
            href="/"
          >
            <span className="font-[600] lg:block hidden lg:mr-1">00</span>
            HOME
          </a>
        </button>

        <a
          className="h-full flex items-center hover:border-b-4 ease-in-out duration-100"
          href="destenation"
        >
          <button className="">
            <span className="font-[600]">01</span> DESTINATION
          </button>
        </a>
        <button className="h-full ease-in-out duration-100">
          <a
            className="h-full flex items-center hover:border-b-4 ease-in-out duration-100"
            href="crew"
          >
            <span className="font-[600] lg:block hidden lg:mr-1">02</span> CREW
          </a>
        </button>
        <button
          className="h-full 
         ease-in-out duration-100"
        >
          <a
            className="h-full flex items-center hover:border-b-4 ease-in-out duration-100"
            href="technology"
          >
            <span className="font-[600] lg:block hidden lg:mr-1">03</span>{" "}
            TECHNOLOGY
          </a>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 w-[70%] h-screen backdrop-blur-2xl z-40 duration-300 transform ${
          nav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          onClick={() => setNav(!nav)}
          className="md:hidden flex justify-end items-end mt-[24px] mr-[24px]"
        >
          <img className="hover:cursor-pointer" src={close} alt="close" />
        </div>

        <div className="w-[222px] h-[172px] mt-[133px] flex flex-col items-start justify-between fixed right-1 text-white duration-300">
          <button className="h-[19px] w-full text-left">
            <a
              className="h-full flex items-center hover:border-r-4 ease-in-out duration-100"
              href="/"
            >
              <span className="font-[600] lg:mr-1 pr-1">00</span> HOME
            </a>
          </button>

          <button className="h-[19px] w-full htext-left">
            <a
              className="h-full flex items-center hover:border-r-4 ease-in-out duration-100"
              href="destenation"
            >
              <span className="font-[600] pr-1">01</span> DESTINATION
            </a>
          </button>

          <button className="h-[19px] w-full focus:border-r-4 border-white text-left">
            <a
              className="h-full flex items-center hover:border-r-4 ease-in-out duration-100"
              href="crew"
            >
              <span className="font-[600] pr-1">02</span> CREW
            </a>
          </button>

          <button className="h-[19px] w-full focus:border-r-4 border-white text-left">
            <a
              className="h-full flex items-center hover:border-r-4 ease-in-out duration-100"
              href="/technology"
            >
              <span className="font-[600] pr-1">03</span> TECHNOLOGY
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
