import React from "react";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/Vivek33.jpg";
import "./ProfileCard.css";

const ProfileCard = () => {
  const ProfilePage = true;  // This can be dynamically set based on whether it's a profile page or not

  return (
    <div className="ProfileCard">
      {/* Profile Images */}
      <div className="ProfileImages">
        <img src={Cover} alt="Cover" className="coverImg" />
        <img src={Profile} alt="Profile" className="profileImg" />
      </div>

      {/* Profile Name and Position */}
      <div className="ProfileName">
        <span>Vivek Kumar</span>
        <span>Full Stack Developer</span>
      </div>

      {/* Follow Status */}
      <div className="followStatus">
        <hr />
        <div className="followContainer">
          <div className="follow">
            <span>6,890</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>1</span>
            <span>Followers</span>
          </div>

          {/* Posts section, only shows if it's the profile page */}
          {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>

      {/* Link to Profile page (conditionally rendered based on ProfilePage flag) */}
      {!ProfilePage && <span>My Profile</span>}
    </div>
  );
};

export default ProfileCard;
