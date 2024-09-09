import React, { useState } from "react";
import crewd from "../assets/crew/background-crew-desktop.jpg";
import crewt from "../assets/crew/background-crew-tablet.jpg";
import crewm from "../assets/crew/background-crew-mobile.jpg";
import data from "../components/data.json";

import douglasImg from "../assets/crew/image-douglas-hurley.png";
import markImg from "../assets/crew/image-mark-shuttleworth.png";
import victorImg from "../assets/crew/image-victor-glover.png";
import anoushehImg from "../assets/crew/image-anousheh-ansari.png";

const imageCrew = {
  douglas: douglasImg,
  mark: markImg,
  victor: victorImg,
  anousheh: anoushehImg,
};

export const Crew = () => {
  const [crewMember, setCrewMember] = useState(data.crew[0]);
  const [fade, setFade] = useState(false);

  const handleCrewChange = (crew) => {
    setFade(true);
    setTimeout(() => {
      setCrewMember(crew);
      setFade(false);
    }, 100); // Match this duration with the CSS transition duration
  };

  return (
    <div className="w-full h-full flex justify-center  items-center text-white">
      <div>
        <img
          className="absolute top-0 left-0 w-full h-svh object-cover -z-10 md:mx-auto lg:block hidden position"
          src={crewd}
          alt="home-desk"
        />
        <img
          className="absolute top-0 left-0 w-full h-svh object-cover -z-10 md:mx-auto md:block lg:hidden"
          src={crewt}
          alt="tablet"
        />
        <img
          className="absolute top-0 left-0 w-full h-svh object-cover -z-10 md:mx-auto sm:block md:hidden"
          src={crewm}
          alt="mobile"
        />
      </div>
      {/*  */}
      <div className=" lg:max-w-[1440px] lg:h-[888px]  md:max-w-[768px] md:h-[928px] max-w-[375px] h-full flex justify-center items-center  ">
        <div className=" lg:w-[1110px] lg:h-[792px] md:w-[688px] md:h-[848px]   w-[327px] h-[744px]  ">
          <div className="flex justify-between">
            <h2 className=" lg:text-[24px] md:text-[18px] text-center md:text-start">
              <span className="text-gray-400 mr-4">02</span>
              MEET YOUR CREW
            </h2>
            <div className=" md:block  hidden">
              <a href="destenation">
                <button className="text-gray-400 lg:text-[24px] md:text-[18px] mb-5 md:text-left text-center mx-5 hover:text-white focus:outline-none ease-in-out duration-200  ">
                  Back
                </button>
              </a>
              <a href="technology">
                <button className="text-gray-400 lg:text-[24px] md:text-[18px] mb-5 md:text-left text-center mx-2 hover:text-white focus:outline-none ease-in-out duration-200  ">
                  Next
                </button>
              </a>
            </div>
          </div>
          <div className="lg:mt-[80px] lg:justify-center lg:items-center lg:w-[1110px] lg:flex-row md:w-[688px]  md:flex md:flex-col md:justify-center md:items-center w-[327px] h-full grid grid-rows-2  ">
            <div className="flex justify-center items-center  ">
              <div
                className={` lg:text-start lg:justify-around lg:items-start lg:w-[539px] lg:h-[734px] md:w-[512px] md:h-[305px] w-[327px] h-[245px]  flex flex-col items-center   text-center ${
                  fade ? "fade-enter" : "fade-enter-active"
                }`}
              >
                <div>
                  <h2 className=" lg:text-[24px] md:text-[18px] uppercase text-gray-400">
                    {crewMember.role}
                  </h2>
                  <h1 className=" lg:text-[42px] md:text-[32px] uppercase text-[24px]  mb-5">
                    {crewMember.name}
                  </h1>
                  <p className="md:text-[18px] mx-[10px] text-[#D0D6F9] h-[164px]">
                    {crewMember.bio}
                  </p>
                </div>
                <div className=" lg: lg:bottom-4 lg:space-x-6   space-x-4 md:mt-0 mt-8 ">
                  {data.crew.map((crew, index) => (
                    <button
                      key={index}
                      onClick={() => handleCrewChange(crew)}
                      className={`lg:w-4 lg:h-4 w-3 h-3 rounded-full  duration-200 ${
                        crewMember.name === crew.name
                          ? "bg-white scale-125"
                          : "bg-gray-500 hover:bg-white"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div
              className={` lg:flex lg:flex-col   lg:w-[539px] lg:h-[734px] md:w-[512px] md:h-[305px]  w-[271px]  mx-auto flex flex-col items-center justify-center mt-9 ${
                fade ? "fade-enter" : "fade-enter-active"
              }`}
            >
              <img
                src={imageCrew[crewMember.imageKey]}
                alt={crewMember.name}
                className=" lg:w-[380px] lg:h-[460px] md:absolute md:bottom-0    md:w-[346px] md:h-[400px] lg:mb-[280px] md:mb-0 mb-3 w-full   "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
