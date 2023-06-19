import React, { useState } from "react";
import "../style/userpage.css";
import { BsFillBookmarkFill } from "react-icons/bs";

const EventTable = ({ events_data }) => {
  const [bookmarkEvents, setbookmarkEvents] = useState([]);
  const [bookEvents, setbookEvents] = useState([]);

  const handleBookmark = (eventId) => {
    if (bookmarkEvents.includes(eventId)) {
      // Remove the event from bookmarkEvents
      const updatedbookmarkEvents = bookmarkEvents.filter(
        (id) => id !== eventId
      );
      setbookmarkEvents(updatedbookmarkEvents);
    } else {
      // Add the event to bookmarkEvents
      setbookmarkEvents([...bookmarkEvents, eventId]);
    }
  };

  const isEventBookmarked = (eventId) => {
    return bookmarkEvents.includes(eventId);
  };

 const handleBook = (eventId) => {
    if (bookEvents.includes(eventId)) {
      // Remove the event from bookmarkEvents
      const updatedbookEvents = bookEvents.filter(
        (id) => id !== eventId
      );
      setbookEvents(updatedbookEvents);
    } else {
      // Add the event to bookmarkEvents
      setbookEvents([...bookEvents, eventId]);
    }
  };

  const isEventBooked = (eventId) => {
    return bookEvents.includes(eventId);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Event Name</th>
          <th>Date</th>
          <th>Time</th>
          <th>Location</th>
          <th>Left Seats</th>
          <th>Total Seats</th>
          <th>Bookmark</th>
          <th>Book</th>
        </tr>
      </thead>
      <tbody>
        {events_data.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.date}</td>
            <td>{item.time}</td>
            <td>{item.location}</td>
            <td>{item.leftseats}</td>
            <td>{item.totalseats}</td>
            <td>
              <button
                className={`bookmark-button ${
                  isEventBookmarked(item.id) ? "bookmarked" : ""
                }`}
                onClick={() => handleBookmark(item.id)}
              >
                <BsFillBookmarkFill />
              </button>
            </td>
            <td>
              <button 
              className={`book-button ${
                isEventBooked(item.id) ? "booked" : ""
              }`}
              onClick={() => handleBook(item.id)}>Book</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EventTable;
