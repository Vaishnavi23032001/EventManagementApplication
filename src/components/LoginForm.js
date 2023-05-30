import React, { useState } from "react";
import "./loginform.css";
import { toast } from 'react-toastify';

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
      toast.error("Username or password is required.");
      return;
    }
    console.log(loginDetails);
  };
  return (
    <div className="loginpage">
      <form onSubmit={handleFormSubmit}>
        <h1 className="login-heading">Login</h1>
        <label className="username">
          Username <sup>*</sup>
        </label>
        <input
          value={loginDetails.username}
          type="text"
          placeholder="username"
          onChange={(e) => handleChange(e, "username")}
        />

        <label className="password">
          Password <sup>*</sup>
        </label>
        <input
          value={loginDetails.password}
          type="password"
          placeholder="password"
          onChange={(e) => handleChange(e, "password")}
        />

        <a href="#">Forget Password</a>
        <br />
        <br />
        <a href="#" to="/SignUp">
          Create a new account
        </a>
        <button text="submit" className="button">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
