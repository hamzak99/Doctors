import React from "react";
import { doctors } from "../../assets/assets";
import { useParams } from "react-router-dom";
import DoctorCard from "../Home/TopDoctorsList";

function filterSpeciality(doctor) {
  return doctor.speciality === speciality;
}

const ListDoctors = () => {
  const { speciality } = useParams();

  const filteredDoctors = speciality
    ? doctors.filter((doctor) => doctor.speciality === speciality)
    : doctors;

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 px-3">
      {/* {console.log(filteredDoctors)} */}
      {filteredDoctors.map((doctor, index) => (
        <DoctorCard key={doctor._id} {...doctor} />
      ))}
    </div>
  );
};

export default ListDoctors;
