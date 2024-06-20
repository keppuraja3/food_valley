import React from "react";
import { MdDiversity2 } from "react-icons/md";
import { useJwt } from "react-jwt";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const { decodedToken, isExpired } = useJwt(token);

  const userLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <h1>Profile</h1>

      {decodedToken ? (
        decodedToken.role == "admin" ? (
          <div>
            <div>
              <span>Name: </span>
              <span>{decodedToken.username}</span>
            </div>
            <br />
            <div>
              <span>Mobile No: </span>
              <span>{decodedToken.mobileNo}</span>
            </div>
            <br />
            <div>
              <span>Role: </span>
              <span>{decodedToken.role}</span>
            </div>
            <br />
            <div>
              <span>Email: </span>
              <span>{decodedToken.email}</span>
            </div>
            <br />
            <div>
              <span>Password: </span>
              <span>***********</span>
            </div>
            <br />
            <div className=" d-flex justify-content-center align-items-center">
              <button className="btn btn-info">Edit</button>
              <button className="btn btn-danger" onClick={userLogout}>
                Logout
              </button>
            </div>
          </div>
        ) : (
          <>{navigate("/")}</>
        )
      ) : (
        <></>
      )}
    </>
  );
}

export default Profile;
