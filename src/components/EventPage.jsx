import React, { useState } from "react";
import logo from "../assets/images.jpg";
import "./eventpage.css";
import { BsPersonFill } from "react-icons/bs";

const EventPage = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
  }

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
            placeholder="Search here"
            onChange={handleChange}
            value={searchInput}
          />
        </div>
        <div className="person-menu">
          <a href="" tar>
            <BsPersonFill className="menu" />
          </a>
        </div>
      </nav>
      <section className="table-section">
      <h1>Upcoming Events</h1>
        <div>
          <table>
            <tr>
              <th>Image</th>
              <th>Events</th>
              <th>Information</th>
              <th>Date & Time</th>
              <th>Location</th>
              <th>Cost</th>
            </tr>
            <div>
              <tr>
                <td>{}</td>
                <td>{}</td>
              </tr>
            </div>
          </table>
        </div>
      </section>
    </>
  );
};

export default EventPage;
