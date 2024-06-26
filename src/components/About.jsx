import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 sm:pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Sean, nice to meet you. Please take a look around</p>
          </div>
          <div>
            <p>
              I'm a recent graduate from the University of California, Santa
              Cruz, where I earned a degree in Technology Information
              Management. Currently immersed in the world of full-stack web
              development, I specialize in crafting user-friendly applications
              that seamlessly integrate front-end and back-end technologies. My
              dedication to clean and efficient code is matched by my commitment
              to staying on the cutting edge of technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
