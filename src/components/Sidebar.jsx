import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import "../style/sidebar.css";
import { logout } from "../api/userApi";
import { toast, ToastContainer } from "react-toastify";
function Sidebar() {
  const handleLogOut = async () =>{
    const token = localStorage.getItem("token")
    await logout(token);
    toast.success("Logout successfully!!",{ position: "top-center" });
    console.log("Logout successfully");
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
              onClick={handleLogOut}
              style={{ color: "black", width: "5rem" }}
            >
              Log out
            </button>
          </Link>
        </Menu>
      </div>
      <ToastContainer/>
    </>
  );
}

export default Sidebar;
