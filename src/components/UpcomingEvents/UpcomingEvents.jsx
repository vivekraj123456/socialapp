import React, { useState, useEffect, useMemo } from "react";
import "./UpcomingEvents.css";

const UpcomingEvents = () => {
  const [attending, setAttending] = useState({});
  const [expanded, setExpanded] = useState({});
  const [countdowns, setCountdowns] = useState({});

  // Memoize the events array to prevent recreation on every render
  const events = useMemo(() => [
    { id: "coffeeMeetup", name: "Coffee Meetup", date: "2025-01-15T10:00:00", location: "Local Cafe" },
    { id: "techDiscussion", name: "Tech Discussion", date: "2025-01-18T14:00:00", location: "Virtual" }
  ], []);

  useEffect(() => {
    const interval = setInterval(() => {
      const newCountdowns = {};
      events.forEach((event) => {
        const eventTime = new Date(event.date).getTime();
        const currentTime = new Date().getTime();
        const timeRemaining = eventTime - currentTime;

        if (timeRemaining > 0) {
          const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));

          newCountdowns[event.id] = `${days}d ${hours}h ${minutes}m`;
        } else {
          newCountdowns[event.id] = "Ongoing or Completed";
        }
      });
      setCountdowns(newCountdowns);
    }, 1000);

    return () => clearInterval(interval);
  }, [events]); // `events` is now stable and won't trigger unnecessary re-renders

  const toggleExpand = (eventId) => {
    setExpanded((prev) => ({ ...prev, [eventId]: !prev[eventId] }));
  };

  const handleAttend = (eventId) => {
    setAttending((prev) => ({ ...prev, [eventId]: true }));
  };

  const handleCancelAttendance = (eventId) => {
    setAttending((prev) => ({ ...prev, [eventId]: false }));
  };

  return (
    <div className="UpcomingEvents">
      <h2>Upcoming Events</h2>
      {events.map((event) => (
        <div key={event.id} className="event">
          <div className="eventHeader" onClick={() => toggleExpand(event.id)}>
            <h3>{event.name}</h3>
            <span className="countdown">{countdowns[event.id]}</span>
          </div>
          {expanded[event.id] && (
            <div className="eventDetails">
              <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()} | <strong>Time:</strong> {new Date(event.date).toLocaleTimeString()}</p>
              <p><strong>Location:</strong> {event.location}</p>
              {!attending[event.id] ? (
                <button className="attendButton" onClick={() => handleAttend(event.id)}>✅ Attend</button>
              ) : (
                <button className="cancelButton" onClick={() => handleCancelAttendance(event.id)}>❌ Cancel Attendance</button>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default UpcomingEvents;
