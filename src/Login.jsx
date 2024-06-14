import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";
import Cookies from "universal-cookie";
import { useJwt } from "react-jwt";
import { useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";

function Login() {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const SERVER_URL = import.meta.env.VITE_SERVER_URL;
  const [token, setToken] = useState(null);
  const { decodedToken, isExpired } = useJwt(token);
  const [loggedIn, setLoggedIn] = useState(false);

  // Form Input Value variabels
  const [loginUserInput, setLoginUserInput] = useState({
    mobileNo: "",
    password: "",
  });

  // Form Input Error variables
  const [mobileNoError, setMobileNoError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [backendResponse, setBackendResponse] = useState(null);

  // Form inputed data add function
  const addUserData = (e) => {
    setLoginUserInput({ ...loginUserInput, [e.target.name]: e.target.value });
  };

  //Password show and hide -----
  const [isEyeShow, setIsEye] = useState(false);

  const ChangePassVisible = (event) => {
    if (isEyeShow === false) {
      event.target.src = "/img/eye.svg";
      event.target.width = "20";
      setIsEye(true);
      setPassType("text");
    } else {
      event.target.src = "/img/closed-eyes-dark.png";
      setIsEye(false);
      setPassType("password");
    }
  };

  // Password type changing variable--
  const [passType, setPassType] = useState("password");

  // Regex for password and email----
  const passwordPattern =
    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const emailPattern = /^[^\.\s][\w\-]+(\.[\w\-]+)*@([\w-]+\.)+[\w-]{2,}$/;

  // Form validation checking and login
  const handleSumbit = async (event) => {
    event.preventDefault();
    // console.log("Demo test");

    // Email validation condition
    if (!loginUserInput.mobileNo == "") {
      if (loginUserInput.mobileNo.length == 10) {
        setMobileNoError("");

        // Password validation condition

        if (!loginUserInput.password == "") {
          const isPasswordValid = passwordPattern.test(loginUserInput.password);
          if (isPasswordValid) {
            setPasswordError("");
            setLoading(true);
            await axios
              .post(`${SERVER_URL}/user/login`, loginUserInput)
              .then((res) => {
                setToken(res.data.token);
                localStorage.setItem("token", res.data.token);
                setLoggedIn(true);
                setBackendResponse("");
              })
              .catch((err) => {
                if (err) throw err;
                setBackendResponse(err.response.data.error);
              });
            setLoading(false);
          } else {
            setPasswordError(
              "Password must have 8 digit and one capital, one small letter, one number, one symbol"
            );
          }
        } else {
          setPasswordError("Please enter password");
        }
      } else {
        setMobileNoError("Mobile no only in 10 digits");
      }
    } else {
      setMobileNoError("Please enter mobile no");
    }
  };

  // Redirect to admin page or user page validation---
  if (loggedIn) {
    if (decodedToken.role === "admin") {
      navigate("/admin");
    } else if (decodedToken.role === "user") {
      navigate("/");
    }
  }

  return (
    <>
      <section
        style={{ margin: "10vh 0 15vh" }}
        className="container-fluid d-flex justify-contnt-center align-items-center"
        id="login-section"
      >
        <div className="row justify-content-center d-flex w-100 mx-auto p-3 p-md-0 ">
          <form
            onSubmit={handleSumbit}
            action="#"
            className="col-12 col-sm-8 col-md-6 col-lg-4 row bg-secondary border border-3 border-dark p-3 text-center d-grid gap-3"
          >
            <h1>Login</h1>
            <p className=" text-danger text-start fw-bolder my-1 ">
              {backendResponse}
            </p>
            <div className="col-12 ">
              <input
                className="form-control"
                name="mobileNo"
                type="text"
                placeholder="Enter Mobile No"
                value={loginUserInput.mobileNo}
                onChange={addUserData}
              />
              <p className=" text-danger text-start fw-bolder my-1 ">
                {mobileNoError}
              </p>
            </div>

            <div className="col-12 ">
              <div className="passwordControl">
                <input
                  name="password"
                  type={passType}
                  placeholder="Enter Password"
                  value={loginUserInput.password}
                  onChange={addUserData}
                />
                <img
                  src="/img/closed-eyes-dark.png"
                  alt="eye"
                  className=" me-1 py-2"
                  width={20}
                  onClick={ChangePassVisible}
                />
              </div>
              <p className=" text-danger text-start fw-bolder my-1 ">
                {passwordError}
              </p>
            </div>

            <div className="col-12 ">
              {loading ? (
                <button className="btn btn-danger fw-bolder py-2" type="submit">
                  <SyncLoader color="#ffffff" />
                </button>
              ) : (
                <button className="btn btn-danger fw-bolder" type="submit">
                  Login
                </button>
              )}
            </div>
            <span>
              <Link to="/forget" className="text-warning text-decoration-none ">
                {" "}
                Forget Password?
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
      {/* footer section Start */}
      <Footer />
      {/* footer section end */}
    </>
  );
}

export default Login;
