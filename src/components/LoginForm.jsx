import React, { useState } from "react";
import "./loginform.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event, field) => {
    let actualValue = event.target.value;
    setLoginDetails({
      ...loginDetails,
      [field]: actualValue,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    //validation
    if (
      loginDetails.username.trim() === "" ||
      loginDetails.password.trim() === ""
    ) {
      alert("Username or password is required.");
      return;
    }
    console.log(loginDetails);
  };
  return (
    <>
      <div className="login-body">
        <div className="loginpage">
          <form onSubmit={handleFormSubmit}>
            <h1 className="login-heading">Login</h1>
            <label className="username">
              Username <sup>*</sup>
            </label>
            <br />
            <input
              className="login-input"
              value={loginDetails.username}
              type="text"
              placeholder="username"
              onChange={(e) => handleChange(e, "username")}
            />
            <br />
            <label className="password">
              Password <sup>*</sup>
            </label>
            <br />
            <input
              className="login-input"
              value={loginDetails.password}
              type="password"
              placeholder="password"
              onChange={(e) => handleChange(e, "password")}
            />
            <br />

            <Link to="">Forget Password</Link>
            <br />

            <Link to="/SignUp">Create a new account</Link>

            <button text="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
