import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      {/* <!-- footer Section start --> */}
      <section
        id="footer-section"
        className="bg-dark container-fluid d-flex justify-content-center position-relative"
      >
        <footer className="container row mt-5 ">
          <div
            className="position-absolute bg-dark rounded-circle"
            id="footer-logo"
          >
            <img src="/img/dish.png" alt="logo" width="50" height="50" />
          </div>
          <div className="col-12 col-lg-3 col-md-6 ">
            <h4>
              Address
              <hr />
            </h4>
            <p className="text-secondary">
              172, SS Colony, <br /> Madurai Bypass Road <br /> Madurai -
              625545.
            </p>
          </div>
          <div className="col-12 col-lg-3 col-md-6 " id="contact">
            <h4>
              Contact
              <hr />
            </h4>
            <p className="text-secondary">
              Phone:{" "}
              <a href="tel:+917358905330" className="text-secondary ">
                +91 73589 05330
              </a>
            </p>
            <p className="text-secondary">
              Email:{" "}
              <a href="Mailto:foodvalley@gmail.com" className="text-secondary ">
                foodvalley@gmail.com
              </a>
            </p>
          </div>
          <div className="col-12 col-lg-3 col-md-6 ">
            <h4>
              Opening Time
              <hr />
            </h4>
            <p className="text-secondary">Mon-Sat : 09.30 AM to 10.30 PM</p>
            <p className="text-secondary">Sunday : Closed</p>
          </div>
          <div className="col-12 col-lg-3 col-md-6 ">
            <h4>
              Social Media
              <hr />
            </h4>
            <p>
              <Link to="https://www.facebook.com/" className="text-secondary ">
                Facebook
              </Link>
            </p>
            <p>
              <Link to="https://www.instagram.com/" className="text-secondary ">
                Instagram
              </Link>
            </p>
            <p>
              <Link to="https://www.youtube.com/" className="text-secondary ">
                Youtube
              </Link>
            </p>
          </div>
          <hr />
          <div className="text-center text-capitalize">
            <p>&copy; 2024 Food Valley. all rights reserved</p>
            <p>
              designed by
              <span className="text-warning "> keppuraja</span>
            </p>
          </div>
        </footer>
      </section>
      {/* <!-- footer Section end --> */}
    </>
  );
}

export default Footer;
