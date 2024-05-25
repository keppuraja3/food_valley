import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
function sideBar(props) {
  return (
    <>
      <Container>
        <Nav className="me-auto d-grid sidebar-container">
          <li>
            <Link onClick={props.data} to="">
              Dashborad
            </Link>
          </li>
          <li onClick={props.data}>
            <Link to="profile">Profile</Link>
          </li>
          <li onClick={props.data}>
            <Link to="menu">Menu</Link>
          </li>
          <li onClick={props.data}>
            <Link to="foods">Food Management</Link>
          </li>
          <li onClick={props.data}>
            <Link to="sales">Sales</Link>
          </li>
          <li onClick={props.data}>
            <Link to="report">Report</Link>
          </li>
        </Nav>
      </Container>
    </>
  );
}

export default sideBar;
