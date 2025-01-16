import React, { useState } from "react";
import "./RightSide.css";
import { FaHome, FaBell, FaCommentDots, FaUsers, FaCalendarAlt } from "react-icons/fa"; // Import icons from react-icons
import TrendCard from "../TrendCard/TrendCard";
import ShareModal from "../ShareModal/ShareModal";
import UpcomingEvents from "../UpcomingEvents/UpcomingEvents";
import NotificationSettings from "../NotificationSettings/NotificationSettings";
import NearbyUsers from "../NearbyUsers/NearbyUsers"; 

const RightSide = () => {
  const [showUpcomingEvents, setShowUpcomingEvents] = useState(false);
  const [notificationModalOpened, setNotificationModalOpened] = useState(false);
  const [showNearbyUsers, setShowNearbyUsers] = useState(false);

  const handleUpcomingEventsClick = () => {
    setShowUpcomingEvents((prev) => !prev);
  };

  const openNotificationModal = () => {
    setNotificationModalOpened(true);
  };

  const closeNotificationModal = () => {
    setNotificationModalOpened(false);
  };

  const handleNearbyUsersClick = () => {
    setShowNearbyUsers((prev) => !prev);
  };

  return (
    <div className="RightSide">
      <div className="navIcons">
        <FaHome onClick={() => {}} className="navIcon" />
        <FaUsers onClick={handleNearbyUsersClick} className="navIcon" />
        <FaCalendarAlt onClick={handleUpcomingEventsClick} className="navIcon" />
        <FaBell onClick={openNotificationModal} className="navIcon" />
        <FaCommentDots className="navIcon" />
      </div>

      <TrendCard />

      {/* Conditionally render Upcoming Events section */}
      {showUpcomingEvents && <UpcomingEvents />}

      {/* NotificationSettings Modal */}
      {notificationModalOpened && (
        <NotificationSettings closeModal={closeNotificationModal} />
      )}

      {/* Conditionally render Nearby Users section */}
      {showNearbyUsers && <NearbyUsers />}
      
      <ShareModal modalOpened={false} setModalOpened={() => {}} />
    </div>
  );
};

export default RightSide;
