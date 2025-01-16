import React, { useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModal.jsx/ProfileModal";

const InfoCard = () => {
  // State to store user info
  const [userInfo, setUserInfo] = useState({
    firstName: "Vivek",
    lastName: "Kumar",
    worksAt: "Persist Ventures",
    livesIn: "Gurugram",
    country: "India",
    relationshipStatus: "Single",
    profileImg: null,
    coverImg: null,
  });

  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          <UilPen
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpened(true)}
          />
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
            userInfo={userInfo}
            setUserInfo={setUserInfo} // Pass state update function
          />
        </div>
      </div>

      {/* Profile and Cover Image Display */}
      {userInfo.coverImg && (
        <img src={URL.createObjectURL(userInfo.coverImg)} alt="Cover" className="coverImage" />
      )}

      {userInfo.profileImg && (
        <img src={URL.createObjectURL(userInfo.profileImg)} alt="Profile" className="profileImage" />
      )}

      <div className="info">
        <span><b>Name: </b></span>
        <span>{userInfo.firstName} {userInfo.lastName}</span>
      </div>

      <div className="info">
        <span><b>Works at: </b></span>
        <span>{userInfo.worksAt}</span>
      </div>

      <div className="info">
        <span><b>Lives in: </b></span>
        <span>{userInfo.livesIn}, {userInfo.country}</span>
      </div>

      <div className="info">
        <span><b>Relationship Status: </b></span>
        <span>{userInfo.relationshipStatus}</span>
      </div>

      <button className="button logout-button">Logout</button>
    </div>
  );
};

export default InfoCard;
