import React, { useState } from "react";
import "../style/addevent.css";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
function UpdateEvent() {
  const [eventName, setEventName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [seat, setSeat] = useState("");
  const [leftseat, setLeftSeat] = useState("");

  const handleEventSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions with the event data (e.g., submit to a server)
    console.log("Event Name:", eventName);
    alert("Event Added successfully");
  };

  return (
    <>
      <div className="addevent">
        <div className="add-event-page">
          <h1>UPDATE EVENT</h1>
          <form onSubmit={handleEventSubmit}>
            <Link to="/AdminPage" className="cross-btn">
              <ImCross />
            </Link>
            <label htmlFor="eventName">Event Name</label>
            <input
              type="text"
              id="eventName"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />

            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />

            <label htmlFor="time">Time:</label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />

            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <label htmlFor="leftseat">Left Seat</label>
            <input
              type="number"
              id="seat"
              value={leftseat}
              onChange={(e) => setLeftSeat(e.target.value)}
            />
            <label htmlFor="seat">Total Seat</label>
            <input
              type="number"
              id="seat"
              value={seat}
              onChange={(e) => setSeat(e.target.value)}
            />
            <div className="add-event-button">
              <button type="submit">Update</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UpdateEvent;
