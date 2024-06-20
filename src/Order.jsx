import axios from "axios";
import React, { useEffect, useState } from "react";
// import Accordion from "react-bootstrap/Accordion";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
// React icons --
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";

import { useNavigate } from "react-router-dom";

function Order() {
  const SERVER_URL = import.meta.env.VITE_SERVER_URL;
  const [menu, setMenu] = useState({});
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const getMenu = async () => {
    await axios
      .get(`${SERVER_URL}/menu/${id}`)
      .then((res) => {
        setMenu(res.data.menu);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    getMenu();
  }, []);
  // Notification funcations---
  const notifySuccess = async (msg) => {
    await toast.success(msg);
    await navigate("/");
  };
  const notifyError = (msg) => toast.error(msg);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      {/* <!-- Order section start --> */}
      <section className="container-fluid pb-5 mb-5" id="order-section">
        <div className="container border rounded border-secondary pt-3 mb-5 ">
          <h1 className="text-capitalize text-center">order</h1>
          <div className="row justify-content-around ">
            <div className="col-12 col-md-6  col-sm-12 col-lg-5">
              <div className="card menu-card bg-transparent border-0 m-3 text-center ">
                <span className="badge rounded-pill bg-primary fs-6 m-2 position-absolute top-0">
                  {menu.offer != null ? `${menu.offer}% off` : ""}
                </span>
                <div className="card-header bg-transparent border-0 pt-0 pb-0 p-5 position-relative ">
                  <img
                    className="img-fluid "
                    src={menu.image}
                    title={menu.name}
                    alt={menu.name}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6  col-sm-12 col-lg-5 ">
              <div className="card bg-transparent text-light border-0 fs-3 fw-bold d-flex justify-content-between align-content-center  h-75 m-3 text-center text-uppercase ">
                <span>{menu.name}</span>

                <span className="text-capitalize fw-light fs-5 ">
                  {menu.description}
                </span>

                <div className="d-flex justify-content-center align-items-center gap-2 ">
                  <span className="badge rounded-pill bg-warning text-black fs-6 m-2">
                    {menu.type}
                  </span>
                  <span className="w-25 badge bg-success rounded-pill d-flex justify-content-evenly  align-items-center">
                    <img src="/img/star.png" alt="" height="18" />
                    <span>{menu.rating}</span>
                  </span>

                  <div className="input-group " id="cart-input">
                    <span
                      className="input-group-text btn bg-light bg-opacity-75 "
                      onClick={() => {
                        count > 1 ? setCount(count - 1) : setCount(1);
                      }}
                    >
                      <FiMinus />
                    </span>

                    <input
                      type="number"
                      className="form-control border-0 text-center   "
                      placeholder="Enter no of order"
                      value={count}
                      readOnly
                    />
                    <span
                      className="input-group-text btn bg-light  bg-opacity-75 "
                      onClick={() => setCount(count + 1)}
                    >
                      <IoMdAdd />
                    </span>
                  </div>
                </div>

                <div className="d-flex justify-content-evenly  ">
                  <button className="btn bg-danger  w-50 m-2  fs-5 fw-bolder text-center text-light  d-flex justify-content-center  align-items-center ">
                    <span id="order-price">&#8377; {count * menu.price}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      notifySuccess("Order Placed");
                    }}
                    className="btn btn-primary fs-4 fw-bolder m-2 w-50 text-light fw-bolder"
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <Accordion className="mb-3 bg-warning rounded">
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
          </Accordion> */}
        </div>
      </section>
      {/* <!-- Order section end --> */}
    </>
  );
}

export default Order;
