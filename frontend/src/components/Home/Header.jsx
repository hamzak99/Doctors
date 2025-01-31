import { assets } from "../../assets/assets";
import React from "react";

const Header = ({ handleScroll }) => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-2">
      <div className="md:w-1/2 pl-0 xl:pl-16 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div className="flex flex-row  gap-3">
          <img
            src={assets.group_profiles}
            alt="group_profiles"
            className="rounded-full w-14 h-14  lg:w-20 "
          />
          <p className="text-white font-normal gap-3">
            Simply browse through our extensive list of trusted doctors,
            <br />
            schedule your appointment hassle-free.
          </p>
        </div>
        <a
          href="#"
          className="bg-slate-50 caret-black rounded-full flex py-4 px-6"
          onClick={handleScroll}
        >
          Book appointment <img src={assets.arrow_icon} alt="arrow" />
        </a>
      </div>
      <div className="md:w-1/2 relative ">
        <img
          className="w-full  bottom-0 h-auto rounded-lg"
          src={assets.header_img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
