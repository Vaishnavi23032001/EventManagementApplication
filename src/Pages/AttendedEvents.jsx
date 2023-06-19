import React, { useState } from "react";
import logo from "../assets/images.jpg";
import Sidebar from "../components/Sidebar";
import EventTable from "../components/EventTable";

function AttendedEvents({events_data}) {
  const [searchQuery, setSearchQuery] = useState("");
  const keys = ["name"];
  const search = (events_data) => {
    return events_data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(searchQuery))
    );
  };
  const attendedEvents = [
    {
      id: 1,
      name: "Event 1",
      date: "2023-06-01",
      time: "10:00 AM",
      location: "Location 1",
      leftseats: "100 ",
      totalseats: "100",
    },
    {
      id: 2,
      name: "Event 2",
      date: "2023-06-01",
      time: "10:00 AM",
      location: "Location 2",
      leftseats: "100 ",
      totalseats: "100",
    },
  ];
  events_data = search(attendedEvents);
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div>
          <input
            className="search-bar"
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
          />
        </div>

        <div className="person-menu">
          <Sidebar
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
          />
        </div>
      </nav>

      <section>
        <h1 className="table-heading">Attended Events</h1>
        <table>
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Location</th>
              <th>Left Seats</th>
              <th>Total Seats</th>
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
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}

export default AttendedEvents;
