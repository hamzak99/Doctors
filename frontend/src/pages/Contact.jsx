import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <h1 className="text-center text-[30px] py-3">
        CONTACT <span className="font-bold">US</span>
      </h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 ">
          <img src={assets.contact_image} alt="contact_image" />
        </div>
        <div className="md:w-2/3 w-full text-[#4B5563] pt-8 space-y-6 flex flex-col">
          <h2 className="font-medium text-[24px] ">Our OFFICE</h2>
          <p>
            54709 Willms Station <br /> Suite 350, Washington, USA
          </p>
          <p>Tel: (415) 555‑0132</p>
          <p>Email: greatstackdev@gmail.com</p>
          <h2>Careers at PRESCRIPTO</h2>
          <p>Learn more about our teams and job openings.</p>
          <button className="border-2 border-[#1F2937] px-6 py-2 bg-transparent text-black transition duration-300 ease-in-out hover:bg-black hover:text-white">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
