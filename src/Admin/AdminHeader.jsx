import React, { useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { IoLogOut } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function AdminHeader() {
  const location = useLocation();
  const [showProfile, setShowProfile] = useState(false);
  const target = useRef(null);
  return (
    <>
      {/* <!-- navigation bar start --> */}

      <Navbar className="text-light navbar-dark sticky-top  p-3">
        <Container fluid className=" nav-container">
          <Navbar.Brand>
            <Link className="navbar-brand fs-3 fw-bolder  me-sm-auto" to="">
              <img src="/img/dish.png" width="45" alt="logo" /> Food Valley
            </Link>
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
          <Nav>
            {/* <Nav className="me-auto my-2 my-lg-0"> */}
            <ul className="navbar-nav ms-auto mb-md-0 mb-lg-0 text-center">
              {/* <li className="nav-item">
                <Link
                  className={`nav-link fw-bolder m-2 d-flex align-items-center ${
                    location.pathname == "profile" ? "active" : ""
                  }  `}
                  to="profile"
                >
                  <img src="/img/administrator.png" alt="" width={25} />
                  <span className=" ms-1 d-none d-md-block">Admin</span>
                </Link>
              </li> */}
              {/* <li className="nav-item d-grid align-items-center">
                <div
                  className="border border-1 border-light d-flex align-items-center m-1 p-1 rounded-pill"
                  style={{ cursor: "pointer" }}
                >
                  <img src="/img/administrator.png" alt="" width={25} />

                  <span
                    ref={target}
                    onClick={() => setShowProfile(!showProfile)}
                  >
                    Admin
                  </span>
                </div>
              </li> */}
              <DropdownButton
                id="dropdown-basic-button"
                title="Admin"
                className=" me-2"
              >
                <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Change Password</Dropdown.Item>
                <Dropdown.Item className="  text-danger">
                  Logout <IoLogOut />
                </Dropdown.Item>
              </DropdownButton>
              <Button variant="outline-danger" className=" fw-bolder">
                Logout <IoLogOut />
              </Button>
            </ul>

            {/* </Nav> */}
          </Nav>
        </Container>
      </Navbar>
      {/* <!-- navigation bar end --> */}
    </>
  );
}

export default AdminHeader;
