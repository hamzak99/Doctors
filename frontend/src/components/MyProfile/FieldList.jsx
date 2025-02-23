import React from "react";

// const FieldList = ({ field, data, color, isEditing, handleChange }) => {
//   return (
//     <div>
//       <p className="font-normal inline-block text-[18px] text-[#4B5563]">
//         {field}{" "}
//       </p>
//       {isEditing ? (
//         <input
//           type="text"
//           className="border-[1px] border-[#D2D6DC] rounded-3xl px-2 py-1"
//           value={data}
//           onChange={(e) => handleChange(e.target.value)}
//         />
//       ) : (
//         <span className="text-[18px] font-normal" style={{ color: color }}>
//           {data}
//         </span>
//       )}
//     </div>
//   );
// };

const FieldList = ({ field, children }) => {
  return (
    <div>
      <p className="font-normal inline-block text-[18px] text-[#4B5563]">
        {field}{" "}
      </p>
      {children}
    </div>
  );
};

export default FieldList;
