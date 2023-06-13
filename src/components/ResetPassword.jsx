import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./forgotpassword.css";

const ForgotPassword = () => {
  const [newPassword, setnewPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [confirmPassword, setconfirmPassword] = useState({
    value: "",
    isTouched: false,
  });
  

//   const handleNewPasswordChange = (event) => {
//     setnewPassword(event.target.value);
//   };
//  const handleConfirmPasswordChange =(event) =>{
//     setconfirmPassword(event.target.value);
//  };
 const PasswordErrorMessage = () => {
  return (
    <p className="new-password-fielderror">
      Password should have at least 8 characters
    </p>
  );
};
const CofirmPasswordErrorMessage = () => {
  return (
    <p className="confirm-password-fielderror">
      Password should have at least 8 characters
    </p>
  );
};
  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform the forgot password logic here
    // Send a request to the server to reset the password for the given email address

    // Display a success or error message based on the response from the server
  };

  return (
    <div className="forgot-password-body">
      <div className="forgot-password-page">
        <form onSubmit={handleSubmit}>
          <h1 className="forgot-password-heading">Forgot Password</h1>
          <label className="email">New Password</label>
          <br />
          <input
            className="forgot-password-input"
            type="password"
            placeholder="Enter your new password"
            value={newPassword.value}
            onChange={(e) => {
              setnewPassword({ ...newPassword, value: e.target.value });
            }}
            onBlur={() => {
              setnewPassword({ ...newPassword, isTouched: true });
            }}
          />
          {newPassword.isTouched && newPassword.value.length < 8 ? (
              <PasswordErrorMessage />
            ) : null}
          <br />
          <label className="email">Confirm Password</label>
          <br />
          <input
            className="forgot-password-input"
            type="password"
            placeholder="Enter your confirm Password"
            value={confirmPassword.value}
            onChange={(e) => {
              setconfirmPassword({ ...confirmPassword, value: e.target.value });
            }}
            onBlur={() => {
              setconfirmPassword({ ...confirmPassword, isTouched: true });
            }}
          />
          {confirmPassword.isTouched && confirmPassword.value.length < 8 ? (
              <CofirmPasswordErrorMessage />
            ) : null}
          <br />
          <button type="submit" className="forgot-password-button">
            Reset Password
          </button>
        </form>
        <Link to="/" className="back-to-login">
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
