import React from "react";
import HeroImage from "../assets/heroImage.png";
import { HiArrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg flex justify-center items-center h-full mx-auto flex-col px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full pt-12 md:pt-0">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I am a frontend web developer
          </h2>
          <p className="text-gray-500 max-w-md py-4">
            I have 6 months experience. I have worked on technologies like web
            3.0 and nextjs mui scss and tailwind. Currently I am looking for a
            job that gives me a opportunity to learn and grow
          </p>
          <div>
            <button className="group flex items-center text-white px-6 py-3 mx-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 w-fit cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300 ml-1">
                <HiArrowRight size={20} />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            className="rounded-2xl w-2/3 mx-auto md:w-full"
            alt="my profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
