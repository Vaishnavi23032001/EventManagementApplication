import React, { useState } from "react";
import logo from "../assets/images.jpg";
import "./userpage.css";
import EventTable from "./EventTable";
import Sidebar from "./Sidebar";

const UserPage = () => {
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
      leftseats: "100",
      totalseats: "100",
    },
    {
      id: 2,
      name: "Event 2",
      date: "2023-06-01",
      time: "10:00 AM",
      location: "Location 2",
      leftseats: "100",
      totalseats: "100",  
    },
    {
      id: 3,
      name: "Event 3",
      date: "2023-06-01",
      time:"10.00 Am",
      location: "Location 2",
      leftseats: "100",
      totalseats: "100",
    },
    {
      id: 4,
      name: "Event 4",
      date: "2023-06-01",
      time:"10.00 Am",
      location: "Location 4",
      leftseats: "100",
      totalseats: "100", 
    },
    // Add more event objects as needed
  ];
  return (
    <>
      <div className="event_page">
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div>
            <div >
              <input className="search-bar"
                type="text"
                placeholder="Search..."
                onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
              />
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
            <h1 className="table-heading">UPCOMING EVENTS</h1>
            {<EventTable events_data={search(events)} />}
          </div>
        </section>
      </div>
    </>
  );
};

export default UserPage;
