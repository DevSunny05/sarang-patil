import React from "react";
import HeroImage from "../assets/hero.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full   bg-gradient-to-b from-black via-black to-gray-800  "
    >
      <div className="mx-auto max-w-screen-lg flex flex-col justify-center items-center h-full px-4  md:flex-row">
        <div className="flex flex-col justify-center gap-1 h-full mt-12">
          <h2 className="text-4xl lg:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="py-4 text-gray-500 max-w-md">
            An Full Stack Developer with excellent technical knowledge and
            problem-solving ability. An enthusiastic individual with highly
            motivated and leadership skills. Ability to perform under pressure
            and ready to meet deadlines. Has great adaptability to change and
            eager to learn new technologies and methodologies.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group px-6 py-3 my-2 text-white w-fit flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight className="ml-1" size={25} />
              </span>
            </Link>
          </div>
        </div>

        <div className="">
          <img
            className="rounded-xl mx-auto w-2/3 md:w-full object-cover"
            src={HeroImage}
            alt="hero"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
