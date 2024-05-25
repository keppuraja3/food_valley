import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function AdminHeader() {
  const location = useLocation();
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
              <li className="nav-item">
                <Link
                  className={`nav-link fw-bolder m-2 d-flex align-items-center ${
                    location.pathname == "profile" ? "active" : ""
                  }  `}
                  to="profile"
                >
                  <img src="/img/administrator.png" alt="" width={25} />
                  <span className=" ms-1 d-none d-md-block">Admin</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link fw-bolder m-2 d-flex align-items-center`}
                >
                  <img src="/img/logout-light.png" alt="logout" width={24} />
                  <span className=" ms-1 d-none d-md-block">Logout</span>
                </Link>
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
