import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  // Navigation variable--
  const navigate = useNavigate();

  // Register user info variable

  const [regUserInput, setRegUserInput] = useState({
    username: "",
    mobileNo: "",
    email: "",
    role: "user",
    password: "",
    password2: "",
  });

  // Register user error variables

  const [userNameError, setUserNameError] = useState("");
  const [mobileNoError, setMobileNoError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [password2Error, setPassword2Error] = useState("");

  const [backendResponse, setBackendResponse] = useState("");

  // Register user input add variable

  const addRegUserInput = (event) => {
    setRegUserInput({
      ...regUserInput,
      [event.target.name]: event.target.value,
    });
  };

  // Regex for password and email----
  const passwordPattern =
    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const emailPattern = /^[^\.\s][\w\-]+(\.[\w\-]+)*@([\w-]+\.)+[\w-]{2,}$/;

  const handleRegister = (e) => {
    e.preventDefault();

    // Username validation
    if (!regUserInput.username == "") {
      if (regUserInput.username.length >= 3) {
        setUserNameError("");

        // Mobile No validation
        if (!regUserInput.mobileNo == "") {
          if (regUserInput.mobileNo.length == 10) {
            setMobileNoError("");

            // Email validation
            if (!regUserInput.email == "") {
              const isEmailValid = regUserInput.email.match(emailPattern);
              if (isEmailValid) {
                setEmailError("");

                // Password validation
                if (!regUserInput.password == "") {
                  const isPasswordValid =
                    regUserInput.password.match(passwordPattern);
                  if (isPasswordValid) {
                    setPasswordError("");

                    // Password2 validation
                    if (!regUserInput.password2 == "") {
                      if (regUserInput.password == regUserInput.password2) {
                        setPassword2Error("");

                        // Add new user to the backend
                        axios
                          .post(`${BACKEND_URL}/user/register`, regUserInput)
                          .then((response) => {
                            navigate("/login");
                            console.log(response.data);
                            setBackendResponse("");
                          })
                          .catch((err) => {
                            console.log(err.response.data.error);
                            setBackendResponse(err.response.data.error);
                          });
                      } else {
                        setPassword2Error("Password does not match");
                      }
                    } else {
                      setPassword2Error("Please enter comfirm password");
                    }
                  } else {
                    setPasswordError(
                      "Password must have 8 digit and one capital, one small letter, one number, one symbol"
                    );
                  }
                } else {
                  setPasswordError("Please enter password");
                }
              } else {
                setEmailError("Enter Valid email address");
              }
            } else {
              setEmailError("Please enter email");
            }
          } else {
            setMobileNoError("Mobile No only in 10 digits");
          }
        } else {
          setMobileNoError("Please enter mobile no");
        }
      } else {
        setUserNameError("Username minimum have 3 characters");
      }
    } else {
      setUserNameError("Please enter username");
    }
  };

  return (
    <>
      {/* <!-- Register form section start --> */}
      <section
        style={{ margin: "10vh 0 15vh" }}
        className="container-fluid d-flex justify-contnt-center align-items-center"
        id="login-section"
      >
        <div className="row justify-content-center d-flex w-100 mx-auto ">
          <form
            onSubmit={handleRegister}
            className="col-12 col-lg-4 col-sm-6  row bg-secondary border border-3 border-dark p-3 text-center d-grid gap-3"
          >
            <h1>Create Account</h1>
            <div className=" text-danger text-start fw-bolder mt-1 mb-1">
              {backendResponse}
            </div>
            <div className="col-12">
              <input
                className="form-control"
                name="username"
                value={regUserInput.username}
                onChange={addRegUserInput}
                type="text"
                placeholder="Enter Name"
              />
              <div className=" text-danger text-start fw-bolder mt-1 mb-1">
                {userNameError}
              </div>
            </div>

            <div className="col-12 ">
              <input
                className="form-control"
                name="mobileNo"
                value={regUserInput.mobileNo}
                onChange={addRegUserInput}
                type="number"
                placeholder="Enter Mobile No"
              />
              <div className=" text-danger text-start fw-bolder mt-1 mb-1">
                {mobileNoError}
              </div>
            </div>

            <div className="col-12 ">
              <input
                className="form-control"
                name="email"
                value={regUserInput.email}
                onChange={addRegUserInput}
                type="text"
                placeholder="Enter Email"
              />
              <div className=" text-danger text-start fw-bolder mt-1 mb-1">
                {emailError}
              </div>
            </div>

            <div className="col-12 ">
              <input
                className="form-control"
                name="password"
                value={regUserInput.password}
                onChange={addRegUserInput}
                type="password"
                placeholder="Enter Password"
              />
              <div className=" text-danger text-start fw-bolder mt-1 mb-1">
                {passwordError}
              </div>
            </div>

            <div className="col-12 ">
              <input
                className="form-control"
                name="password2"
                value={regUserInput.password2}
                onChange={addRegUserInput}
                type="password"
                placeholder="Confirm Password"
              />
              <div className=" text-danger text-start fw-bolder mt-1 mb-1">
                {password2Error}
              </div>
            </div>

            <div className="col-12 ">
              <button className="btn btn-danger " type="submit">
                Create Account
              </button>
            </div>
            <span>
              Already have a Account{" "}
              <Link to="/login" className="text-warning  text-decoration-none ">
                Login
              </Link>
            </span>
          </form>
        </div>
      </section>
      {/* <!-- Register form section end --> */}
      {/* footer section Start */}
      <Footer />
      {/* footer section end */}
    </>
  );
}

export default Register;
