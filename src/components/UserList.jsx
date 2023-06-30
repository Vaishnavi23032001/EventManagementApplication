import React, { useEffect, useState } from "react";
import "../style/userlist.css";
import "../style/userpage.css";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { userlist } from "../api/userApi";

function UserList() {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    const userList = async () => {
      try {
        const response = await userlist();
        setUserList(response);
      } catch (error) {
        console.log(error);
      }
    };
    userList();
  }, []);
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
          </tr>
        </thead>
        <tbody>
          {userList.map((item) => (
            <tr key={item.id}>
              <td>{item.fullName}</td>
              <td>{item.email}</td>
              <td>{item.mobileNumber}</td>
              <td>{item.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default UserList;
