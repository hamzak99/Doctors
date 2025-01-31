import React from "react";
import { doctors } from "../../assets/assets";
import IconVerified from "../../icons/Verified";

const DoctorDescription = ({ docId, docInfo }) => {
  const doctor = doctors.find((doctor) => doctor._id === docId);
  return (
    <div className="flex flex-col lg:flex-row gap-10">
      <div className="bg-[#5F6FFF] lg:w-1/4 w-full rounded-xl">
        <img src={docInfo.image} alt={docInfo.name} />
      </div>
      <div className="lg:w-3/4 w-full space-y-4 border-2 border-[] rounded-xl py-5 pl-5 lg:pt-10 lg:pl-14">
        <h2 className="font-medium text-3xl pb-3 flex items-center gap-2">
          {docInfo.name} <IconVerified width="25" height="25" />
        </h2>
        <p className="font-normal text-[#4B5563] ">
          {docInfo.degree} - {docInfo.speciality}{" "}
          <span className="border-2 border-[#4B5563] rounded-3xl px-2 py-1 ml-2">
            {docInfo.experience}
          </span>
        </p>
        <h3>About</h3>
        <p>{docInfo.about}</p>
        <p>Appointment fee: {docInfo.fees}</p>
      </div>
    </div>
  );
};

export default DoctorDescription;
