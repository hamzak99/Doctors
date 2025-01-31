import React, { useContext } from "react";
import DoctorCard from "./TopDoctorsList";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

const TopDoctors = React.forwardRef((props, ref) => {
  const { doctors } = useContext(AppContext);
  const navigateTo = useNavigate();
  return (
    <div
      ref={ref}
      className="pt-20 flex flex-col gap-4 justify-center items-center"
    >
      <h2 className="caret-Text_primary font-medium text-3xl">
        Top Doctors to Book
      </h2>
      <p className="text-Text_secondary font-normal text-sm leading-8">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-4">
        {doctors.slice(0, 10).map((doctor, index) => (
          <DoctorCard key={doctor._id} {...doctor} />
        ))}
      </div>
      <button
        onClick={() => {
          navigateTo("/doctors");
          scrollTo(0, 0);
        }}
        className="bg-[#EAEFFF] text-[#4B5563] font-normal text-sm py-2 px-8 rounded-full"
      >
        More
      </button>
    </div>
  );
});

export default TopDoctors;
