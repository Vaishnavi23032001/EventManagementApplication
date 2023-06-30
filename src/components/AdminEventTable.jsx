import React, { useState } from "react";
import "../style/userpage.css";
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getEvent } from "../api/eventApi";

const AdminEventTable = ({ events_data, onDelete }) => {
  const navigate = useNavigate();
  const handleEdit = async (eventId) => {
    try {
      const eventData = await getEvent(eventId);
      navigate(`/UpdateEvent/${eventId}`);
    } catch (error) {
      console.error(error);
    }
  };
  const handleDelete = async (eventId) => {
    onDelete(eventId);
  };
  return (
    <>
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
              <td>{item.seatsLeft}</td>
              <td>{item.totalSeats}</td>
              <td>
                <Link to="">
                  <button
                    className="update-button"
                    onClick={() => handleEdit(item.id)}
                  >
                    <AiFillEdit />
                  </button>
                </Link>
              </td>
              <td>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(item.id)}
                >
                  <AiTwotoneDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AdminEventTable;
