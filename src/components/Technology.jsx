import React, { useState } from "react";
import techd from "../assets/technology/background-technology-desktop.jpg";
import techt from "../assets/technology/background-technology-tablet.jpg";
import techm from "../assets/technology/background-technology-mobile.jpg";
import data from "../components/data.json";

// Import technology images
import launchVehiclePortrait from "../assets/technology/image-launch-vehicle-portrait.jpg";
import launchVehicleLandscape from "../assets/technology/image-launch-vehicle-landscape.jpg";
import spaceportPortrait from "../assets/technology/image-spaceport-portrait.jpg";
import spaceportLandscape from "../assets/technology/image-spaceport-landscape.jpg";
import spaceCapsulePortrait from "../assets/technology/image-space-capsule-portrait.jpg";
import spaceCapsuleLandscape from "../assets/technology/image-space-capsule-landscape.jpg";

// Map technology images
const technologyImages = {
  "Launch vehicle": {
    portrait: launchVehiclePortrait,
    landscape: launchVehicleLandscape,
  },
  Spaceport: {
    portrait: spaceportPortrait,
    landscape: spaceportLandscape,
  },
  "Space capsule": {
    portrait: spaceCapsulePortrait,
    landscape: spaceCapsuleLandscape,
  },
};

export const Technology = () => {
  // State for the currently selected technology index
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Get current technology data
  const currentTechnology = data.technology[selectedIndex];
  const { name, description } = currentTechnology;

  return (
    <div className="w-full h-full flex justify-center items-center text-white">
      <div>
        {/* Background Images */}
        <img
          className="absolute top-0 left-0 w-full h-svh object-cover -z-10 md:mx-auto lg:block hidden"
          src={techd}
          alt="home-desk"
        />
        <img
          className="absolute top-0 left-0 w-full h-svh object-cover -z-10 md:mx-auto md:block lg:hidden"
          src={techt}
          alt="tablet"
        />
        <img
          className="absolute top-0 left-0 w-full h-svh object-cover -z-10 md:mx-auto sm:block md:hidden"
          src={techm}
          alt="mobile"
        />
      </div>

      {/* Content Section */}
      <div className="  flex lg:items-end  lg:max-w-[1440px] lg:h-full md:max-w-[768px] md:h-full max-w-[375px] h-[792px]  flex-col justify-between  items-center  relative z-10 p-4 ">
        <div className=" lg:w-[1270px] lg:h-[792px] md:w-[688px] md:h-[848px] w-[327px] h-[720px]  flex flex-col justify-between">
          <div className="flex justify-between">
            <h2 className="lg:text-left lg:text-[24px] md:text-[18px] text-white mb-5 md:text-left text-center">
              <span className="text-gray-600 pr-2 pb-10">03</span>
              SPACE LAUNCH 101
            </h2>
            <div className=" md:block  hidden">
              <a href="crew">
                <button className="text-gray-400 lg:text-[24px] md:text-[18px] mb-5 md:text-left text-center mx-5 hover:text-white focus:outline-none ease-in-out duration-200  ">
                  Back
                </button>
              </a>
            </div>
          </div>
          <div className="lg:flex lg:flex-row-reverse lg:justify-center lg:items-center ">
            <div className="lg:w-[608px] lg:h-[734px]   flex justify-center items-center">
              <img
                src={technologyImages[name].portrait}
                alt={name}
                className=" lg:w-[608px] lg:h-[600px] md:w-[688px] md:h-[421px] w-full h-auto mb-4 object-cover"
              />
            </div>
            {/* Numbered Buttons */}
            <div className="  flex lg:flex-row flex-col lg:w-[635px] lg:h-[304px] ">
              <div className="flex lg:flex-col lg:space-x-0 lg:space-y-4 justify-center space-x-4 mb-4 ">
                {data.technology.map((_, index) => (
                  <button
                    key={index}
                    className={`lg:w-20 lg:h-20 lg:text-[20px] md:text-[18px] md:w-12 md:h-12 w-8 h-8 rounded-full border border-white flex items-center justify-center duration-300 ${
                      index === selectedIndex
                        ? "bg-white text-black"
                        : "bg-transparent text-white"
                    }`}
                    onClick={() => setSelectedIndex(index)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              {/* Technology Description */}
              <div className="lg:text-left text-center lg:my-5 lg:mx-10 md:mx-[150px]">
                <h3 className="uppercase mb-2 lg:text-2xl md:text-xl text-lg text-gray-700">
                  The Terminology...
                </h3>
                <h4 className=" uppercase lg:text-4xl md:text-3xl text-3xl mb-4">
                  {name}
                </h4>
                <p className="lg:text-xl  lg:mx-0 lg:mb-0  text-sm mx-3 mb-5">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
