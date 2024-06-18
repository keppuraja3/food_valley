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
        SetUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>Users</h1>
      <div className="w-100 overflow-scroll p-2">
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
      </div>
      {users.length < 1 ? (
        <div className="text-center">
          <h1 className="text-center ">No data found</h1>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Users;
