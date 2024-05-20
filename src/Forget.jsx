import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Forget() {
  return (
    <>
      {/* <!-- Forget form section start --> */}
      <section
        style={{ margin: "10vh 0 15vh" }}
        className="container-fluid d-flex justify-contnt-center align-items-center"
        id="login-section"
      >
        <div className="row justify-content-center d-flex w-100 mx-auto ">
          <form
            action="#"
            className="col-12 col-lg-4 col-sm-6  row bg-secondary border border-3 border-dark p-3 text-center d-grid gap-3"
          >
            <h2>Forgot Password</h2>

            <div className="col-12 ">
              <input
                className="form-control"
                name="login-username"
                type="text"
                placeholder="Enter Email"
                required
              />
            </div>

            <div className="col-12 ">
              <button className="btn btn-danger " type="submit">
                Get OTP
              </button>
            </div>
            <span>
              <Link
                to="/login"
                className="text-warning   text-decoration-none "
              >
                {" "}
                Back to Login
              </Link>
            </span>
            <span>
              Don't have a Account{" "}
              <Link
                to="/register"
                className="text-warning  text-decoration-none "
              >
                {" "}
                Create Account
              </Link>
            </span>
          </form>
        </div>
      </section>
      {/* <!-- login form section end --> */}
      {/* footer section Start */}
      <Footer />
      {/* footer section end */}
    </>
  );
}

export default Forget;
