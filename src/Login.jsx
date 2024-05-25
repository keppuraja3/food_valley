import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";

function Login() {
  // Form Input Value variabels
  const [loginUserInput, setLoginUserInput] = useState({
    userEmail: "",
    userPassword: "",
  });

  // Form Input Error variables
  const [userEmailError, setUserEmailError] = useState("");
  const [userPasswordError, setUserPasswordError] = useState("");

  const [backendResponse, setBackendResponse] = useState("");

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
    if (!loginUserInput.userEmail == "") {
      const isEmailValid = loginUserInput.userEmail
        .toLowerCase()
        .trim()
        .match(emailPattern);
      if (isEmailValid) {
        setUserEmailError("");

        // Password validation condition

        if (!loginUserInput.userPassword == "") {
          const isPasswordValid = passwordPattern.test(
            loginUserInput.userPassword
          );
          if (isPasswordValid) {
            setUserPasswordError("");

            await axios
              .post("http://localhost:9000/user/login")
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                console.log(err.response.data.error);
                setBackendResponse(err.response.data.error);
              });
          } else {
            setUserPasswordError(
              "Password must have 8 digit and one capital, one small letter, one number, one symbol"
            );
          }
        } else {
          setUserPasswordError("Please enter password");
        }
      } else {
        setUserEmailError("Enter valid email");
      }
    } else {
      setUserEmailError("Please enter email");
    }
  };
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
                name="userEmail"
                type="text"
                placeholder="Enter Email"
                value={loginUserInput.userEmail}
                onChange={addUserData}
              />
              <p className=" text-danger text-start fw-bolder my-1 ">
                {userEmailError}
              </p>
            </div>

            <div className="col-12 ">
              <div className="passwordControl">
                <input
                  name="userPassword"
                  type={passType}
                  placeholder="Enter Password"
                  value={loginUserInput.userPassword}
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
                {userPasswordError}
              </p>
            </div>

            <div className="col-12 ">
              <button className="btn btn-danger " type="submit">
                Login
              </button>
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
