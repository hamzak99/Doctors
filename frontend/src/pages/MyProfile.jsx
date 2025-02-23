import React, { useEffect } from "react";
import { assets } from "../assets/assets";
import ProfileImg from "../components/MyProfile/ProfileImg";
import FieldList from "../components/MyProfile/FieldList";
import { validateData } from "../helper/validateData";

const InputSelect = ({ isEditing, tempData, userData, handleFieldChange }) => {
  return (
    <>
      {isEditing ? (
        <select
          className="border-[1px] border-[#D2D6DC] rounded-3xl px-2 py-1"
          value={isEditing ? tempData.gender : userData.gender}
          onChange={(e) => {
            handleFieldChange("gender", e.target.value);
          }}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      ) : (
        <span className="text-[18px] font-normal" style={{ color: "#6B7280" }}>
          {isEditing ? tempData.gender : userData.gender}
        </span>
      )}
    </>
  );
};

const MyProfile = () => {
  const [userData, setUserData] = React.useState(null);
  const [tempData, setTempData] = React.useState(null);
  const [isEditing, setIsEditing] = React.useState(false);
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
      dob: "2025-02-05",
    });
    setLoading(true);
  }, []);
  useEffect(() => {
    if (userData) {
      setTempData({ ...userData });
    }
  }, [userData]);

  function handleFieldChange(field, value) {
    setTempData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  }

  function handleBtnSave() {
    validateData(tempData);
    setUserData({ ...tempData });
  }
  function handleBtnCancel() {
    setTempData({ ...userData });
  }
  function validateData(tempData) {}
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
        <div>
          <p className="font-normal text-[18px] text-[#4B5563]">
            Email id:
            <span
              className={`text-[18px] font-normal`}
              style={{ color: "#3C96FF" }}
            >
              {userData.email}
            </span>
          </p>
        </div>
        <FieldList field={"Phone:"}>
          {isEditing ? (
            <input
              type="text"
              required
              className="border-[1px] border-[#D2D6DC] rounded-3xl px-2 py-1"
              value={isEditing ? tempData.phone : userData.phone}
              onChange={(e) => {
                handleFieldChange("phone", e.target.value);
              }}
            />
          ) : (
            <span
              className="text-[18px] font-normal"
              style={{ color: "#3C96FF" }}
            >
              {isEditing ? tempData.phone : userData.phone}
            </span>
          )}
        </FieldList>
        <FieldList field={"Address:"}>
          {isEditing ? (
            <input
              required
              type="text"
              className="border-[1px] border-[#D2D6DC] rounded-3xl px-2 py-1"
              value={isEditing ? tempData.address : userData.address}
              onChange={(e) => {
                handleFieldChange("address", e.target.value);
              }}
            />
          ) : (
            <span
              className="text-[18px] font-normal"
              style={{ color: "#6B7280" }}
            >
              {isEditing ? tempData.address : userData.address}
            </span>
          )}
        </FieldList>
        <h2 className="underline font-normal text-[16px] text-[#797979]">
          BASIC INFORMATION
        </h2>

        <FieldList field={"Gender:"}>
          <InputSelect
            isEditing={isEditing}
            tempData={tempData}
            userData={userData}
            handleFieldChange={handleFieldChange}
          />
        </FieldList>
        <FieldList field={"Date of Birth:"}>
          {isEditing ? (
            <input
              required
              type="date"
              className="border-[1px] border-[#D2D6DC] rounded-3xl px-2 py-1"
              value={isEditing ? tempData.dob : userData.dob}
              onChange={(e) => {
                handleFieldChange("dob", e.target.value);
              }}
            />
          ) : (
            <span
              className="text-[18px] font-normal"
              style={{ color: "#6B7280" }}
            >
              {isEditing ? tempData.dob : userData.dob}
            </span>
          )}
        </FieldList>
        <div className="flex space-x-4">
          {isEditing ? (
            <>
              <button
                onClick={() => {
                  handleBtnCancel();
                  setIsEditing(!isEditing);
                }}
                className="border-[1px] px-7 rounded-3xl border-[#5F6FFF] font-normal text-[18px] py-2"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  handleBtnSave();
                  setIsEditing(!isEditing);
                }}
                className="border-[1px] px-7 rounded-3xl border-[#5F6FFF] font-normal text-[18px] py-2"
              >
                Save
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="border-[1px] px-7 rounded-3xl border-[#5F6FFF] font-normal text-[18px] py-2"
            >
              Edit Information
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
