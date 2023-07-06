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
          <Link className="menu-item" to="/AdminPage">
            Home
          </Link>
          <Link className="menu-item" to="/AdminProfile">
            Profile
          </Link>
          <Link className="menu-item" to="/UserList">
            User List
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
    </>
  );
}

export default Sidebar;
