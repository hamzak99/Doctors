import React from "react";
import { Link } from "react-router-dom";
import "./slideUp.css";
const SpecialityInfo = (speciality) => {
  return (
    <Link
      to={`/doctors/${speciality.speciality}`}
      onClick={() => scrollTo(0, 0)}
      className="slide-top"
    >
      <img src={speciality.image} alt="" className="w-24 h-2w-24" />
      <p className="text-xs">{speciality.speciality}</p>
    </Link>
  );
};

export default SpecialityInfo;
