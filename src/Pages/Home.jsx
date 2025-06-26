import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Hero_section from "../Components/Hero_section";
import { NavLink } from "react-router-dom";
import EarthImg from '../assets/img.webp';
const Home = () => {
  return (
    <main className="pl-30 pr-30 mt-20">
      <div className="flex items-center justify-between mb-30">
        <div className="flex flex-col items-start justify-center gap-6 w-[45%]">
          <h1 className="text-3xl font-bold ">Explore the World ,One Country at a Time</h1>
          <p>
            Discover the history, culture, and beauty of every nation.
            Sort,search, and filter through countries to find the details you
            need.
          </p>
          <NavLink to='/country'>
          <button className=" pl-3 pr-3 p-1 border flex items-center  justify-center gap-2 rounded-2xl Header-container ">
            Start Exploring <FaArrowRightLong />
          </button>
          </NavLink>
        </div>
        <div className="">
            <img width="5vw" src={EarthImg} alt="The Earth" />
        </div>
      </div>

       <h1 className='text-2xl font-bold text-center mt-10'>Here are the Interesting Facts
        <br /> we're proud of</h1>

      <Hero_section/>
    </main>
  );
};

export default Home;
