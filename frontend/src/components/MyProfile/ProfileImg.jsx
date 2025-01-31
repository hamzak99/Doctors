import React, { useRef } from "react";
import { assets } from "../../assets/assets";

const ProfileImg = ({ userData }) => {
  const [profileImg, setProfileImg] = React.useState(userData.profileImg);
  const fileInput = useRef(null);
  function handleChange(e) {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setProfileImg(imageUrl);
  }

  function handleImageClick() {
    fileInput.current.click();
  }
  return (
    <div>
      <img
        src={profileImg}
        alt="profile"
        onClick={handleImageClick}
        width={200}
        height={200}
        className="rounded-xl cursor-pointer object-cover"
      />
      <input
        ref={fileInput}
        type="file"
        onChange={handleChange}
        className="hidden"
      />
    </div>
  );
};

export default ProfileImg;
