import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
function PageNotFound() {
  return (
    <>
      <Container>
        <div
          className=" d-flex flex-column justify-content-center align-items-center "
          style={{ height: "70vh" }}
        >
          <h1>Page Not found</h1>
          <img src="/img/404_Error_cat.svg" alt="404 error" width={300} />
          <p className=" text-center ">
            <Link to="">Click here </Link> to go to home page{" "}
          </p>
        </div>
      </Container>
    </>
  );
}

export default PageNotFound;
