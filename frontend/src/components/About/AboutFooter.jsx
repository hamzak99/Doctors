import React from "react";

const AboutFooter = () => {
  return (
    <div className="pt-16 ">
      <h1 className="text-2xl pb-6">
        Why <span className="font-extrabold ">Choose Us</span>
      </h1>
      <div className="border-2 flex md:flex-row flex-col">
        <div className="border-2 py-14 space-y-2 pl-16 pr-10">
          <h2 className="font-semibold text-[#1F2937] text-[18px]">
            Efficiency:
          </h2>
          <p className="font-light text-[#4B5563] text-[18px]">
            Streamlined appointment scheduling that fits into your busy
            lifestyle.
          </p>
        </div>
        <div className="border-2 py-14 space-y-2 pl-16 pr-10">
          <h2 className="font-semibold text-[#1F2937] text-[18px]">
            Convenience
          </h2>
          <p className="font-light text-[#4B5563] text-[18px]">
            Access to a network of trusted healthcare professionals in your
            area.
          </p>
        </div>
        <div className="border-2 py-14 space-y-2 pl-16 pr-10">
          <h2 className="font-semibold text-[#1F2937] text-[18px]">
            Personalization:
          </h2>
          <p className="font-light text-[#4B5563] text-[18px]">
            Tailored recommendations and reminders to help you stay on top of
            your health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutFooter;
