import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import "../style/sidebar.css";

function Sidebar() {
  
  const logout = () =>{
    // localStorage.removeItem("token");
    // localStorage.removeItem("userId");
    console.log("log out");
  }
  return (
    <>
      <div className="person-menu-1">
        <Menu>
          <Link to="/UserPage" className="menu-item">
            Home
          </Link>
          <Link className="menu-item" to="/UserProfile">
            View Profile
          </Link>
          <Link className="menu-item" to="/BookmarkEvents">
            Bookmark Events
          </Link>
          <Link className="menu-item" to="/BookedEvents">
            Booked Events
          </Link>
          <Link className="menu-item" to="/AttendedEvents">
            Attended Events
          </Link>
          <Link className="menu-item" to="/">
            <button
              onClick={logout()}
              style={{ color: "black", width: "5rem" }}
            >
              Log out
            </button>
          </Link>
        </Menu>
      </div>
    </>
  );
}

export default Sidebar;
