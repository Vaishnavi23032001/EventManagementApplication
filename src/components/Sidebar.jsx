import React, { useState } from "react";

import { slide as Menu } from "react-burger-menu";
import "./sidebar.css";

function Sidebar() {
  return (
    <>
      <div className="person-menu">
        <Menu>
          
          <a className="menu-item" href="/EventPage">
            Home
          </a>
          <a className="menu-item" href="/Profile">
            Profile
          </a>
          <a className="menu-item" href="/BookmarkEvents">
            Bookmark Events
          </a>
          <a className="menu-item" href="/BookedEvents">
            Booked Events
          </a>
          <a className="menu-item" href="/AttendedEvents">
            Attended Events
          </a>
          <a className="menu-item" href="/">
            Log out
          </a>
        </Menu>
      </div>
    </>
  );
}

export default Sidebar;
