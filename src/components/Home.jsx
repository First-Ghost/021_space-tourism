import React from "react";
import homed from "../assets/home/background-home-desktop.jpg";
import homet from "../assets/home/background-home-tablet.jpg";
import homem from "../assets/home/background-home-mobile.jpg";

export const Home = () => {
  return (
    <div className="w-full h-full   ">
      <div>
        <img
          className=" absolute top-0 left-0 w-full h-svh object-cover  -z-10 md:mx-auto lg:block hidden"
          src={homed}
          alt="home-desk"
        />
        <img
          className="absolute top-0 left-0 w-full h-svh object-cover  -z-10 md:mx-auto md:block lg:hidden"
          src={homet}
          alt="tablet"
        />
        <img
          className="absolute top-0 left-0 w-full h-svh object-cover  -z-10 md:mx-auto sm:block md:hidden"
          src={homem}
          alt="mobile"
        />
        <div className="relative top-[98px] mx-auto  md:w-[688px] md:h-[672px]   lg:w-[1110px] lg:h-[632px]  z-10 flex lg:items-end md:items-center sm:justify-center ">
          <div className="flex lg:flex-row flex-col lg:w-[1110px] lg:h-[343px]  md:justify-between md:mx-auto ">
            <div className="flex flex-col  lg:w-[540px] lg:h-[343px] md:w-[512px] md:h-[334px]  w-[327px] h-[294px]  text-white lg:mx-6 lg:mt-[10px] md:mt-[100px]">
              <h2 className="md:text-[24px] text-[18px] lg:text-start text-center text-[#D0D6F9] ">
                SO, YOU WANT TO TRAVEL TO
              </h2>
              <h1 className="lg:text-[152px] md:text-[102px] text-[72px] lg:text-start text-center ">
                SPACE
              </h1>
              <p className="  text-[22px] lg:text-start lg:pr-0  md:pr-[60px] pr-0 text-center items-center  lg:ml-0 md:ml-8 mx-3 md:mx-0 text-[#D0D6F9]">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </p>
            </div>

            <div className=" w-[327] h-[202px] md:h-[300px] lg:w-[540px] lg:h-[275px]  my-auto   flex lg:justify-end justify-center items-end  md:text-[32px] text-[24px] lg:mr-[100px] md:mt-10 mt-6">
              <a className="h-full flex items-center " href="destenation">
                <button className="relative rounded-full bg-white hover:bg-orange-600 ease-in-out duration-500 hover:text-white hover:scale-110 sm:h-[144px] sm:w-[144px] md:w-[272px] md:h-[272px] hover:cursor-pointer before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:w-[150%] before:h-[150%] before:bg-white before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-20">
                  EXPLORE
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
