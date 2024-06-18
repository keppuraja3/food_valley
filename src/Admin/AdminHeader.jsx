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
import "./css/admin.css";

function AdminHeader() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

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
              <li className="nav-item d-grid align-items-center">
                <div className="profile-dropdown">
                  <button className="profile-button" onClick={toggleDropdown}>
                    <img
                      src="/img/administrator.png"
                      alt="Profile"
                      className="profile-pic"
                    />
                    <span className="profile-name text-light">Admin</span>
                  </button>
                  {isOpen && (
                    <div className="dropdown-menu">
                      <a href="/profile" className="dropdown-item">
                        Profile
                      </a>
                      <a href="/settings" className="dropdown-item">
                        Settings
                      </a>
                      <a href="/logout" className="dropdown-item">
                        Logout
                      </a>
                    </div>
                  )}
                </div>
              </li>
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
