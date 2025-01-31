import React from "react";
import { assets } from "../../assets/assets";

const AboutHeader = () => {
  return (
    <div className="flex lg:flex-row flex-col gap-9">
      <div className="lg:w-2/5 w-full">
        <img
          src={assets.about_image}
          className="w-full h-full object-fill"
          alt="about_image"
        />
      </div>
      <div className="lg:w-1/2 space-y-12 pt-2 lg:text-left text-center">
        <p className="text-[18px] leading-[32px]  text-[#4B5563] ">
          Welcome to Prescripto, your trusted partner in managing your
          healthcare needs conveniently and efficiently. At Prescripto, we
          understand the challenges individuals face when it comes to scheduling
          doctor appointments and managing their health records.
        </p>
        <p className="text-[18px] leading-[32px]  text-[#4B5563]">
          Prescripto is committed to excellence in healthcare technology. We
          continuously strive to enhance our platform, integrating the latest
          advancements to improve user experience and deliver superior service.
          Whether you're booking your first appointment or managing ongoing
          care, Prescripto is here to support you every step of the way.
        </p>
        <p className="font-bold text-[18px]">Our Vision</p>
        <p className="text-[18px] leading-[34px]  text-[#4B5563]">
          Our vision at Prescripto is to create a seamless healthcare experience
          for every user. We aim to bridge the gap between patients and
          healthcare providers, making it easier for you to access the care you
          need, when you need it.
        </p>
      </div>
    </div>
  );
};

export default AboutHeader;
