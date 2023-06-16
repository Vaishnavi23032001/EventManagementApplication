import React from "react";
import "./eventpage.css"
const EventTable = ({ events_data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Event No</th>
          <th>Event Name</th>
          <th>Date & Time</th>
          <th>Location</th>
          <th>Cost</th>
          <th>Seats</th>
        </tr>
      </thead>
      <tbody>
        {events_data.map((item) => (
          <tr key={item.id}>
            <td>{item.image}</td>
            <td>{item.name}</td>
            <td>{item.datetime}</td>
            <td>{item.location}</td>
            <td>{item.cost}</td>
            <td>{item.seats}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EventTable;
