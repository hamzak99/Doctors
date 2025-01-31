import React from "react";
import DoctorCard from "../Home/TopDoctorsList";

const RealatedDoct = ({ docsRelated }) => {
  if (!docsRelated) {
    return <div>No related doctors found</div>;
  }
  return (
    <div className="grid pt-10 lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-4 px-3">
      {docsRelated.slice(0, 4).map((doctor, index) => (
        <DoctorCard key={doctor._id} {...doctor} />
      ))}
    </div>
  );
};

export default RealatedDoct;
