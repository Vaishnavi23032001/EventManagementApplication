import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import SignUp from "./components/SignUp";
import EventPage from "./components/EventPage";

import Profile from "./Pages/Profile";
import BookedEvents from "./Pages/BookedEvents";
import BookmarkEvents from "./Pages/BookmarkEvents";
import AttendedEvents from "./Pages/AttendedEvents";
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<LoginForm />} />
          <Route path="/signup" element={<SignUp />} /> */}

          <Route path="/" element={<EventPage />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/BookmarkEvents" element={<BookmarkEvents />} />
          <Route path="/BookedEvents" element={<BookedEvents />} />
          <Route path="/AttendedEvents" element={<AttendedEvents />} />  
        </Routes>
      </BrowserRouter>

      {/* <Event/> */}
    </div>
  );
}

export default App;
