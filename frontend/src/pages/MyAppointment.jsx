import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
const MyAppointment = () => {
  const { doctors } = useContext(AppContext);

  const fetchMyAppointments = async () => {};
  useEffect(() => {
    fetchMyAppointments();
  }, []);
  return (
    <div>
      <h1 className="text-[#4B5563] font-medium text-[24px] py-5">
        My appointments
      </h1>
      <hr className="pb-5" />
      <div className="space-y-3">
        {doctors.slice(0, 2).map((doctor) => (
          <div
            key={doctor._id}
            className="flex justify-between gap-2 border-b-[1px] pb-3 flex-col md:flex-row"
          >
            <div className="flex flex-col md:flex-row text-center md:text-start gap-12">
              <img
                src={doctor.image}
                alt="doctor image"
                width={200}
                className="bg-[#EAEFFF] md:w-[200px]  w-full "
              />
              <div className="flex flex-col justify-center gap-2">
                <h2 className="text-[#262626] font-medium text-[22px]">
                  {doctor.name}
                </h2>
                <p className="text-[#4B5563] font-normal text-[18px]">
                  {doctor.speciality}
                </p>
                <h3 className="text-[#4B5563] font-normal text-[18px]">
                  Adress:
                </h3>
                <p className="text-[#4B5563] font-normal text-[16px]">
                  {doctor.address.line1}
                </p>
                <p className="text-[#4B5563] font-normal text-[16px]">
                  {doctor.address.line2}
                </p>
                <h3 className="text-[#4B5563] font-medium text-[18px]">
                  Data & Time:{" "}
                  <span className="text-[#4B5563] font-normal text-[18px]">
                    25, July, 2024 | 8:30 PM
                  </span>
                </h3>
              </div>
            </div>
            <div className="flex flex-col md:justify-end items-center gap-2">
              <button className="w-2/3 md:w-full bg-transparent transition duration-300 ease-in-out hover:bg-[#5F6FFF] hover:text-white  py-3 px-9 border border-[#BABABA]">
                Pay Online
              </button>
              <button className="w-2/3 md:w-full bg-transparent transition duration-300 ease-in-out hover:bg-[#5F6FFF] hover:text-white py-3 px-9 border border-[#BABABA]">
                Cancel appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointment;
