import React, { useState, useEffect } from "react";
import "../style/addevent.css";
import { Link, useParams } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { toast, ToastContainer } from "react-toastify";
import { getEvent,updateEvent } from '../api/eventApi';

function UpdateEvent() {
  const [eventName, setEventName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [seat, setSeat] = useState("");
  const { eventId } = useParams();

  useEffect(() => {
    const handleEdit = async () => {
      try {
        const eventData = await getEvent(eventId);
        setEventName(eventData.name);
        setDate(eventData.date);
        setTime(eventData.time);
        setLocation(eventData.location);
        setSeat(eventData.totalSeats);
      } catch (error) {
        console.error(error);
      }
    };
    handleEdit(eventId);
  }, [eventId]);

  const handleEventSubmit = async (e) => {
    e.preventDefault();
    try {
      const eventData = {
        name: eventName,
        date: date,
        time: time,
        location: location,
        totalSeats: seat,
      };
      const response = await updateEvent(eventId, eventData);
      console.log('Event updated successfully:', response);
      toast.success('Event updated successfully');
    } 
    catch (error) {
      toast.error("Error updating event");
    }
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
      <ToastContainer/>
    </>
  );
}

export default UpdateEvent;
