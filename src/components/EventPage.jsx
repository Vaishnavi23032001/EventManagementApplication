import React, { useState } from "react";
import logo from "../assets/images.jpg";
import "./eventpage.css";
import { BsPersonFill } from "react-icons/bs";
import EventTable from "./EventTable";
import { BsSearch } from "react-icons/bs";
import Sidebar from "./Sidebar";

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
      image: "aa",
      name: "Event 1",
      datetime: "2023-06-01",
      location: "Location 1",
      cost: "100 Rs",
      seats: "100",
    },
    {
      id: 2,
      image: "aa",
      name: "Event 2",
      datetime: "2023-06-01",
      location: "Location 1",
      cost: "100 Rs",
      seats: "100",
    },
    {
      id: 3,
      image: "aa",
      name: "Event 3",
      datetime: "2023-06-01",
      location: "Location 1",
      cost: "100 Rs",
      seats: "100",
    },
    {
      id: 4,
      image: "aa",
      name: "Event 4",
      datetime: "2023-06-01",
      location: "Location 1",
      cost: "100 Rs",
      seats: "100",
    },
    // Add more event objects as needed
  ];
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
            />
            <BsSearch className="search-logo" />
          </div>
        </div>
        <div className="person-menu">
          <Sidebar
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
          />
        </div>

      
      </nav>

      <section className="table-section">
        <div>
          <h1>Upcoming Events</h1>
          {<EventTable events_data={search(events)} />}
        </div>
      </section>
    </>
  );
};

export default Event;
