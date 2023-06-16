import React from "react";
import { useState } from "react";
import "./signup.css";
import { validateEmail } from "./utils";

function SignUp() {
  const [fullName, setFullName] = useState({
    value: "",
    isTouched: false,
  });
  const [email, setEmail] = useState({
    value: "",
    isTouched: false,
  });
  const [mobileNumber, setMobileNumber] = useState({
    value: "",
    isTouched: false,
  });
  const [userName, setUserName] = useState({
    value: "",
    isTouched: false,
  });
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const FullnameErrorMessage = () => {
    return (
      <p className="fielderror-signup">
        Full name should have at least 5 characters
      </p>
    );
  };
  const EmailErrorMessage = () => {
    return <p className="fielderror-signup">Email should be proper format</p>;
  };
  const validateMobileNumber = (number) => {
    // Use a regular expression or any other validation logic to validate the mobile number format
    const mobileNumberRegex = /^[0-9]{10}$/; // Assuming the mobile number should be 10 digits long

    return mobileNumberRegex.test(number);
  };

  // const handleMobileNumberChange = (e) => {
  //   const value = e.target.value;

  //   if (validateMobileNumber(value) || value === "") {
  //     setMobileNumber(value);
  //   }
  // };
  const MobileNumberErrorMessage = () => {
    return (
      <p className="fielderror-signup">Mobile number must be 10 digit number</p>
    );
  };
  const UsernameErrorMessage = () => {
    return (
      <p className="fielderror-signup">
        Username should have at least 5 characters
      </p>
    );
  };
  const PasswordErrorMessage = () => {
    return (
      <p className="fielderror-signup">
        Password should have at least 8 characters
      </p>
    );
  };
  const getIsFormValid = () => {
    return (
      fullName.value.length >= 5 &&
      validateEmail(email.value) &&
      validateMobileNumber(mobileNumber) &&
      userName.value.length >= 5 &&
      password.value.length >= 8 &&
      role !== "role"
    );
  };

  const clearForm = () => {
    setUserName({
      value: "",
      isTouched: false,
    });
    setFullName({
      value: "",
      isTouched: false,
    });
    setMobileNumber({
      value: "",
      isTouched: false,
    });
    setEmail({
      value: "",
      isTouched: false,
    });
    setPassword({
      value: "",
      isTouched: false,
    });
    setRole("role");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    //handleSubmit(e);
    if (getIsFormValid()) {
      handleSubmit(e);
    }
    // alert("Account created!");
    // clearForm();
  };

  return (
    <>
      <div className="signup-body">
        <form className="signup_form" onSubmit={handleFormSubmit}>
          <h2>Sign Up</h2>

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
              Email address <sup>*</sup>
            </label>
            <input
              className="signup_input"
              value={email.value}
              type="text"
              onChange={(e) => {
                setEmail({ ...email, value: e.target.value });
              }}
              onBlur={() => {
                setEmail({ ...email, isTouched: true });
              }}
              placeholder="Email address"
            />
            {(email.isTouched &&
            email.value.length <10 &&
            !validateEmail(email.value)) ? (
              <EmailErrorMessage />
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
                setMobileNumber({ ...mobileNumber, valuee: e.target.value });
              }}
              onBlur={() => {
                setMobileNumber({ ...mobileNumber, isTouched: true });
              }}
              placeholder="Mobile Number"
            />
            {(mobileNumber.isTouched && !validateMobileNumber(mobileNumber.value) &&
            mobileNumber.value.length <10) ? (
              <MobileNumberErrorMessage />
            ) : null}
          </div>
          <div className="Field">
            <label>
              Username<sup>*</sup>
            </label>
            <input
              className="signup_input"
              value={userName.value}
              type="text"
              onChange={(e) => {
                setUserName({ ...userName, value: e.target.value });
              }}
              onBlur={() => {
                setUserName({ ...userName, isTouched: true });
              }}
              placeholder="Username"
            />
            {userName.isTouched && userName.value.length < 5 ? (
              <UsernameErrorMessage />
            ) : null}
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input
              className="signup_input"
              value={password.value}
              type="password"
              onChange={(e) => {
                setPassword({ ...password, value: e.target.value });
              }}
              onBlur={() => {
                setPassword({ ...password, isTouched: true });
              }}
              placeholder="Password"
            />
            {password.isTouched && password.value.length < 8 ? (
              <PasswordErrorMessage />
            ) : null}
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="role">Role</option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </select>
          </div>

          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
