import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-fit bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="p-4 max-w-screen-lg  mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          An Full Stack Developer with excellent technical knowledge and
          problem-solving ability. An enthusiastic individual with highly
          motivated and leadership skills. Ability to perform under pressure and
          ready to meet deadlines. Has great adaptability to change and eager to
          learn new technologies and methodologies.
        </p>

        <br />

        <p className="text-xl">
          I have knowledge of Full Stack as well as Automation testing due to which
          I am good at technology like HTML,CSS, Javascript,React,NodeJs,Express,Mongodb,Mongoose,
          Git & Git-Hub,Tailwind,Postman,Sass,MySql and Due to Automation I also know 
          Java,seleniun,TestNg etc...
        </p>
      </div>
    </div>
  );
};

export default About;
