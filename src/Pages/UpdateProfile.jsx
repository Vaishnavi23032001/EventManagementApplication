import React from "react";
import { useState, useEffect } from "react";
import "../style/updateprofile.css";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import axios from "axios";

function UpdateProfile() {
  const [fullName, setFullName] = useState({
    value: "",
    isTouched: false,
  });
  const [mobileNumber, setMobileNumber] = useState({
    value: "",
    isTouched: false,
  });

  const FullnameErrorMessage = () => {
    return (
      <p className="fielderror-signup">
        Full name should have at least 5 characters
      </p>
    );
  };
  const validateMobileNumber = (number) => {
    const mobileNumberRegex = /^[0-9]{10}$/;
    return mobileNumberRegex.test(number);
  };

  const MobileNumberErrorMessage = () => {
    return (
      <p className="fielderror-signup">Mobile number must be 10 digit number</p>
    );
  };

  const getIsFormValid = () => {
    return (
      fullName.value && fullName.value.length >= 5 &&
      validateMobileNumber(mobileNumber.value)
    );
  };

  const apiurl = process.env.REACT_APP_API_URL;
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(apiurl + "/api/users/" + userId, {
          headers: {
            "ngrok-skip-browser-warning": "111",
          },
        });
        const { fullName, mobileNumber } = response.data;
        setFullName({ value: fullName, isTouched: false });
        setMobileNumber({ value: mobileNumber, isTouched: false });
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserProfile();
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(apiurl + "/api/users/" + userId, {
        fullName: fullName.value,
        mobileNumber: mobileNumber.value,
      });
      console.log(response.data);
      alert("Update successful");
    } catch (error) {
      console.error(error);
      alert("Failed to update");
    }
  };

  return (
    <>
      <div className="update-profile-body">
        <form className="update-profile-form" onSubmit={handleFormSubmit}>
          <Link to="/UserProfile" className="cross-btn">
            <ImCross />
          </Link>
          <h1 className="heading-update-profile">Update Details</h1>

          <div className="Field">
            <label>
              Full name <sup>*</sup>
            </label>
            <input
              className="signup_input"
              value={fullName.value}
              onChange={(e) => {
                setFullName({ ...fullName, value: e.target.value });
              }}
              onBlur={() => {
                setFullName({ ...fullName, isTouched: true });
              }}
              placeholder="Full name"
            />

            {fullName.isTouched && fullName.value.length < 5 ? (
              <FullnameErrorMessage />
            ) : null}
          </div>
          <div className="Field">
            <label>
              Mobile Number <sup>*</sup>
            </label>
            <input
              className="signup_input"
              value={mobileNumber.value}
              type="text"
              onChange={(e) => {
                setMobileNumber({ ...mobileNumber, value: e.target.value });
              }}
              onBlur={() => {
                setMobileNumber({ ...mobileNumber, isTouched: true });
              }}
              placeholder="Mobile Number"
            />

            {(mobileNumber.isTouched &&
            !validateMobileNumber(mobileNumber.value) )&&
            mobileNumber.value.length < 10 ? (
              <MobileNumberErrorMessage />
            ) : null}
          </div>
          <div>
            <button
              className="update-details-button"
              type="submit"
              disabled={!getIsFormValid()}
            >
              Update
            </button>
            <Link to="/ResetPassword">
              <button className="reset-button">Reset Password</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default UpdateProfile;
