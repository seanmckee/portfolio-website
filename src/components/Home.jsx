import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import resume from "../assets/resume1.pdf";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Sean McKee
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Software Engineer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I'm focused on
          building responsive full-stack web applications.
        </p>
        <div className="flex">
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover: border-pink-600">
            <Link
              className="flex items-center"
              to="work"
              smooth={true}
              duration={500}
            >
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </Link>
          </button>
          <button className="ml-2 text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover: border-pink-600">
            <a href={resume} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
