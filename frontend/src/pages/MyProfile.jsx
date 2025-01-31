import React, { useEffect } from "react";
import { assets } from "../assets/assets";
import ProfileImg from "../components/MyProfile/ProfileImg";
import FieldList from "../components/MyProfile/FieldList";

const MyProfile = () => {
  const [userData, setUserData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    setUserData({
      name: "Edward Vincent",
      profileImg: assets.profile_pic,
      email: "richardjameswap@gmail.com",
      phone: "+1  123 456 7890",
      address: `57th Cross, Richmond 
      Circle, Church Road, London`,
      gender: "Male",
      dob: "20 July, 2024",
    });
    setLoading(true);
  }, []);

  if (!loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ProfileImg userData={userData} />
      <div className="space-y-4">
        <h1 className="text-3xl font-semibold mt-10 pb-4">{userData.name}</h1>
        <hr />
        <h2 className="underline font-normal text-[16px] text-[#797979]">
          CONTACT INFORMATION
        </h2>
        <FieldList
          color={"#3C96FF"}
          field={"Email id:"}
          data={userData.email}
        />
        <FieldList color={"#3C96FF"} field={"Phone:"} data={userData.phone} />
        <FieldList
          color={"#6B7280"}
          field={"Address:"}
          data={userData.address}
        />
        <h2 className="underline font-normal text-[16px] text-[#797979]">
          BASIC INFORMATION
        </h2>
        <FieldList color={"#6B7280"} field={"Gender:"} data={userData.gender} />
        <FieldList
          color={"#6B7280"}
          field={"Date of Birth:"}
          data={userData.dob}
        />
        <button className="border-[1px] px-7 rounded-3xl mr-4 border-[#5F6FFF] font-normal text-[18px] py-2">
          Edit
        </button>
        <button className="border-[1px] px-7 rounded-3xl border-[#5F6FFF] font-normal text-[18px] py-2">
          Save information
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
