import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import EventTable from "./EventTable";
import "../style/userpage.css";

function SearchBar({ events }) {
  const [searchQuery, setSearchQuery] = useState("");
  const keys = ["name"];
  
  const search = (events_data) => {
    return events_data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(searchQuery))
    );
  };
  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
        />
        <BsSearch className="search-logo" />
      </div>
      
      <div>
      <h1>Upcoming Events</h1>
      {<EventTable events_data={search(events)} />}
      </div>
    </>
  );
}

export default SearchBar;
