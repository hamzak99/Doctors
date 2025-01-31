import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DoctorDescription from "../components/Appointment/DoctorDescription";
import BookAppointment from "../components/Home/BookAppointment";
import BookingSlots from "../components/Appointment/BookingSlots";
import { AppContext } from "../context/AppContext";
import { getDatesForNext7Days } from "../helper/getDatesForNext7";
import RealatedDoct from "../components/Appointment/RealatedDoct";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);

  const [docInfo, setDocInfo] = useState(null);
  const [SlotIndex, setSlotIndex] = useState({ date: -1, time: -1 });
  const [docsRelated, setdocsRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDocInfo = async () => {
    const doctor = doctors.find((doctor) => doctor._id === docId);
    setDocInfo(doctor);
    setLoading(false);
  };

  function fetchDocRelated() {
    if (!docInfo) {
      console.log("docInfo is not available yet");
      return;
    }
    const docsRelated = doctors.filter(
      (doctor) => doctor.speciality === docInfo.speciality
    );
    setdocsRelated(docsRelated);
  }

  useEffect(() => {
    fetchDocInfo();
  }, [docId, doctors]);

  useEffect(() => {
    if (docInfo) {
      fetchDocRelated();
    }
  }, [doctors, docInfo]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <DoctorDescription docId={docId} docInfo={docInfo} />
      <BookingSlots Slots={{ SlotIndex, setSlotIndex }} />
      <h2 className="text-center font-medium text-3xl text-[#1F2937]">
        Related Doctors
      </h2>
      <h3 className="text-center font-medium text-lg text-[#4B5563]">
        Simply browse through our extensive list of trusted doctors.
      </h3>
      <RealatedDoct docsRelated={docsRelated} />
    </div>
  );
};

export default Appointment;
