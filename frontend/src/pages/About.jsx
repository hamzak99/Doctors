import React from "react";
import { assets } from "../assets/assets";
import AboutHeader from "../components/About/AboutHeader";
import AboutFooter from "../components/About/AboutFooter";

const About = () => {
  return (
    <div>
      <h1 className="font-normal text-3xl text-center py-10">
        ABOUT <span className="font-bold">US</span>
      </h1>
      <AboutHeader />
      <AboutFooter />
    </div>
  );
};

export default About;
