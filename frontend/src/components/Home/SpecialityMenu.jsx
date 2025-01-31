import React from "react";
import { assets, specialityData } from "../../assets/assets";
import SpecialityInfo from "./SpecialityInfo";
import { forwardRef } from "react";

const SpecialityMenu = React.forwardRef((props, ref) => {
  return (
    <section className="text-center pt-20 space-y-4">
      <h2 className="caret-Text_primary font-medium text-3xl">
        Find by Speciality
      </h2>
      <p className="text-Text_secondary font-normal text-sm leading-8">
        Simply browse through our extensive list of trusted doctors, schedule
        <br />
        your appointment hassle-free.
      </p>
      <div className="flex flex-row justify-center gap-10 flex-wrap">
        {specialityData.map((speciality, index) => (
          <SpecialityInfo key={index} {...speciality} />
        ))}
      </div>
    </section>
  );
});

export default SpecialityMenu;
