import React, { useState } from "react";
import { Link } from "react-router-dom";
import { validateEmail } from "./utils";
import "../style/forgotpassword.css";
import { ImCross } from "react-icons/im";
const ForgotPassword = () => {
  const [email, setEmail] = useState({
    value: "",
    isTouched: false,
  });
  const [username, setUsername] = useState({
    value: "",
    isTouched: false,
  });

  const EmailErrorMessage = () => {
    return (
      <p className="email-fielderror-forgetpassword">
        Email should be proper format
      </p>
    );
  };
  const UsernameErrorMessage = () => {
    return (
      <p className="username-fielderror-forgetpassword">
        Username should have at least 5 characters
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
          <Link to="/LoginForm" className="cross-btn">
            <ImCross />
          </Link>
          <h1 className="forgot-password-heading">Forgot Password</h1>
          <label className="email">
            Email<sup>*</sup>
          </label>
          <input
            className="forgot-password-input"
            type="email"
            placeholder="Enter your email"
            value={email.value}
            onChange={(e) => {
              setEmail({ ...email, value: e.target.value });
            }}
            onBlur={() => {
              setEmail({ ...email, isTouched: true });
            }}
          />
          {email.isTouched &&
          email.value.length < 10 &&
          !validateEmail(email.value) ? (
            <EmailErrorMessage />
          ) : null}
          <label className="email">
            Username<sup>*</sup>
          </label>
          <input
            className="forgot-password-input"
            type="username"
            placeholder="Enter your username"
            value={username.value}
            onChange={(e) => {
              setUsername({ ...username, value: e.target.value });
            }}
            onBlur={() => {
              setUsername({ ...username, isTouched: true });
            }}
          />
          {username.isTouched && username.value.length < 5 ? (
            <UsernameErrorMessage />
          ) : null}
          <Link to="/ForgetResetPassword">
            <button type="submit" className="forgot-password-button">
              Reset Password
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
