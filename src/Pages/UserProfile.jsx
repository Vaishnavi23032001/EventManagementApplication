import React, { useState, useEffect } from "react";
import "../style/userprofile.css";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    username: "",
  });
  const apiurl = process.env.REACT_APP_API_URL;
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(apiurl + "/api/users/" + userId, {
          headers: {
            'ngrok-skip-browser-warning': '111'
          }
         });
        setUserProfile(response.data);
      } catch (error) {
        console.log(error);
        toast.error("Error!", { position: "top-center" });
      }
    };
    fetchUserProfile();
  }, []);
  
  
  return (
    <>
      <div className="user-profile-body">
        <div className="user-profile">
          <Link to="/UserPage" className="cross-btn">
            <ImCross />
          </Link>
          <div className="heading">
            <h1>User Profile</h1>
          </div>
          <div>
            <div className="user-details">
              <label>Full Name:</label>
              <span>{userProfile.fullName}</span>
            </div>
            <div className="user-details">
              <label>Email:</label>
              <span>{userProfile.email}</span>
            </div>
            <div className="user-details">
              <label>Mobile Number:</label>
              <span>{userProfile.mobileNumber}</span>
            </div>
            <div className="user-details">
              <label>Username:</label>
              <span>{userProfile.username}</span>
            </div>
          </div>
          <div className="update-user-button">
            <Link to="/UpdateProfile">
              <button className="update-profile-button">Update Details</button>
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default UserProfile;
