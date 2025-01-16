// src/components/NotificationSettings/NotificationSettings.jsx
import React from "react";
import "./NotificationSettings.css";  // You can add styles for the modal here

const NotificationSettings = ({ closeModal }) => {
  return (
    <div className="NotificationSettings">
      <div className="modalContent">
        <h3>Notification Settings</h3>
        <p>Manage your notifications preferences here.</p>

        {/* Example settings - you can add actual form controls */}
        <div className="settingsOption">
          <label>
            <input type="checkbox" />
            Enable notifications
          </label>
        </div>
        <div className="settingsOption">
          <label>
            <input type="checkbox" />
            Receive email alerts
          </label>
        </div>

        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default NotificationSettings;
