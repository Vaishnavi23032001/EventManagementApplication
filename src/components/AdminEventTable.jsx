import React,{useState} from "react";
import "../style/userpage.css"
import {  AiFillEdit,AiTwotoneDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
const AdminEventTable = ({ events_data }) => {
    const handleEdit=(eventId)=>{
        console.log("Edit event - event ID:", eventId);
    }
    const handleDelete=(eventId)=>{
        console.log("Delete event - event ID:", eventId);
    }
  return (
    <table>
      <thead>
        <tr>
          <th>Event Name</th>
          <th>Date</th>
          <th>Time</th>
          <th>Location</th>
          <th>Left Seats</th>
          <th>Total Seats</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {events_data.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.date}</td>
            <td>{item.time}</td>
            <td>{item.location}</td>
            <td>{item.leftseats}</td>
            <td>{item.totalseats}</td>
            <td>
              <Link to="/UpdateEvent">
              <button className="update-button" onClick={() => handleEdit(item.id)}>
                <AiFillEdit />
              </button>
              </Link>  
            </td>
            <td>
                <button className="delete-button" onClick={() => handleDelete(item.id)}>
                <AiTwotoneDelete />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AdminEventTable;
