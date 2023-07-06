import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/forgotpassword.css";
import { ImCross } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [oldPassword, setoldPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [newPassword, setnewPassword] = useState({
    value: "",
    isTouched: false,
  });

  const OldPasswordErrorMessage = () => {
    return (
      <p className="new-password-fielderror">
        Password should have at least 8 characters
      </p>
    );
  };
  const NewPasswordErrorMessage = () => {
    return (
      <p className="confirm-password-fielderror">
        Password should have at least 8 characters
      </p>
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform the forgot password logic here
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/LoginForm");
    }
  }, []);

  return (
    <div className="forgot-password-body">
      <div className="forgot-password-page">
        <form onSubmit={handleSubmit}>
          <Link to="/UpdateProfile" className="cross-btn">
            <ImCross />
          </Link>
          <h1 className="forgot-password-heading">Reset Password</h1>
          <label className="email">
            Old Password<sup>*</sup>
          </label>
          <input
            className="forgot-password-input"
            type="password"
            placeholder="Old password"
            value={oldPassword.value}
            onChange={(e) => {
              setoldPassword({ ...oldPassword, value: e.target.value });
            }}
            onBlur={() => {
              setoldPassword({ ...oldPassword, isTouched: true });
            }}
          />
          {oldPassword.isTouched && oldPassword.value.length < 8 ? (
            <OldPasswordErrorMessage />
          ) : null}
          <label className="email">
            New Password<sup>*</sup>
          </label>
          <input
            className="forgot-password-input"
            type="password"
            placeholder="New Password"
            value={newPassword.value}
            onChange={(e) => {
              setnewPassword({ ...newPassword, value: e.target.value });
            }}
            onBlur={() => {
              setnewPassword({ ...newPassword, isTouched: true });
            }}
          />
          {newPassword.isTouched && newPassword.value.length < 8 ? (
            <NewPasswordErrorMessage />
          ) : null}
          <button type="submit" className="forgot-password-button">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
