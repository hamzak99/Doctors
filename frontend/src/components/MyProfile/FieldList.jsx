import React from "react";

//

const FieldList = ({ field, data, color }) => {
  console.log(field, data, color);
  return (
    <div>
      <p className="font-normal text-[18px] text-[#4B5563]">
        {field}{" "}
        <span className={`text-[18px] font-normal`} style={{ color: color }}>
          {data}
        </span>
      </p>
    </div>
  );
};

export default FieldList;
