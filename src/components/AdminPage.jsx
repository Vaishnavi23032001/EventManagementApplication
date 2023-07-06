import React, { useState, useEffect } from "react";
import logo from "../assets/images.jpg";
import "../style/userpage.css";
import AdminEventTable from "./AdminEventTable";
import AdminSidebar from "./AdminSidebar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { deleteEvent, getAllEvent } from "../api/eventApi";

const Event = () => {
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
      if (
        localStorage.getItem("token") &&
        localStorage.getItem("role") === "USER"
      ) {
        navigate("/LoginForm");
      } else {
        try {
          const allEvents = await getAllEvent();
          setEventsData(allEvents);
        } catch (error) {
          console.error("Error fetching events:", error);
        }
      }
    };
    fetchEvents();
  }, []);

  const onDelete = async (eventId) => {
    try {
      await deleteEvent(eventId);
      setEventsData(eventsData.filter((event) => event.id !== eventId));
      toast.success("Event deleted!!", { position: "top-center" });
    } catch (error) {
      console.error("Error deleting event:", error);
      toast.error("Error!", { position: "top-center" });
    }
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
            {
              <AdminEventTable
                events_data={search(eventsData)}
                onDelete={onDelete}
              />
            }
          </div>
        </section>
        <section>
          <div id="addbutton">
            <Link to="/AddEvent">
              <button className="add-button">Add Event</button>
            </Link>
          </div>
        </section>
      </div>
      <ToastContainer />
    </>
  );
};

export default Event;
