// PostShare.jsx
import React, { useState, useRef } from "react";
import ProfileImage from "../../img/profileImg.jpg"; // Assuming you have a default profile image
import "./PostShare.css";
import { UilScenery, UilPlayCircle, UilLocationPoint, UilSchedule, UilTimes } from "@iconscout/react-unicons";

const PostShare = ({ onNewPost }) => {
  const [image, setImage] = useState(null);
  const [desc, setDesc] = useState(""); // Track the description
  const imageRef = useRef();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };

  const handleSharePost = () => {
    // Ensure a post is created with a description and image
    const newPost = {
      img: image ? image.image : "https://via.placeholder.com/150", // Default image if no image is added
      desc: desc || "No description provided", // Fallback description
      likes: 0, // Initialize with 0 likes
      name: "New User", // Replace with actual user name
      liked: false, // Set initial like state
    };

    // Pass the new post to the parent component (onNewPost)
    onNewPost(newPost);

    // Clear the input fields after posting
    setImage(null);
    setDesc(""); // Clear the description input
  };

  return (
    <div className="PostShare">
      <img src={ProfileImage} alt="Profile" />
      <div>
        <input
          type="text"
          placeholder="What's happening?"
          value={desc}
          onChange={(e) => setDesc(e.target.value)} // Track description input
        />
        <div className="postOptions">
          <div
            className="option"
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </div>
          <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>
          <div className="option" style={{ color: "var(--shedule)" }}>
            <UilSchedule />
            Schedule
          </div>
          <button className="button ps-button" onClick={handleSharePost}>
            Share
          </button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={image.image} alt="Preview" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
