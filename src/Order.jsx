import React from "react";

function Order() {
  return (
    <>
      {/* <!-- Order section start --> */}
      <section className="container-fluid" id="order-section">
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
              <div className="card bg-transparent border-0 fs-3 fw-bold d-flex justify-content-between align-content-center  h-75 m-3 text-center text-uppercase ">
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

          <div
            className="accordion accordion-flush text-light m-3 mt-0"
            id="accordionFlushExample"
          >
            <div className="accordion-item bg-dark">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button rounded collapsed bg-warning text-dark fw-bolder fs-5 text-capitalize"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  description
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate, quia. Ratione ipsum nemo cum illum adipisci vitae.
                  Hic, quia velit nemo eum voluptate ut beatae facere similique
                  optio rem ipsum. Sit recusandae minima est expedita, harum
                  libero quidem ipsum rerum? Omnis fuga ducimus ratione
                  voluptatem voluptas, nulla cumque accusamus. Possimus optio
                  quos modi rerum? Veniam aliquid maxime facere deleniti
                  necessitatibus. Beatae nostrum ut quidem repudiandae illum
                  reiciendis aperiam, maiores molestias magni libero, quos, eum
                  aliquid! Earum saepe labore harum quia quam maxime nemo libero
                  provident cum illo, aut architecto quibusdam? Odit
                  exercitationem voluptatibus enim atque illum earum, vitae
                  tenetur aliquid at odio, quas assumenda dolore quia ex nostrum
                  eveniet aliquam quibusdam expedita itaque placeat sapiente
                  veniam repellendus, suscipit ut. Optio. Esse laborum sit
                  corrupti debitis! Animi recusandae quis quae magnam, rem
                  molestias consequatur assumenda velclass. This is the first
                  item's accordion body.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Order section end --> */}
    </>
  );
}

export default Order;
