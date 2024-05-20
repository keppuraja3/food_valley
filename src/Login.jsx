import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Login() {
  // Form Input Value variabels
  const [loginUserInput, setLoginUserInput] = useState({
    userEmail: "",
    userPassword: "",
  });

  // Form Input Error variables
  const [userEmailError, setUserEmailError] = useState("");
  const [userPasswordError, setUserPasswordError] = useState("");

  // Form input Valid variables
  const [userEmailValid, setUserEmailValid] = useState(false);
  const [userPasswordValid, setUserPasswordValid] = useState(false);

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
  const handleSumbit = (event) => {
    event.preventDefault();
    // console.log("Demo test");

    // Email validation condition
    if (!loginUserInput.userEmail == "") {
      const isEmailValid = loginUserInput.userEmail
        .toLowerCase()
        .trim()
        .match(emailPattern);
      if (isEmailValid) {
        setUserEmailValid(true);
        setUserEmailError("");
      } else {
        setUserEmailError("Enter valid email");
      }
    } else {
      setUserEmailError("Please enter email");
    }

    // Password validation condition

    if (!loginUserInput.userPassword == "") {
      const isPasswordValid = loginUserInput.userPassword
        .toLowerCase()
        .trim()
        .match(passwordPattern);
      if (isPasswordValid) {
        setUserPasswordValid(true);
        setUserPasswordError("");
      } else {
        setUserPasswordError(
          "Password must have 8 digit and one capital, one small letter, one number, one symbol"
        );
      }
    } else {
      setUserPasswordError("Please enter password");
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
