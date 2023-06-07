import React from 'react'
import logo from "../assets/images.jpg";
import Sidebar from "../components/Sidebar";
import "../components/sidebar.css";


function BookmarkEvents() {
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
      <h1  className="table-heading">Bookmark Events</h1>
      
    </section>
  </>
  )
}

export default BookmarkEvents