import React, { useState } from "react";
import destenationd from "../assets/destination/background-destination-desktop.jpg";
import destenationt from "../assets/destination/background-destination-tablet.jpg";
import destenationdm from "../assets/destination/background-destination-mobile.jpg";
import data from "../components/data.json";

import moonImg from "../assets/destination/image-moon.png";
import marsImg from "../assets/destination/image-mars.png";
import europaImg from "../assets/destination/image-europa.png";
import titanImg from "../assets/destination/image-titan.png";

const imageMap = {
  moon: moonImg,
  mars: marsImg,
  europa: europaImg,
  titan: titanImg,
};

export const Destination = () => {
  const [selectedDestination, setSelectedDestination] = useState(
    data.destinations[0]
  );

  return (
    <div className="w-full h-full  flex justify-center items-center">
      <div>
        <img
          className="absolute top-0 left-0 w-full  h-svh object-cover  -z-10 md:mx-auto lg:block hidden positon"
          src={destenationd}
          alt="home-desk"
        />
        <img
          className="absolute top-0 left-0 w-full h-svh object-cover -z-10 md:mx-auto md:block lg:hidden"
          src={destenationt}
          alt="tablet"
        />
        <img
          className="absolute top-0 left-0 w-full h-svh object-cover -z-10 md:mx-auto sm:block md:hidden"
          src={destenationdm}
          alt="mobile"
        />
      </div>

      <div className="lg:w-[1440px] h-full md:w-[768px]  w-[375px]  flex justify-center items-center  ">
        <div className="lg:w-[1110px] h-full flex flex-col justify-end md:mt-5 ">
          <div className="flex justify-between mb-10 ">
            <h2 className="lg:text-[24px] md:text-[18px] text-white md:text-left mx-auto md:mx-0  ">
              <span className="text-gray-600 pr-2 ">01</span>
              PICK YOUR DESTINATION
            </h2>
            <div className=" md:block  hidden">
              <a href="/">
                <button className="text-gray-400 lg:text-[24px] md:text-[18px] mb-5 md:text-left text-center mx-5 hover:text-white focus:outline-none ease-in-out duration-200  ">
                  Back
                </button>
              </a>
              <a href="crew">
                <button className="text-gray-400 lg:text-[24px] md:text-[18px] mb-5 md:text-left text-center mx-2 hover:text-white focus:outline-none ease-in-out duration-200  ">
                  Next
                </button>
              </a>
            </div>
          </div>

          <div className="lg:w-[1110px] h-full   md:w-[668px] w-[327px] grid lg:grid-cols-2  lg:gap-4   ">
            <div className="flex justify-center items-center lg:h-[734px] md:h-[384px] md:mb-2">
              {/* Dynamic Image Based on Selected Destination */}
              <img
                src={imageMap[selectedDestination.imageKey]}
                alt={selectedDestination.name}
                className=" object-contain lg:w-[480px] h-full md:w-[300px]  w-[150px] "
              />
            </div>

            <div className="  lg:w-[445px] lg:h-[468px]    md:w-[514px] md:h-[361px] w-[327px] h-[466px]  flex flex-col justify-between  text-white  lg:mt-[133px] lg:ml-[45px] md:ml-[80px] mt-10 ">
              <div className=" space-x-8  md:flex md:justify-center lg:justify-start  md:text-center ">
                {data.destinations.map((destination, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedDestination(destination)}
                    className={`uppercase tracking-wide ${
                      selectedDestination.name === destination.name
                        ? "text-white scale-125 border-b-2 border-white"
                        : "text-gray-500"
                    } hover:text-white focus:outline-none ease-in-out duration-100 hover:border-b-2  border-gray-500`}
                  >
                    {destination.name}
                  </button>
                ))}
              </div>

              <h2 className="lg:text-[104px] md:text-[82px] text-[52px] lg:text-left  text-center uppercase ">
                {selectedDestination.name}
              </h2>
              <p className="lg:mr-8 lg:text-[18px] md:mx-0 lg:text-left  text-center mx-2 md:mb-2">
                {selectedDestination.description}
              </p>
              <hr />
              <div className="flex md:justify-between md:flex-row flex-col justify-center text-center md:mx-5">
                <div>
                  <p className="text-sm uppercase mb-2">Avg. Distance</p>
                  <p className="text-3xl mb-5">
                    {selectedDestination.distance}
                  </p>
                </div>
                <div>
                  <p className="text-sm uppercase mb-2">Est. Travel Time</p>
                  <p className="text-3xl">{selectedDestination.travel}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
