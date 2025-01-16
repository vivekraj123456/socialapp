import React, { useState } from "react";
import "./NearbyUsers.css";

const NearbyUsers = () => {
  const [connections, setConnections] = useState({});
  const [activeChat, setActiveChat] = useState(null);
  const [messages, setMessages] = useState({});

  const users = [
    { id: 1, name: "Rohan", interests: "Technology, Music", distance: "0.5 miles" },
    { id: 2, name: "Ankush", interests: "Travel", distance: "1.2 miles" }
  ];

  const handleConnect = (userId) => {
    setConnections((prev) => ({
      ...prev,
      [userId]: !prev[userId]
    }));
  };

  const handleChat = (userId) => {
    setActiveChat(userId);
  };

  const handleCloseChat = () => {
    setActiveChat(null);
  };

  const handleSendMessage = (userId, message) => {
    if (message.trim() === "") return;

    setMessages((prev) => ({
      ...prev,
      [userId]: [...(prev[userId] || []), message]
    }));
  };

  return (
    <div className="NearbyUsers">
      <h2>Nearby Users</h2>
      {users.map((user) => (
        <div key={user.id} className="user">
          <h3>{user.name}</h3>
          <p><strong>Shared Interests:</strong> {user.interests}</p>
          <p><strong>Distance:</strong> {user.distance}</p>
          <div className="buttons">
            <button onClick={() => handleConnect(user.id)}>
              {connections[user.id] ? "Connected" : "Connect"}
            </button>
            <button onClick={() => handleChat(user.id)}>Chat</button>
          </div>
        </div>
      ))}

      {/* Floating Chat Window */}
      {activeChat && (
        <div className="chatWindow">
          <div className="chatHeader">
            <h3>Chat with {users.find(user => user.id === activeChat)?.name}</h3>
            <button className="closeChat" onClick={handleCloseChat}>X</button>
          </div>
          <div className="chatMessages">
            {(messages[activeChat] || []).map((msg, index) => (
              <p key={index} className="chatMessage">{msg}</p>
            ))}
          </div>
          <div className="chatInput">
            <input
              type="text"
              placeholder="Type a message..."
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage(activeChat, e.target.value);
                  e.target.value = "";
                }
              }}
            />
            <button onClick={() => {
              const input = document.querySelector(".chatInput input");
              handleSendMessage(activeChat, input.value);
              input.value = "";
            }}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NearbyUsers;
