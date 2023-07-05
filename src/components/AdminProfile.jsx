import React, { useState, useEffect } from "react";
import "../style/userprofile.css";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { toast, ToastContainer } from "react-toastify";
const AdminProfile = () => {
  const [adminProfile, setAdminProfile] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    username: "",
  });
  return (
    <>
      <div className="user-profile-body">
        <div className="user-profile">
          <Link to="/AdminPage" className="cross-btn">
            <ImCross />
          </Link>
          <div className="heading">
            <h1 className="heading-update-profile">Admin Profile</h1>
          </div>
          <div className="labels">
            <div className="user-details">
              <label>Full Name:</label>
              <span>{adminProfile.fullName}</span>
            </div>
            <div className="user-details">
              <label>Email:</label>
              <span>{adminProfile.email}</span>
            </div>
            <div className="user-details">
              <label>Mobile Number:</label>
              <span>{adminProfile.mobileNumber}</span>
            </div>
            <div className="user-details">
              <label>Username:</label>
              <span>{adminProfile.username}</span>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default AdminProfile;
