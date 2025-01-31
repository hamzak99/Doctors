import React from "react";
import "./slideUp.css";
import { useNavigate } from "react-router-dom";
const DoctorCard = (doctor) => {
  const navigateTo = useNavigate();
  return (
    <div
      onClick={() => navigateTo(`/appointment/${doctor._id}`)}
      className="flex flex-col border border-[#EAEFFF] rounded-[12px] gap-2 slide-top cursor-pointer"
    >
      <div className="bg-[#EAEFFF] rounded-[12px]">
        <img src={doctor.image} alt="" />
      </div>
      <div className="pl-3 space-y-1">
        <p className="text-green-500 text-xs font-normal ">• Available </p>
        <p className="font-medium text-xl">{doctor.name}</p>
        <p className="font-normal text-sm text-[#4B5563]">
          {doctor.speciality}
        </p>
      </div>
    </div>
  );
};

export default DoctorCard;
