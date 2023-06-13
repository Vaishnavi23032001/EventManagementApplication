import React, { useState } from "react";
import { Link } from "react-router-dom";
import { validateEmail } from "./utils";
import "./forgotpassword.css";

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
    return <p className="email-fielderror-forgetpassword">Email should be proper format</p>;
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
          <h1 className="forgot-password-heading">Forgot Password</h1>
          <label className="email">Email</label>
          <br />
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
          <br />
          <label className="email">Username</label>
          <br />
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
          <br />
          <button type="submit" className="forgot-password-button">
            <Link to="/ResetPassword">Reset Password</Link>
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
