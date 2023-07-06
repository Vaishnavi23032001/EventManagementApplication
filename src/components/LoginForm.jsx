import React, { useState, useEffect } from "react";
import "../style/loginform.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { login } from "../api/userApi";

const LoginForm = () => {
  const [userName, setUserName] = useState({
    value: "",
    isTouched: false,
  });
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const navigate = useNavigate();
  const UsernameErrorMessage = () => {
    return (
      <p className="username-fielderror-login">
        Username should have at least 5 characters
      </p>
    );
  };
  const PasswordErrorMessage = () => {
    return (
      <p className="password-fielderror-login">
        Password should have at least 8 characters
      </p>
    );
  };

  const getIsFormValid = () => {
    return userName.value.length >= 5 && password.value.length >= 8;
  };

  const clearForm = () => {
    setUserName({
      value: "",
      isTouched: false,
    });
    setPassword({
      value: "",
      isTouched: false,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const userdata = {
      username: userName.value,
      password: password.value,
    };
    try {
      const response = await login(userdata);
      console.log(response);
      localStorage.setItem("token", response.token);
      localStorage.setItem("userId", response.userId);
      localStorage.setItem("role", response.role);

      if (
        localStorage.getItem("token") &&
        localStorage.getItem("role") === "USER"
      ) {
        navigate("/UserPage");
      } else if (
        localStorage.getItem("token") &&
        localStorage.getItem("role") === "ADMIN"
      ) {
        navigate("/AdminPage");
      }
      toast.success("Login successful!", { position: "top-center" });
      clearForm();
    } catch (error) {
      console.log(error);
      toast.error("Data not found!", { position: "top-center" });
    }
  };
  return (
    <>
      <div className="login-body">
        <div className="loginpage">
          <form onSubmit={handleFormSubmit}>
            <h1 className="login-heading">Login Here</h1>
            <label className="username">
              Username <sup>*</sup>
            </label>
            <br />
            <input
              className="login-input"
              value={userName.value}
              type="text"
              placeholder="username"
              onChange={(e) => {
                setUserName({ ...userName, value: e.target.value });
              }}
              onBlur={() => {
                setUserName({ ...userName, isTouched: true });
              }}
            />
            {userName.isTouched && userName.value.length < 5 ? (
              <UsernameErrorMessage />
            ) : null}

            <br />
            <label className="password">
              Password <sup>*</sup>
            </label>
            <br />
            <input
              className="login-input"
              value={password.value}
              type="password"
              placeholder="password"
              onChange={(e) => {
                setPassword({ ...password, value: e.target.value });
              }}
              onBlur={() => {
                setPassword({ ...password, isTouched: true });
              }}
            />

            {password.isTouched && password.value.length < 8 ? (
              <PasswordErrorMessage />
            ) : null}
            <br />
            <Link to="/ForgotPassword" className="forget-password">
              Forget Password
            </Link>
            <br />
            <Link to="/SignUp" className="sign-up">
              Create a new account
            </Link>

            <button
              type="submit"
              className="login-button"
              disabled={!getIsFormValid()}
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default LoginForm;
