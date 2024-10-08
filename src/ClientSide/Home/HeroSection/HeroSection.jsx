/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "./hero.css";

import Navbar from "../../Shared/Navbar/Navbar";
import { MdArrowRightAlt } from "react-icons/md";

const HeroSection = () => {
  //   useEffect(() => {
  //     const handleScroll = () => {
  //       if (window.scrollY > 0) {
  //         setScrolled(true);
  //       } else {
  //         setScrolled(false);
  //       }
  //     };

  //     window.addEventListener("scroll", handleScroll);

  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);

  return (
    <div className="relative">
      <Navbar></Navbar>
      {/* mobile */}
      {/* Slider Container */}
      <div className=" md:hidden block ">
        <div className="relative ">
          <div
            style={{
              backgroundImage: `url(${"https://i.ibb.co/svGKkkx/frame-58-66cecf6f5b40e.webp"})`,
            }}
            className="
            bg-no-repeat bg-center bg-cover w-[100%] h-[80vh] xs:h-[65vh] md:h-[80vh]   lg:h-[100vh] 2xl:h-[100vh]"
          ></div>
        </div>
      </div>

      {/* Slider Container big screen*/}
      <div className="  hidden md:block ">
        <div className="relative">
          <div
            style={{
              backgroundImage: `url("https://i.ibb.co/svGKkkx/frame-58-66cecf6f5b40e.webp")`,
            }}
            className="bg-no-repeat bg-center bg-cover w-full h-[914px] flex justify-center items-center"
          ></div>
        </div>

        <div
          className="absolute inset-0 font-helvetica  
        xl:mt-[200px]  mt-[200px]  md:mt-[150px]  xs:mt-[200px]
          xl:ml-[150px]  lg:mt-[150px]
          lg:ml-[60px] md:ml-[80px]  ml-[60px] xs:lg:ml-[150px] "
        >
          <h1 className="text-white mr-[583px] xl:mr-[583px]  md:mr-[200px] xs:mr-[583px] text-[60px] xl:leading-[70px] xl:pb-[15px] lg:mr-[300px] lg:leading-[70px] lg:pb-[15px]  font-bold ">
            <span className="text-[#F6941E]">Welcome</span> to Northway Global
          </h1>
          <p className="text-white  text-[16px] font-helvetica font-normal xl:leading-[24px] xl:mr-[655px]  xl:pb-[30px] lg:leading-[24px] lg:mr-[450px]  lg:pb-[30px] md:mr-[250px]  md:leading-[24px]  md:pb-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button className="homeLargeAppoinMent flex items-center justify-between bg-[#F6941E]">
            Start Your Journey <MdArrowRightAlt />
          </button>
        </div>
        <div
          className="absolute inset-0 font-helvetica 2xl:top-[597px] xl:top-[597px] lg:top-[597px] md:top-[550px]  xl:mx-[150px]   
         2xl:mx-[150px] lg:mx-[60px] md:mx-[80px]  grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 xl:gap-x-[24px]  2xl:gap-x-[24px] lg:gap-x-[20px]
         md:gap-x-[10px]"
        >
          <div
            className="bg-white/[0.15] flex justify-center items-center xl:gap-x-[16px] xl:pl-[28px] xl:pr-[8px]  xl:py-[30px] xl:h-[140px]
            2xl:gap-x-[16px] 2xl:pl-[28px] 2xl:pr-[8px]  2xl:py-[30px] 2xl:h-[140px] lg:gap-x-[16px] lg:pl-[20px] lg:pr-[14px]  lg:py-[30px] lg:h-[140px]
            md:gap-x-[16px] md:pl-[10px] md:pr-[4px]  md:py-[30px] md:h-[140px]
          border  border-white/[0.2]  text-white"
          >
            <img
              className="xl:w-[50px] xl:h-[50px] 2xl:w-[50px] 2xl:h-[50px] lg:w-[50px] lg:h-[50px] md:w-[30px] md:h-[30px]"
              src="https://i.ibb.co/Hx6q9Ns/vector-3-66cf81d0282e5.webp"
              alt=""
            />
            <p className="herocardText">Experienced Consultants</p>
          </div>

          <div
            className="bg-white/[0.15]  border-b-[#F6941E] border-b-2 flex justify-center items-center xl:pl-[28px] xl:pr-[8px]  xl:py-[30px] xl:h-[140px]
            2xl:gap-x-[16px] 2xl:pl-[28px] 2xl:pr-[8px]  2xl:py-[30px] 2xl:h-[140px] lg:gap-x-[16px] lg:pl-[28px] lg:pr-[8px]  lg:py-[30px] lg:h-[140px]
            md:gap-x-[16px] md:pl-[10px] md:pr-[4px]  md:py-[30px] md:h-[140px] "
          >
            <img
              className="xl:w-[50px] xl:h-[50px] 2xl:w-[50px] 2xl:h-[50px] lg:w-[50px] lg:h-[50px] md:w-[30px] md:h-[30px]"
              src="https://i.ibb.co/QcBSbWw/frame-1-66cf82241ae84.webp"
              alt=""
            />
            <p className="herocardText text-[#F6941E]">98.8% Success Rate</p>
          </div>

          <div
            className="bg-white/[0.15] flex items-center xl:pl-[28px] xl:pr-[8px]  xl:py-[30px] xl:h-[140px]
            2xl:gap-x-[16px] 2xl:pl-[28px] 2xl:pr-[8px]  2xl:py-[30px] 2xl:h-[140px] lg:gap-x-[16px] lg:pl-[28px] lg:pr-[8px]  lg:py-[30px] lg:h-[140px]
            md:gap-x-[16px] md:pl-[10px] md:pr-[4px]  md:py-[30px] md:h-[140px] border  border-white/[0.2]  text-white"
          >
            <img
              className="xl:w-[50px] xl:h-[50px] 2xl:w-[50px] 2xl:h-[50px] lg:w-[50px] lg:h-[50px] md:w-[30px] md:h-[30px]"
              src="https://i.ibb.co/kJn5cHY/group-66cf8262e596a.webp"
              alt=""
            />
            <p className="herocardText2">Positive And Timely Results</p>
          </div>
          <div
            className="bg-white/[0.15] flex items-center xl:pl-[28px] xl:pr-[8px]  xl:py-[30px] xl:h-[140px]
            2xl:gap-x-[16px] 2xl:pl-[28px] 2xl:pr-[8px]  2xl:py-[30px] 2xl:h-[140px] lg:gap-x-[16px] lg:pl-[28px] lg:pr-[8px]  lg:py-[30px] lg:h-[140px]
            md:gap-x-[16px] md:pl-[10px] md:pr-[4px]  md:py-[30px] md:h-[140px] border  border-white/[0.2]  text-white"
          >
            <img
              className="xl:w-[50px] xl:h-[50px] 2xl:w-[50px] 2xl:h-[50px] lg:w-[50px] lg:h-[50px] md:w-[30px] md:h-[30px]"
              src="https://i.ibb.co/F8ZfMfM/frame-2-66cf82a790568.webp"
              alt=""
            />
            <p className="herocardText">Seamless Procedures</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
