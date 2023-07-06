import React, { useState, useEffect } from "react";
import logo from "../assets/images.jpg";
import "../style/userpage.css";
import EventTable from "./EventTable";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import { getAllEvent } from "../api/eventApi";

const UserPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const keys = ["name"];
  const search = (events_data) => {
    if (!events_data) {
      return [];
    }
    return events_data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(searchQuery))
    );
  };
  const [eventsData, setEventsData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchEvents = async () => {
      if (!localStorage.getItem("token")) {
        navigate("/LoginForm");
      } else {
        try {
          const allEvents = await getAllEvent();
          setEventsData(allEvents);
        } catch (error) {
          if (error.response.status === 401 || error.response.status === 402 ||error.response.status === 403) {
            console.log("autherization error", error);
          } else {
            console.error("Error fetching events:", error);
          }
        }
      }
    };
    fetchEvents();
  }, []);

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
            <Sidebar
              pageWrapId={"page-wrap"}
              outerContainerId={"outer-container"}
            />
          </div>
        </nav>

        <section className="table-section">
          <div>
            <h1 className="table-heading">UPCOMING EVENTS</h1>
            {<EventTable events_data={search(eventsData)} />}
          </div>
        </section>
      </div>
    </>
  );
};

export default UserPage;
