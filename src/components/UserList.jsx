import React from "react";
import "./userlist.css";
import "./userpage.css";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
function UserList() {
  return (
    <>
      <div className="userlist-page"></div>
      <Link to="/AdminPage" className="cross-btn">
        <ImCross />
      </Link>
      <h1 className="table-heading">User List</h1>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>Username</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {/* {events_data.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.date}</td>
            <td>{item.time}</td>
            <td>{item.location}</td>
            <td>{item.cost}</td>
            <td>{item.totalseats}</td>
            <td>{item.leftseats}</td>
          </tr> */}

          <tr>
            <td>John Doe</td>
            <td>johndoe@example.com</td>
            <td>1234567890</td>
            <td>johndoe</td>
            <td>Admin</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default UserList;
