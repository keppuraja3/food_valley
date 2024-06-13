import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";

function Users() {
  const SERVER_URL = import.meta.env.VITE_SERVER_URL;

  const [users, SetUsers] = useState([]);
  useEffect(() => {
    axios
      .get(`${SERVER_URL}/user/list`)
      .then((res) => {
        console.log(res);
        SetUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>Users</h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Username</th>
            <th>Mobile No</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.username}</td>
              <td>{user.mobileNo}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Users;
