import React from "react";
import Accordion from "react-bootstrap/Accordion";

function Order() {
  return (
    <>
      {/* <!-- Order section start --> */}
      <section className="container-fluid pb-5 mb-5" id="order-section">
        <div className="container border rounded border-secondary pt-3 mb-5 ">
          <h1 className="text-capitalize text-center">order</h1>
          <div className="row justify-content-around ">
            <div className="col-12 col-md-6  col-sm-12 col-lg-5">
              <div className="card menu-card bg-transparent border-0 m-3 text-center ">
                <a href="./order.html">
                  <div className="card-header bg-transparent border-0 pt-0 pb-0 p-5 ">
                    <img
                      className="img-fluid "
                      src="./img/menu/gril_chiken_set.png"
                      title="Gril Chiken"
                      alt="gril chiken set"
                    />
                  </div>
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6  col-sm-12 col-lg-5 ">
              <div className="card bg-transparent text-light border-0 fs-3 fw-bold d-flex justify-content-between align-content-center  h-75 m-3 text-center text-uppercase ">
                <p>gril chiken</p>

                <p className="text-capitalize fw-light fs-5 ">
                  This gril chiken in made of spicy masala, good nutritions and
                  tasty chicken recipe.{" "}
                </p>

                <p className="d-flex justify-content-center align-items-center gap-2 ">
                  <span className="badge rounded-pill bg-primary fs-6 m-2">
                    20% off
                  </span>
                  <span className="w-25 badge bg-success rounded-pill d-flex justify-content-evenly  align-items-center">
                    <img src="./img/star.png" alt="" height="18" />
                    <span>4.7</span>
                  </span>

                  <div className="input-group " id="cart-input">
                    <span
                      className="input-group-text btn bg-light bg-opacity-75 "
                      id="cart-sub"
                    >
                      -
                    </span>

                    <input
                      type="number"
                      className="form-control border-0 text-center   "
                      id="order-input"
                      placeholder="Enter no of order"
                      value="1"
                    />
                    <span
                      className="input-group-text btn bg-light  bg-opacity-75 "
                      id="cart-add"
                    >
                      +
                    </span>
                  </div>
                </p>

                <div className="d-flex justify-content-evenly  ">
                  <button className="btn bg-danger  w-50 m-2  fs-5 fw-bolder text-center text-light  d-flex justify-content-center  align-items-center ">
                    <span id="order-price">&#8377; 310</span>
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger fs-4 fw-bolder m-2 w-50 text-light fw-bolder"
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Accordion className="mb-3 bg-warning rounded">
            <Accordion.Item className=" bg-dark text-light">
              <Accordion.Header>Description</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </section>
      {/* <!-- Order section end --> */}
    </>
  );
}

export default Order;
