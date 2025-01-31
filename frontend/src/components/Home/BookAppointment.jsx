import React from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
const BookAppointment = () => {
  const navigateTo = useNavigate();
  return (
    <div className="bg-primary mt-20 relative rounded-lg flex lg:flex-row  flex-wrap ">
      <div className="md:w-1/2 flex flex-col lg:gap-10 gap-8  pt-20 pl-20">
        <h1 className="font-bold text-white lg:text-5xl text-3xl lg:leading-normal leading-snug">
          Book Appointment <br /> with +100 Thrusted Doctors
        </h1>
        <button
          onClick={() => navigateTo("login")}
          className="font-normal text-black bg-white px-8 py-4 rounded-full font w-fit"
        >
          Create Account
        </button>
      </div>
      <div className="md:w-1/2 relative">
        <img
          src={assets.appointment_doc_img}
          alt="appointment_doc_img"
          className="w-full  bottom-10 rounded-lg object-contain h-[90%] lg:mt-[-10%]"
        />
      </div>
    </div>
  );
};

export default BookAppointment;
