import React, { useState } from "react";
import { TimesOpen } from "../../assets/assets";
import { getDatesForNext7Days } from "../../helper/getDatesForNext7";
import { ToastContainer, toast } from "react-toastify";

const BookingSlots = ({ Slots }) => {
  const [SlotIndex, setSlotIndex] = useState({ date: -1, time: -1 });
  function handleSelectDate(index) {
    const data = { ...Slots.SlotIndex };
    data.date = index;
    Slots.setSlotIndex(data);
  }

  function handleSelectTime(e) {
    const data = { ...Slots.SlotIndex };
    data.time = e.target.value;
    Slots.setSlotIndex(data);
  }

  function handleBookAppointment() {
    if (Slots.SlotIndex.date === -1 || Slots.SlotIndex.time === -1) {
      toast.error("Please select a date and time");
      return;
    }
    toast.success("Appointment booked successfully");
    
  }

  return (
    <div className="w-1/2 flex flex-col mx-auto space-y-2 pb-16">
      <h2 className="font-medium text-[25px] text-[#565656]">Booking slots</h2>
      <div className="flex gap-10 ">
        {getDatesForNext7Days().map((date, index) => (
          <button
            className={`bg-[${
              Slots.SlotIndex.date !== index ? "#FFFFFF" : "#5F6FFF"
            }] text-center border-2 border-[#DDDDDD] py-5 px-2 text-black rounded-full`}
            key={index}
            onClick={() => handleSelectDate(index)}
          >
            <p>{date.at(1).slice(0, 3)}</p>
            <p>{date.at(0)}</p>
          </button>
        ))}
      </div>
      <div className="flex gap-5 overflow-x-auto">
        {TimesOpen.map((time, index) => (
          <button
            value={time}
            key={index}
            onClick={(e) => handleSelectTime(e)}
            className={`bg-[${
              Slots.SlotIndex.time !== time ? "#FFFFFF" : "#5F6FFF"
            }] border-2 w-full py-1 px-5 border-[#DDDDDD] rounded-xl block text-[#4B5563] whitespace-nowrap`}
          >
            {time}
            {/* <p className="block w-full whitespace-nowrap">{time}</p> */}
          </button>
        ))}
      </div>
      <button
        onClick={handleBookAppointment}
        className=" bg-[#5F6FFF] w-1/3 rounded-3xl text-white px-6 py-3"
      >
        Book an appointment
      </button>
    </div>
  );
};

export default BookingSlots;
