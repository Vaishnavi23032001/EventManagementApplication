import React, { useState } from "react";
import logo from "../assets/images.jpg";
import "../style/userpage.css";
import AdminEventTable from "./AdminEventTable";
import AdminSidebar from "./AdminSidebar";
import { AiFillPlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Event = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const keys = ["name"];
  const search = (events_data) => {
    return events_data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(searchQuery))
    );
  };
  const events = [
    {
      id: 1,
      name: "Event 1",
      date: "2023-06-01",
      time: "10:00 AM",
      location: "Location 1",
      totalseats: "100",
      leftseats: "0",
    },
    {
      id: 2,
      name: "Event 2",
      date: "2023-06-01",
      time: "10:00 AM",
      location: "Location 2",
      totalseats: "100",
      leftseats: "0",
    },
    {
      id: 3,
      name: "Event 3",
      date: "2023-06-01",
      time: "10:00 AM",
      location: "Location 2",
      totalseats: "100",
      leftseats: "0",
    },
    {
      id: 4,
      name: "Event 4",
      date: "2023-06-01",
      time: "10:00 AM",
      location: "Location 4",
      totalseats: "100",
      leftseats: "0",
    },
    {
      id: 5,
      name: "Event 4",
      date: "2023-06-01",
      time: "10:00 AM",
      location: "Location 4",
      totalseats: "100",
      leftseats: "0",
    },
    {
      id: 6,
      name: "Event 4",
      date: "2023-06-01",
      time: "10:00 AM",
      location: "Location 4",
      totalseats: "100",
      leftseats: "0",
    },
  ];
  const handlePlusEvent = () => {
    console.log("add event");
  };
  return (
    <>
      <div className="event_page">
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div>
            <div>
              <input
                className="search-bar"
                type="text"
                placeholder="Search..."
                onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
              />
            </div>
          </div>
          <div className="person-menu">
            <AdminSidebar
              pageWrapId={"page-wrap"}
              outerContainerId={"outer-container"}
            />
          </div>
        </nav>

        <section className="table-section">
          <div>
            <h1 className="table-heading">Upcoming Events</h1>
            {<AdminEventTable events_data={search(events)} />}
          </div>
        </section>
        <section>
          <div id="addbutton">
            <Link to="/AddEvent">
              <button className="add-button" onClick={() => handlePlusEvent()}>
                Add Event
                {/* <AiFillPlusCircle /> */}
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Event;
