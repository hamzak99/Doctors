import Header from "../components/Home/Header";
import React, { useRef } from "react";
import SpecialityMenu from "../components/Home/SpecialityMenu";
import TopDoctors from "../components/Home/TopDoctors";
import BookAppointment from "../components/Home/BookAppointment";
import Footer from "../components/Home/Footer";
const Home = () => {
  const targetSectionRef = useRef(null);

  const handleScroll = () => {
    if (targetSectionRef.current) {
      targetSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Header handleScroll={handleScroll} />
      <SpecialityMenu />
      <TopDoctors ref={targetSectionRef} />
      <BookAppointment />
    </div>
  );
};

export default Home;
