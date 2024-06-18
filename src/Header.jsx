import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useJwt } from "react-jwt";

function Header() {
  const location = useLocation();

  return (
    <>
      {/* <!-- navigation bar start --> */}

      <Navbar expand="lg" className="text-light navbar-dark sticky-top  p-3">
        <Container className=" nav-container">
          <Navbar.Brand>
            <Link className="navbar-brand fs-2 fw-bolder  me-sm-auto" to="/">
              <img src="./img/dish.png" height="50" width="50" alt="logo" />{" "}
              Food Valley
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            {/* <Nav className="me-auto my-2 my-lg-0"> */}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
              <li className="nav-item">
                <Link
                  className={`nav-link fw-bolder m-2 ${
                    location.pathname == "/" ? "active" : ""
                  }  `}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  to="menu"
                  className={`nav-link fw-bolder m-2  ${
                    location.pathname == "/menu" ? "active" : ""
                  }  `}
                >
                  Menu
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  to="gallery"
                  className={`nav-link fw-bolder m-2  ${
                    location.pathname == "/gallery" ? "active" : ""
                  }  `}
                >
                  Gallery
                </Link>
              </li>

              <li className="nav-item ">
                <Link
                  to="about"
                  className={`nav-link fw-bolder m-2  ${
                    location.pathname == "/about" ? "active" : ""
                  }  `}
                >
                  About
                </Link>
              </li>

              {/* login link  */}
              <li className="nav-item">
                <Link
                  to="/login"
                  className={`nav-link fw-bolder m-2  ${
                    location.pathname == "/login" ? "active" : ""
                  }  `}
                >
                  Login
                </Link>
              </li>
              {/* register link  */}
              <li className="nav-item">
                <Link
                  to="/register"
                  className={`nav-link fw-bolder m-2  ${
                    location.pathname == "/register" ? "active" : ""
                  }  `}
                >
                  Register
                </Link>
              </li>
            </ul>
            {/* </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <!-- navigation bar end --> */}
      <Outlet />
    </>
  );
}

export default Header;
