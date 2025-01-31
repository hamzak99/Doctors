import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import DoctorsSpeciality from "../components/AllDoctors/DoctorsSpeciality";
import ListDoctors from "../components/AllDoctors/ListDoctors";

const Doctors = () => {
  const { speciality } = useParams();
  return (
    <>
      <p className="font-normal text-[20px] text-Text_secondary">
        Browse through the doctors specialist.
      </p>
      <div className="flex lg:flex-row flex-col mt-6">
        <DoctorsSpeciality />
        <div className="lg:w-3/4 w-full">
          <ListDoctors />
        </div>
      </div>
    </>
  );
};

export default Doctors;
