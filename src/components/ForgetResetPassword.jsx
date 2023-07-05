import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/forgotpassword.css";
import { ImCross } from "react-icons/im";
const ForgetResetPassword = () => {
  const [newPassword, setnewPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [confirmPassword, setconfirmPassword] = useState({
    value: "",
    isTouched: false,
  });

  const NewPasswordErrorMessage = () => {
    return (
      <p className="new-password-fielderror">
        Password should have at least 8 characters
      </p>
    );
  };
  const ConfirmPasswordErrorMessage = () => {
    return (
      <p className="confirm-password-fielderror">
        Password should have at least 8 characters
      </p>
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    //forgot password logic here
  };

  return (
    <div className="forgot-password-body">
      <div className="forgot-password-page">
        <form onSubmit={handleSubmit}>
          <Link to="/ForgotPassword" className="cross-btn">
            <ImCross />
          </Link>
          <h1 className="forgot-password-heading">Reset Password</h1>
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
          <label className="email">
            Confirm Password<sup>*</sup>
          </label>
          <input
            className="forgot-password-input"
            type="password"
            placeholder="Confirm password"
            value={confirmPassword.value}
            onChange={(e) => {
              setconfirmPassword({ ...confirmPassword, value: e.target.value });
            }}
            onBlur={() => {
              setconfirmPassword({ ...confirmPassword, isTouched: true });
            }}
          />
          {confirmPassword.isTouched && confirmPassword.value.length < 8 ? (
            <ConfirmPasswordErrorMessage />
          ) : null}
          <button type="submit" className="forgot-password-button">
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetResetPassword;
