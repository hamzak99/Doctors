import React from "react";
import { specialityData } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const DoctorsSpeciality = () => {
  const naviagateTo = useNavigate();
  return (
    <div className="lg:w-1/4 w-full  flex   lg:flex-col  gap-5 overflow-x-scroll">
      {specialityData.map((data, index) => (
        <button
          onClick={() => naviagateTo(`/doctors/${data.speciality}`)}      
          key={index}
          className="py-3 lg:pl-6 pl-1  font-normal rounded-lg border border-[#B4B4B4] text-[16px] text-Text_secondary"
        >
          {data.speciality}
        </button>
      ))}
    </div>
  );
};

export default DoctorsSpeciality;
