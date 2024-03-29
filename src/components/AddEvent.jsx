import React, { useEffect, useState } from "react";
import "../style/addevent.css";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { toast, ToastContainer } from "react-toastify";
import { addEvent } from "../api/eventApi";
import { useNavigate } from "react-router-dom";

function AddEvent() {
  const [eventName, setEventName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [totalseat, setTotalSeat] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") && localStorage.getItem("role") === "USER") {
      navigate("/LoginForm");
    }
  }, []);
  const id=localStorage.getItem("userId");
  const handleEventSubmit = async (e) => {
    e.preventDefault();
    const eventsData = {
      name: eventName,
      date: date,
      time: time,
      location: location,
      totalSeats: totalseat,
      createdBy: id,
    };
    
    try {
      const response = await addEvent(eventsData);
      console.log("Event added successfully:", response);
      toast.success("Event added successfully!", { position: "top-center" });
      clearForm();
    } catch (error) {
      console.error(error);
      toast.error("Error!", { position: "top-center" });
    }
  };
  const clearForm = () => {
    setEventName("");
    setDate("");
    setTime("");
    setLocation("");
    setTotalSeat("");
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
            <label htmlFor="seat">Total Seat</label>
            <input
              type="number"
              id="seat"
              value={totalseat}
              onChange={(e) => setTotalSeat(e.target.value)}
              required
            />

            <div className="add-event-button">
              <button type="submit">Add Event</button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default AddEvent;
