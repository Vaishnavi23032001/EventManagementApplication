import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import "../style/sidebar.css";

function Sidebar() {
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
            Log out
          </Link>
        </Menu>
      </div>
    </>
  );
}

export default Sidebar;
