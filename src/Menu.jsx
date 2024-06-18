import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
function Menu() {
  const SERVER_URL = import.meta.env.VITE_SERVER_URL;

  // Toast notification
  const notifySuccess = (msg) => toast.success(msg);

  const [foodMenu, setFoodMenu] = useState([]);

  const [filteredMenu, setFilterdMenu] = useState([]);

  // Getting the menu list---
  const getMenuList = async () => {
    await axios
      .get(`${SERVER_URL}/menu`)
      .then((res) => {
        setFoodMenu(res.data);
        setFilterdMenu(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMenuList();
  }, []);

  const searchMenu = (e) => {
    const searchText = e.target.value;

    const filter = foodMenu.filter((food) => {
      if (food.name.toLowerCase().includes(searchText)) {
        return food;
      }
    });
    setFilterdMenu(filter);
  };

  // add to cart function
  const [cartItem, setCartItem] = useState([]);

  const addCart = (food) => {
    setCartItem([...cartItem, food]);
    notifySuccess(`Add to cart successfully`);
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      {/* <!-- Menu Section start --> */}
      <section id="menu-section" className="container pt-5 pb-5">
        <div className="text-center">
          <h1>Let's make your choice</h1>
        </div>

        <div className="row p-5 p-lg-0 pt-0 justify-content-center ">
          <div className="text-center">
            <div
              className="mt-5 d-flex justify-content-between  "
              id="non-veg-menu"
            >
              {/* menu search continer  */}
              <div className=" bg-light rounded-2 menu-search mx-lg-auto d-flex justify-content-between align-items-center  p-2 ">
                <input
                  type="text"
                  placeholder="Find your fav food..."
                  onChange={searchMenu}
                />
                <img
                  src="/img/search.png"
                  alt="search"
                  width={20}
                  height={20}
                />
              </div>
              <div
                className=" p-2 badge bg-success mx-1 d-flex align-items-center justify-content-evenly "
                title="View Cart"
                style={{ cursor: "pointer" }}
              >
                <img
                  src="/img/shopping-cart-light.png"
                  alt="search"
                  width={20}
                />
                &nbsp;{" "}
                <span className=" fs-6 fw-bolder">{cartItem.length}</span>
              </div>
            </div>

            <hr />
          </div>
          {filteredMenu.map((food) => (
            <div
              key={food._id}
              className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 text-center"
            >
              <div className="card menu-card h-100 bg-light overflow-hidden bg-opacity-25 position-relative ">
                {food.offer !== null ? (
                  <div className="badge bg-primary top-0 start-0 rounded-0 position-absolute ">
                    {food.offer}% off
                  </div>
                ) : (
                  <></>
                )}

                <Link to="order">
                  <div className="card-header  ">
                    <img
                      className="card-img"
                      src={food.image}
                      alt={food.name}
                    />
                  </div>
                </Link>
                <div className="card-footer d-flex flex-column justify-content-around h-100  ">
                  <div className="card-text  mb-3 text-light text-capitalize">
                    {food.name}
                  </div>
                  <div className=" text-capitalize text-center mb-3 text-light  ">
                    {food.description}
                  </div>
                  <div className="d-flex justify-content-around  align-items-center row">
                    <div className="badge col-3 text-light  text-center text-capitalize p-2 btn bg-gradient bg-danger   ">
                      &#8377; {food.price}
                    </div>
                    <button
                      onClick={() => addCart(food)}
                      className="btn btn-success  col-8  text-light text-capitalize p-2 bg-gradient"
                    >
                      Add Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* <!-- Menu Section end --> */}
      {/* footer section Start */}
      <Footer />
      {/* footer section end */}
    </>
  );
}

export default Menu;
