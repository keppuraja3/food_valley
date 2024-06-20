import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import Nav from "react-bootstrap/Nav";
import axios from "axios";
import { useJwt } from "react-jwt";
import "./css/admin.css";

function Admin() {
  const [sideBarShow, setSideBarShow] = useState(false);
  const SERVER_URL = import.meta.env.VITE_SERVER_URL;
  const location = useLocation();
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const { decodedToken, isExpired } = useJwt(token);
  const isToken = () => {
    token == null && navigate("/");
  };
  useEffect(() => {
    isToken();
  }, []);

  const handleSideBarClose = () => {
    setSideBarShow(false);
  };

  const handleSideBarShow = () => setSideBarShow(true);

  return (
    <>
      <AdminHeader />

      {/* Side nav container */}
      <Offcanvas
        show={sideBarShow}
        onHide={handleSideBarClose}
        className="d-lg-none "
      >
        <Offcanvas.Header className=" d-flex text-light justify-content-between w-100 bg-dark">
          <Offcanvas.Title onClick={handleSideBarClose}>
            <Link className="navbar-brand fs-3 fw-bolder  me-sm-auto" to="">
              <img src="/img/dish.png" width="45" alt="logo" /> Food Valley
            </Link>
          </Offcanvas.Title>
          <img
            style={{ cursor: "pointer" }}
            src="/img/close.png"
            alt=""
            width={20}
            onClick={handleSideBarClose}
          />
        </Offcanvas.Header>
        <Offcanvas.Body
          className=" bg-dark"
          style={{ background: "transparent !important " }}
        >
          <Container className="p-0">
            <Nav className="me-auto sidebar-container overflow-hidden">
              <ul className=" bg-dark w-100 p-3" style={{ height: "80vh" }}>
                <li>
                  <Link
                    className={`${
                      location.pathname == "/admin" ? "active-link" : ""
                    }`}
                    onClick={handleSideBarClose}
                    to=""
                  >
                    Dashborad
                  </Link>
                </li>

                <li>
                  <Link
                    className={`${
                      location.pathname == "/admin/menu" ? "active-link" : ""
                    } `}
                    onClick={handleSideBarClose}
                    to="menu"
                  >
                    Menu
                  </Link>
                </li>

                <li>
                  <Link
                    className={`${
                      location.pathname == "/admin/management"
                        ? "active-link"
                        : ""
                    } `}
                    onClick={handleSideBarClose}
                    to="orders"
                  >
                    Orders
                  </Link>
                </li>

                <li>
                  <Link
                    className={`${
                      location.pathname == "/admin/users" ? "active-link" : ""
                    } `}
                    onClick={handleSideBarClose}
                    to="users"
                  >
                    Users
                  </Link>
                </li>

                <li>
                  <Link
                    className={`${
                      location.pathname == "/admin/profile" ? "active-link" : ""
                    } `}
                    onClick={handleSideBarClose}
                    to="profile"
                  >
                    Profile
                  </Link>
                </li>
                {/* <li>
                  <Link
                    className={`${
                      location.pathname == "/admin/report" ? "active-link" : ""
                    } `}
                    onClick={handleSideBarClose}
                    to="report"
                  >
                    Report
                  </Link>
                </li> */}
              </ul>
            </Nav>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>

      <div className=" fixed-bottom m-3 d-block d-lg-none">
        <span
          onClick={handleSideBarShow}
          className=" m-2 rounded-circle bg-light p-2 m-3 "
        >
          <img src="/img/arrow-small-right.png" alt="" width={20} />
        </span>
      </div>
      <Container fluid>
        <Row>
          <Col lg={2} className=" d-none d-lg-block pe-0">
            <div className="me-auto sidebar-container p-2">
              <ul>
                <li>
                  <Link
                    className={`${
                      location.pathname == "/admin" ? "active-link" : ""
                    } `}
                    to=""
                  >
                    Dashborad
                  </Link>
                </li>

                <li>
                  <Link
                    className={`${
                      location.pathname == "/admin/menu" ? "active-link" : ""
                    } `}
                    to="menu"
                  >
                    Menu
                  </Link>
                </li>

                <li>
                  <Link
                    className={`${
                      location.pathname == "/admin/management"
                        ? "active-link"
                        : ""
                    } `}
                    to="orders"
                  >
                    Orders
                  </Link>
                </li>

                {/* <li>
                  <Link
                    className={`${
                      location.pathname == "/admin/sales" ? "active-link" : ""
                    } `}
                    to="sales"
                  >
                    Sales
                  </Link>
                </li> */}

                <li>
                  <Link
                    className={`${
                      location.pathname == "/admin/users" ? "active-link" : ""
                    } `}
                    to="users"
                  >
                    Users
                  </Link>
                </li>

                {/* <li>
                  <Link
                    className={`${
                      location.pathname == "/admin/settings"
                        ? "active-link"
                        : ""
                    } `}
                    to="settings"
                  >
                    Settings
                  </Link>
                </li> */}

                <li>
                  <Link
                    className={`${
                      location.pathname == "/admin/profile" ? "active-link" : ""
                    } `}
                    to="profile"
                  >
                    Profile
                  </Link>
                </li>
                {/* <li>
                  <Link
                    className={`${
                      location.pathname == "/admin/report" ? "active-link" : ""
                    } `}
                    to="report"
                  >
                    Report
                  </Link>
                </li> */}
              </ul>
            </div>
          </Col>
          <Col lg={10} sm={12}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Admin;
