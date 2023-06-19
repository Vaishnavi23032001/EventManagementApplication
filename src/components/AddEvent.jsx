import React, { useState } from "react";
import "../style/addevent.css";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
function AddEvent() {
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
    clearForm();
  };
  const clearForm = () => {
    setEventName("");
    setDate("");
    setTime("");
    setLocation("");
    setSeat("");
    setLeftSeat("");
  };
  return (
    <>
      <div className="addevent">
        <div className="add-event-page">
          <form onSubmit={handleEventSubmit}>
            <Link to="/AdminPage" className="cross-btn">
              <ImCross />
            </Link>
            <h1>ADD EVENT</h1>
            <label htmlFor="eventName">Event Name</label>
            <input
              type="text"
              id="eventName"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              required
            />

            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />

            <label htmlFor="time">Time:</label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />

            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
            <label htmlFor="leftseat">Left Seat</label>
            <input
              type="number"
              id="seat"
              value={leftseat}
              onChange={(e) => setLeftSeat(e.target.value)}
              required
            />
            <label htmlFor="seat">Total Seat</label>
            <input
              type="number"
              id="seat"
              value={seat}
              onChange={(e) => setSeat(e.target.value)}
              required
            />

            <div className="add-event-button">
              <button type="submit">Add Event</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddEvent;
