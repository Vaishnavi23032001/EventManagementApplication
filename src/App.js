import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword";
import ForgetResetPassword from "./components/ForgetResetPassword";
import ResetPassword from "./components/ResetPassword";
import UserPage from "./components/UserPage";

import UserProfile from "./Pages/UserProfile";
import BookedEvents from "./Pages/BookedEvents";
import BookmarkEvents from "./Pages/BookmarkEvents";
import AttendedEvents from "./Pages/AttendedEvents";
import AdminPage from "./components/AdminPage";
import AddEvent from "./components/AddEvent";
import AdminProfile from "./components/AdminProfile";
import UserList from "./components/UserList"; 
import UpdateProfile from "./Pages/UpdateProfile";
import UpdateEvent from "./components/UpdateEvent";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/LoginForm" element={<LoginForm />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/ForgetResetPassword" element={<ForgetResetPassword />} />

          {/* <Route path="/" element={<UserPage />} /> */}
          <Route path="/UserProfile" element={<UserProfile />} />
          <Route path="/UserPage" element={<UserPage />} />
          <Route path="/BookmarkEvents" element={<BookmarkEvents />} />
          <Route path="/BookedEvents" element={<BookedEvents />} />
          <Route path="/AttendedEvents" element={<AttendedEvents />} /> 
          <Route path="/UpdateProfile" element={<UpdateProfile/>} /> 
          <Route path="/ResetPassword" element={<ResetPassword />} />

          <Route path="/" element={<AdminPage />} />
          <Route path="/AdminPage" element={<AdminPage />} />
          <Route path="/AdminProfile" element={<AdminProfile />} />
          <Route path="/userlist" element={<UserList />} />
          <Route path="/AddEvent" element={<AddEvent />} />
          <Route path="/UpdateEvent" element={<UpdateEvent />} />

        </Routes>
      </BrowserRouter>

      {/* <AdminPage/> */}
    </div>
  );
}

export default App;
