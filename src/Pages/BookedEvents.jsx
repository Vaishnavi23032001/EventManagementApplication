import React from 'react'
import logo from "../assets/images.jpg";
import Sidebar from "../components/Sidebar";

function BookedEvents() {
  return (
    <>
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="person-menu">
        <Sidebar
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
      </div>
    </nav>
    <section>
      <h1  className="table-heading">Booked Events</h1>
      
    </section>
  </>
  )
}

export default BookedEvents