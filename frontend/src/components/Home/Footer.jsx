import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="pb-8 flex flex-wrap lg:flex-row mt-20 flex-col gap-10 lg:gap-0 text-center">
      <div className="lg:w-1/2  lg:text-left text-center">
        <img src={assets.logo} alt="logo" width={320} />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </div>
      <div className="lg:w-1/4 text-left pl-20">
        <h3 className="font-semibold text-[#4B5563] text-2xl">COMPANY</h3>
        <ul className="space-y-3">
          <li className="text-[#4B5563] font-normal text-base">Home</li>
          <li className="text-[#4B5563] font-normal text-base">About us</li>
          <li className="text-[#4B5563] font-normal text-base">Contact us</li>
          <li className="text-[#4B5563] font-normal text-base">
            Privacy policy
          </li>
        </ul>
      </div>
      <div className="lg:w-1/4 text-left pl-20">
        <h3 className="font-semibold text-[#4B5563] text-2xl">GET IN TOUCH</h3>
        <ul className="space-y-5">
          <li className="text-[#4B5563] font-normal text-base">
            +1-212-456-7890
          </li>
          <li className="text-[#4B5563] font-normal text-base">
            greatstackdev@gmail.com
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
