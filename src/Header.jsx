import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useJwt } from "react-jwt";
import { useNavigate } from "react-router-dom";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isUser, setIsUser] = useState(false);
  const token = localStorage.getItem("token");
  const { decodedToken, isExpired } = useJwt(token);
  // Notification funcations---
  const notifySuccess = (msg) => toast.success(msg);
  const notifyError = (msg) => toast.error(msg);

  const logout = () => {
    localStorage.removeItem("token");
    setIsUser(false);
    notifySuccess("Logout successfully");
    navigate("/");
  };

  useEffect(() => {
    console.log(decodedToken);
    if (decodedToken != null) {
      setIsUser(true);
    } else {
      setIsUser(false);
    }
  }, []);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      {/* <!-- navigation bar start --> */}

      <Navbar expand="lg" className="text-light navbar-dark sticky-top  p-3">
        <Container className=" nav-container">
          <Navbar.Brand>
            <Link className="navbar-brand fs-2 fw-bolder  me-sm-auto" to="/">
              <img src="/img/dish.png" height="50" width="50" alt="" /> Food
              Valley
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            {/* <Nav className="me-auto my-2 my-lg-0"> */}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
              <li className="nav-item d-flex align-items-center justify-content-center">
                <Link
                  className={`nav-link fw-bolder m-2 ${
                    location.pathname == "/" ? "active" : ""
                  }  `}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item d-flex align-items-center justify-content-center ">
                <Link
                  to="menu"
                  className={`nav-link fw-bolder m-2  ${
                    location.pathname == "/menu" ? "active" : ""
                  }  `}
                >
                  Menu
                </Link>
              </li>
              <li className="nav-item d-flex align-items-center justify-content-center ">
                <Link
                  to="gallery"
                  className={`nav-link fw-bolder m-2  ${
                    location.pathname == "/gallery" ? "active" : ""
                  }  `}
                >
                  Gallery
                </Link>
              </li>
              <li className="nav-item d-flex align-items-center justify-content-center ">
                <Link
                  to="about"
                  className={`nav-link fw-bolder m-2  ${
                    location.pathname == "/about" ? "active" : ""
                  }  `}
                >
                  About
                </Link>
              </li>

              {isUser ? (
                <li className="nav-item d-flex align-items-center justify-content-center">
                  <NavDropdown
                    title="Profile"
                    className="nav-link fw-bolder m-2"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                    <NavDropdown.Item
                      style={{ cursor: "pointer" }}
                      onClick={logout}
                      className="text-danger header-nav-dropdown"
                      href="#action/3.2"
                    >
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </li>
              ) : (
                // <li className="nav-item d-flex align-items-center justify-content-center ">
                //   <Link className={`nav-link fw-bolder m-2`}>Profile</Link>
                // </li>
                <>
                  <li className="nav-item d-flex align-items-center justify-content-center">
                    <Link
                      to="/login"
                      className={`nav-link fw-bolder m-2  ${
                        location.pathname == "/login" ? "active" : ""
                      }  `}
                    >
                      Login
                    </Link>
                  </li>
                  <li className="nav-item d-flex align-items-center justify-content-center">
                    <Link
                      to="/register"
                      className={`nav-link fw-bolder m-2  ${
                        location.pathname == "/register" ? "active" : ""
                      }  `}
                    >
                      Register
                    </Link>
                  </li>
                </>
              )}
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
