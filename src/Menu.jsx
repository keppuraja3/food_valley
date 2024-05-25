import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import toast, { Toaster } from "react-hot-toast";

function Menu() {
  // Toast
  const notifySuccess = (msg) => toast.success(msg);

  const [foodMenu, setFoodMenu] = useState([
    {
      id: 1,
      name: "chiken",
      description: "let's make something good is food",
      price: 230,
      rateing: 4.4,
      deliveryTime: 20,
      offer: 30,
      hotelName: "Vamsavali",
      image: "/img/menu/chicken.png",
      type: "veg",
    },
    {
      id: 2,
      name: "biriyani",
      description: "let's make something good is food",
      price: 230,
      rateing: 4.4,
      deliveryTime: 20,
      offer: 30,
      hotelName: "Vamsavali",
      image: "/img/menu/chicken.png",
      type: "veg",
    },
    {
      id: 3,
      name: "noodels",
      description: "let's make something good is food",
      price: 230,
      rateing: 4.4,
      deliveryTime: 20,
      offer: 30,
      hotelName: "Vamsavali",
      image: "/img/menu/chicken.png",
      type: "veg",
    },
    {
      id: 4,
      name: "sambar",
      description: "let's make something good is food",
      price: 230,
      rateing: 4.4,
      deliveryTime: 20,
      offer: 30,
      hotelName: "Vamsavali",
      image: "/img/menu/chicken.png",
      type: "veg",
    },
    {
      id: 5,
      name: "mutton",
      description: "let's make something good is food",
      price: 230,
      rateing: 4.4,
      deliveryTime: 20,
      offer: 30,
      hotelName: "Vamsavali",
      image: "/img/menu/chicken.png",
      type: "veg",
    },
    {
      id: 6,
      name: "panneer",
      description: "let's make something good is food",
      price: 230,
      rateing: 4.4,
      deliveryTime: 20,
      offer: 30,
      hotelName: "Vamsavali",
      image: "/img/menu/chicken.png",
      type: "veg",
    },
    {
      id: 7,
      name: "veg mix",
      description: "let's make something good is food",
      price: 230,
      rateing: 4.4,
      deliveryTime: 20,
      offer: 30,
      hotelName: "Vamsavali",
      image: "/img/menu/chicken.png",
      type: "veg",
    },
    {
      id: 8,
      name: "veg salad",
      description: "let's make something good is food",
      price: 230,
      rateing: 4.4,
      deliveryTime: 20,
      offer: 30,
      hotelName: "Vamsavali",
      image: "/img/menu/chicken.png",
      type: "veg",
    },
    {
      id: 9,
      name: "meal",
      description: "let's make something good is food",
      price: 230,
      rateing: 4.4,
      deliveryTime: 20,
      offer: 30,
      hotelName: "Vamsavali",
      image: "/img/menu/chicken.png",
      type: "veg",
    },
    {
      id: 10,
      name: "veg meal",
      description: "let's make something good is food",
      price: 230,
      rateing: 4.4,
      deliveryTime: 20,
      offer: 30,
      hotelName: "Vamsavali",
      image: "/img/menu/chicken.png",
      type: "veg",
    },
  ]);

  const [filteredMenu, setFilterdMenu] = useState([
    {
      id: 1,
      name: "chiken",
      description: "let's make something good is food",
      price: 630,
      rateing: 4.4,
      deliveryTime: 20,
      offer: 30,
      hotelName: "Vamsavali",

      image: "/img/menu/chicken.png",
      type: "nonVeg",
    },
    {
      id: 2,
      name: "biriyani",
      description: "let's make something good is food",
      price: 230,
      rateing: 4.4,
      deliveryTime: 20,
      offer: 30,
      hotelName: "Vamsavali",
      image: "/img/menu/chicken.png",
      type: "nonVeg",
    },
    {
      id: 3,
      name: "noodels",
      description: "let's make something good is food",
      price: 230,
      rateing: 4.4,
      deliveryTime: 20,
      offer: 30,
      hotelName: "Vamsavali",
      image: "/img/menu/chicken.png",
      type: "veg",
    },
    {
      id: 4,
      name: "sambar",
      description: "let's make something good is food",
      price: 230,
      rateing: 4.4,
      deliveryTime: 20,
      offer: 30,
      hotelName: "Vamsavali",
      image: "/img/menu/chicken.png",
      type: "veg",
    },
    {
      id: 5,
      name: "mutton",
      description: "let's make something good is food",
      price: 230,
      rateing: 4.4,
      deliveryTime: 20,
      offer: 30,
      hotelName: "Vamsavali",
      image: "/img/menu/chicken.png",
      type: "nonVeg",
    },
    {
      id: 6,
      name: "panneer",
      description: "let's make something good is food",
      price: 230,
      rateing: 4.4,
      deliveryTime: 20,
      offer: 30,
      hotelName: "Vamsavali",
      image: "/img/menu/chicken.png",
      type: "veg",
    },
    {
      id: 7,
      name: "veg mix",
      description: "let's make something good is food",
      price: 230,
      rateing: 4.4,
      deliveryTime: 20,
      offer: 30,
      hotelName: "Vamsavali",
      image: "/img/menu/chicken.png",
      type: "veg",
    },
    {
      id: 8,
      name: "veg salad",
      description: "let's make something good is food",
      price: 230,
      rateing: 4.4,
      deliveryTime: 20,
      offer: 30,
      hotelName: "Vamsavali",
      image: "/img/menu/chicken.png",
      type: "veg",
    },
    {
      id: 9,
      name: "meal",
      description: "let's make something good is food",
      price: 230,
      rateing: 4.4,
      deliveryTime: 20,
      offer: 30,
      hotelName: "Vamsavali",
      image: "/img/menu/chicken.png",
      type: "veg",
    },
    {
      id: 10,
      name: "veg meal",
      description: "let's make something good is food",
      price: 230,
      rateing: 4.4,
      deliveryTime: 20,
      offer: 30,
      hotelName: "Vamsavali",
      image: "/img/menu/chicken.png",
      type: "veg",
    },
  ]);

  const searchMenu = (e) => {
    const searchText = e.target.value;

    const filter = filteredMenu.filter((food) => {
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
      {/* <!-- Menu Section start --> */}
      <Toaster position="top-right" reverseOrder={false} />
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
              key={food.id}
              className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 text-center"
            >
              <div className="card menu-card h-100 bg-light overflow-hidden bg-opacity-25 position-relative ">
                <div className="badge bg-primary top-0 start-0 rounded-0 position-absolute ">
                  25% off
                </div>

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
                    Let's take a taste for good
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
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 text-center">
            <div className="card menu-card h-100 bg-light overflow-hidden bg-opacity-25 position-relative ">
              <div className="badge bg-primary top-0 start-0 rounded-0 position-absolute ">
                25% off
              </div>
              <img
                className="position-absolute top-0 end-0 m-2 "
                id="like-heart"
                height="30"
                width="30"
                src="./img/heart.svg"
                alt="like heart"
                title="Add to Like"
              />
              <Link to="order">
                <div className="card-header  ">
                  <img
                    className="card-img"
                    src="./img/menu/biriyani.png"
                    alt="biriyani"
                  />
                </div>
              </Link>
              <div className="card-footer d-flex flex-column justify-content-around h-100  ">
                <div className="card-text  mb-3 text-light text-capitalize">
                  biriyani
                </div>
                <div className=" text-capitalize text-center mb-3 text-light  ">
                  Let's take a taste for good
                </div>
                <div className="d-flex justify-content-around  align-items-center row">
                  <div className="badge col-3 text-light  text-center text-capitalize p-2 btn bg-gradient bg-danger   ">
                    &#8377; 280
                  </div>
                  <Link
                    to="order"
                    className="btn btn-success  col-8  text-light text-capitalize p-2 bg-gradient"
                  >
                    Add Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 text-center">
            <div className="card menu-card h-100 bg-light overflow-hidden bg-opacity-25 position-relative ">
              <img
                className="position-absolute top-0 end-0 m-2 "
                id="like-heart"
                height="30"
                width="30"
                src="./img/heart.svg"
                alt="like heart"
                title="Add to Like"
              />
              <Link to="order">
                <div className="card-header  ">
                  <img
                    className="card-img"
                    src="./img/menu/chilli_chicken.png"
                    alt="chilli chicken"
                  />
                </div>
              </Link>
              <div className="card-footer d-flex flex-column justify-content-around h-100 ">
                <div className="card-text  mb-3 text-light text-capitalize">
                  chilli chicken
                </div>
                <div className=" text-capitalize text-center mb-3 text-light  ">
                  Let's take a taste for good
                </div>
                <div className="d-flex justify-content-around  align-items-center row">
                  <div className="badge col-3 text-light  text-center text-capitalize p-2 btn bg-gradient bg-danger   ">
                    &#8377; 310
                  </div>
                  <Link
                    to="order"
                    className="btn btn-success  col-8  text-light text-capitalize p-2 bg-gradient"
                  >
                    Add Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 text-center">
            <div className="card menu-card h-100 bg-light overflow-hidden bg-opacity-25 position-relative ">
              <img
                className="position-absolute top-0 end-0 m-2 "
                id="like-heart"
                height="30"
                width="30"
                src="./img/heart.svg"
                alt="like heart"
                title="Add to Like"
              />
              <Link to="order">
                <div className="card-header  ">
                  <img
                    className="card-img"
                    src="./img/menu/mutton-fry.png"
                    alt="mutton fry"
                  />
                </div>
              </Link>
              <div className="card-footer d-flex flex-column justify-content-around h-100  ">
                <div className="card-text  mb-3 text-light text-capitalize">
                  mutton fry
                </div>
                <div className=" text-capitalize text-center mb-3 text-light  ">
                  Let's take a taste for good
                </div>
                <div className="d-flex justify-content-around  align-items-center row">
                  <div className="badge col-3 text-light  text-center text-capitalize p-2 btn bg-gradient bg-danger   ">
                    &#8377; 280
                  </div>
                  <Link
                    to="order"
                    className="btn btn-success  col-8  text-light text-capitalize p-2 bg-gradient"
                  >
                    Add Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 text-center">
            <div className="card menu-card h-100 bg-light overflow-hidden bg-opacity-25 position-relative h-100 ">
              <div className="badge bg-primary top-0 start-0 rounded-0 position-absolute ">
                20% off
              </div>
              <img
                className="position-absolute top-0 end-0 m-2"
                id="like-heart"
                height="30"
                width="30"
                src="./img/heart.svg"
                alt="like heart"
                title="Add to Like"
              />
              <Link to="order">
                <div className="card-header  ">
                  <img
                    className="card-img"
                    src="./img/menu/gril_chiken_set.png"
                    alt="gril chiken set"
                  />
                </div>
              </Link>
              <div className="card-footer d-flex flex-column justify-content-around h-100  ">
                <div className="card-text  mb-3 text-light text-capitalize">
                  gril chiken set
                </div>
                <div className=" text-capitalize text-center mb-3 text-light  ">
                  Let's take a taste for good
                </div>
                <div className="d-flex justify-content-around  align-items-center row">
                  <div className="badge col-3 text-light  text-center text-capitalize p-2 btn bg-gradient bg-danger   ">
                    &#8377; 300
                  </div>
                  <Link
                    to="order"
                    className="btn btn-success  col-8  text-light text-capitalize p-2 bg-gradient"
                  >
                    Add Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 text-center">
            <div className="card menu-card h-100 bg-light overflow-hidden bg-opacity-25 position-relative ">
              <img
                className="position-absolute top-0 end-0 m-2 "
                id="like-heart"
                height="30"
                width="30"
                src="./img/heart.svg"
                alt="like heart"
                title="Add to Like"
              />
              <Link to="order">
                <div className="card-header  ">
                  <img
                    className="card-img mt-3 mb-3 "
                    src="./img/menu/parotta non veg set.png"
                    alt="parotta non veg set"
                  />
                </div>
              </Link>
              <div className="card-footer d-flex flex-column justify-content-around h-100  ">
                <div className="card-text  mb-3 text-light text-capitalize">
                  parotta non veg set
                </div>
                <div className=" text-capitalize text-center mb-3 text-light  ">
                  Let's take a taste for good
                </div>
                <div className="d-flex justify-content-around  align-items-center row">
                  <div className="badge col-3 text-light  text-center text-capitalize p-2 btn bg-gradient bg-danger   ">
                    &#8377; 280
                  </div>
                  <Link
                    to="order"
                    className="btn btn-success  col-8  text-light text-capitalize p-2 bg-gradient"
                  >
                    Add Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 text-center">
            <div className="card menu-card h-100 bg-light overflow-hidden bg-opacity-25 position-relative ">
              <div className="badge bg-primary top-0 start-0 rounded-0 position-absolute ">
                5% off
              </div>
              <img
                className="position-absolute top-0 end-0 m-2 "
                id="like-heart"
                height="30"
                width="30"
                src="./img/heart.svg"
                alt="like heart"
                title="Add to Like"
              />
              <Link to="order">
                <div className="card-header  ">
                  <img
                    className="card-img mt-5 mb-4 "
                    src="./img/menu/aattu kal kulambu.png"
                    alt="aattu kal kulambu"
                  />
                </div>
              </Link>
              <div className="card-footer d-flex flex-column justify-content-around h-100 ">
                <div className="card-text  mb-3 text-light text-capitalize">
                  aattu kal kulambu
                </div>
                <div className=" text-capitalize text-center mb-3 text-light  ">
                  Let's take a taste for good
                </div>
                <div className="d-flex justify-content-around  align-items-center row">
                  <div className="badge col-3 text-light  text-center text-capitalize p-2 btn bg-gradient bg-danger   ">
                    &#8377; 310
                  </div>
                  <Link
                    to="order"
                    className="btn btn-success  col-8  text-light text-capitalize p-2 bg-gradient"
                  >
                    Add Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 text-center">
            <div className="card menu-card h-100 bg-light overflow-hidden bg-opacity-25 position-relative ">
              <img
                className="position-absolute top-0 end-0 m-2 "
                id="like-heart"
                height="30"
                width="30"
                src="./img/heart.svg"
                alt="like heart"
                title="Add to Like"
              />
              <Link to="order">
                <div className="card-header  ">
                  <img
                    className="card-img"
                    src="./img/menu/biriyani.png"
                    alt="Briyani"
                  />
                </div>
              </Link>
              <div className="card-footer d-flex flex-column justify-content-around h-100  ">
                <div className="card-text  mb-3 text-light text-capitalize">
                  Briyani
                </div>
                <div className=" text-capitalize text-center mb-3 text-light  ">
                  Let's take a taste for good
                </div>
                <div className="d-flex justify-content-around  align-items-center row">
                  <div className="badge col-3 text-light  text-center text-capitalize p-2 btn bg-gradient bg-danger   ">
                    &#8377; 280
                  </div>
                  <Link
                    to="order"
                    className="btn btn-success  col-8  text-light text-capitalize p-2 bg-gradient"
                  >
                    Add Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 text-center">
            <div className="card menu-card h-100 bg-light overflow-hidden bg-opacity-25 position-relative ">
              <img
                className="position-absolute top-0 end-0 m-2 "
                id="like-heart"
                height="30"
                width="30"
                src="./img/heart.svg"
                alt="like heart"
                title="Add to Like"
              />
              <Link to="order">
                <div className="card-header  ">
                  <img
                    className="card-img"
                    src="./img/menu/chicken.png"
                    alt="chicken"
                  />
                </div>
              </Link>
              <div className="card-footer d-flex flex-column justify-content-around h-100  ">
                <div className="card-text  mb-3 text-light text-capitalize">
                  chicken
                </div>
                <div className=" text-capitalize text-center mb-3 text-light  ">
                  Let's take a taste for good
                </div>
                <div className="d-flex justify-content-around  align-items-center row">
                  <div className="badge col-3 text-light  text-center text-capitalize p-2 btn bg-gradient bg-danger   ">
                    &#8377; 300
                  </div>
                  <Link
                    to="order"
                    className="btn btn-success  col-8  text-light text-capitalize p-2 bg-gradient"
                  >
                    Add Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 text-center">
            <div className="card menu-card h-100 bg-light overflow-hidden bg-opacity-25 position-relative ">
              <div className="badge bg-primary top-0 start-0 rounded-0 position-absolute ">
                10% off
              </div>
              <img
                className="position-absolute top-0 end-0 m-2 "
                id="like-heart"
                height="30"
                width="30"
                src="./img/heart.svg"
                alt="like heart"
                title="Add to Like"
              />
              <Link to="order">
                <div className="card-header  ">
                  <img
                    className="card-img"
                    src="./img/menu/veg-roll-pack.png"
                    alt="veg roll pack"
                  />
                </div>
              </Link>
              <div className="card-footer d-flex flex-column justify-content-around h-100  ">
                <div className="card-text  mb-3 text-light text-capitalize">
                  veg roll pack
                </div>
                <div className=" text-capitalize text-center mb-3 text-light  ">
                  Let's take a taste for good
                </div>
                <div className="d-flex justify-content-around  align-items-center row">
                  <div className="badge col-3 text-light  text-center text-capitalize p-2 btn bg-gradient bg-danger   ">
                    &#8377; 170
                  </div>
                  <Link
                    to="order"
                    className="btn btn-success  col-8  text-light text-capitalize p-2 bg-gradient"
                  >
                    Add Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 text-center">
            <div className="card menu-card h-100 bg-light overflow-hidden bg-opacity-25 position-relative ">
              <img
                className="position-absolute top-0 end-0 m-2 "
                id="like-heart"
                height="30"
                width="30"
                src="./img/heart.svg"
                alt="like heart"
                title="Add to Like"
              />
              <Link to="order">
                <div className="card-header  ">
                  <img
                    className="card-img"
                    src="./img/menu/veg-salad.png"
                    alt="veg salad"
                  />
                </div>
              </Link>
              <div className="card-footer d-flex flex-column justify-content-around h-100  ">
                <div className="card-text  mb-3 text-light text-capitalize">
                  veg salad
                </div>
                <div className=" text-capitalize text-center mb-3 text-light  ">
                  Let's take a taste for good
                </div>
                <div className="d-flex justify-content-around  align-items-center row">
                  <div className="badge col-3 text-light  text-center text-capitalize p-2 btn bg-gradient bg-danger   ">
                    &#8377; 190
                  </div>
                  <Link
                    to="order"
                    className="btn btn-success  col-8  text-light text-capitalize p-2 bg-gradient"
                  >
                    Add Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 text-center">
            <div className="card menu-card h-100 bg-light overflow-hidden bg-opacity-25 position-relative ">
              <img
                className="position-absolute top-0 end-0 m-2 "
                id="like-heart"
                height="30"
                width="30"
                src="./img/heart.svg"
                alt="like heart"
                title="Add to Like"
              />
              <Link to="order">
                <div className="card-header  ">
                  <img
                    className="card-img"
                    src="./img/menu/panneer.png"
                    alt="panneer"
                  />
                </div>
              </Link>
              <div className="card-footer d-flex flex-column justify-content-around h-100  ">
                <div className="card-text  mb-3 text-light text-capitalize">
                  panneer
                </div>
                <div className=" text-capitalize text-center mb-3 text-light  ">
                  Let's take a taste for good
                </div>
                <div className="d-flex justify-content-around  align-items-center row">
                  <div className="badge col-3 text-light  text-center text-capitalize p-2 btn bg-gradient bg-danger   ">
                    &#8377; 205
                  </div>
                  <Link
                    to="order"
                    className="btn btn-success  col-8  text-light text-capitalize p-2 bg-gradient"
                  >
                    Add Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 text-center">
            <div className="card menu-card h-100 bg-light overflow-hidden bg-opacity-25 position-relative ">
              <img
                className="position-absolute top-0 end-0 m-2 "
                id="like-heart"
                height="30"
                width="30"
                src="./img/heart.svg"
                alt="like heart"
                title="Add to Like"
              />
              <Link to="order">
                <div className="card-header  ">
                  <img
                    className="card-img"
                    src="./img/menu/fried_rice.png"
                    alt="fried rice"
                  />
                </div>
              </Link>
              <div className="card-footer d-flex flex-column justify-content-around h-100  ">
                <div className="card-text  mb-3 text-light text-capitalize">
                  fried rice
                </div>
                <div className=" text-capitalize text-center mb-3 text-light  ">
                  Let's take a taste for good
                </div>
                <div className="d-flex justify-content-around  align-items-center row">
                  <div className="badge col-3 text-light  text-center text-capitalize p-2 btn bg-gradient bg-danger   ">
                    &#8377; 110
                  </div>
                  <Link
                    to="order"
                    className="btn btn-success  col-8  text-light text-capitalize p-2 bg-gradient"
                  >
                    Add Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 text-center">
            <div className="card menu-card h-100 bg-light overflow-hidden bg-opacity-25 position-relative ">
              <img
                className="position-absolute top-0 end-0 m-2 "
                id="like-heart"
                height="30"
                width="30"
                src="./img/heart.svg"
                alt="like heart"
                title="Add to Like"
              />
              <Link to="order">
                <div className="card-header  ">
                  <img
                    className="card-img"
                    src="./img/menu/mix-noodules.png"
                    alt="mix noodules"
                  />
                </div>
              </Link>
              <div className="card-footer d-flex flex-column justify-content-around h-100  ">
                <div className="card-text  mb-3 text-light text-capitalize">
                  mix noodules
                </div>
                <div className=" text-capitalize text-center mb-3 text-light  ">
                  Let's take a taste for good
                </div>
                <div className="d-flex justify-content-around  align-items-center row">
                  <div className="badge col-3 text-light  text-center text-capitalize p-2 btn bg-gradient bg-danger   ">
                    &#8377; 170
                  </div>
                  <Link
                    to="order"
                    className="btn btn-success  col-8  text-light text-capitalize p-2 bg-gradient"
                  >
                    Add Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 text-center">
            <div className="card menu-card h-100 bg-light overflow-hidden bg-opacity-25 position-relative ">
              <div className="badge bg-primary top-0 start-0 rounded-0 position-absolute ">
                15% off
              </div>
              <img
                className="position-absolute top-0 end-0 m-2 "
                id="like-heart"
                height="30"
                width="30"
                src="./img/heart.svg"
                alt="like heart"
                title="Add to Like"
              />
              <Link to="order">
                <div className="card-header  ">
                  <img
                    className="card-img mt-4 mb-4"
                    src="./img/menu/grilled vegetables.png"
                    alt="grilled vegetables"
                  />
                </div>
              </Link>
              <div className="card-footer d-flex flex-column justify-content-around h-100  ">
                <div className="card-text  mb-3 text-light text-capitalize">
                  grilled vegetables
                </div>
                <div className=" text-capitalize text-center mb-3 text-light  ">
                  Let's take a taste for good
                </div>
                <div className="d-flex justify-content-around  align-items-center row">
                  <div className="badge col-3 text-light  text-center text-capitalize p-2 btn bg-gradient bg-danger   ">
                    &#8377; 190
                  </div>
                  <Link
                    to="order"
                    className="btn btn-success  col-8  text-light text-capitalize p-2 bg-gradient"
                  >
                    Add Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 text-center">
            <div className="card menu-card h-100 bg-light overflow-hidden bg-opacity-25 position-relative ">
              <img
                className="position-absolute top-0 end-0 m-2 "
                id="like-heart"
                height="30"
                width="30"
                src="./img/heart.svg"
                alt="like heart"
                title="Add to Like"
              />
              <Link to="order">
                <div className="card-header  ">
                  <img
                    className="card-img mt-4 mb-4"
                    src="./img/menu/veg mix.png"
                    alt="veg mix"
                  />
                </div>
              </Link>
              <div className="card-footer d-flex flex-column justify-content-around h-100  ">
                <div className="card-text  mb-3 text-light text-capitalize">
                  veg mix
                </div>
                <div className=" text-capitalize text-center mb-3 text-light  ">
                  Let's take a taste for good
                </div>
                <div className="d-flex justify-content-around  align-items-center row">
                  <div className="badge col-3 text-light  text-center text-capitalize p-2 btn bg-gradient bg-danger   ">
                    &#8377; 205
                  </div>
                  <Link
                    to="order"
                    className="btn btn-success  col-8  text-light text-capitalize p-2 bg-gradient"
                  >
                    Add Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 text-center">
            <div className="card menu-card h-100 bg-light overflow-hidden bg-opacity-25 position-relative ">
              <div className="badge bg-primary top-0 start-0 rounded-0 position-absolute ">
                10% off
              </div>
              <img
                className="position-absolute top-0 end-0 m-2 "
                id="like-heart"
                height="30"
                width="30"
                src="./img/heart.svg"
                alt="like heart"
                title="Add to Like"
              />
              <Link to="order">
                <div className="card-header  ">
                  <img
                    className="card-img mb-3 mt-3  "
                    src="./img/menu/veg meal.png"
                    alt="veg meal"
                  />
                </div>
              </Link>
              <div className="card-footer d-flex flex-column justify-content-around h-100  ">
                <div className="card-text  mb-3 text-light text-capitalize">
                  veg meal
                </div>
                <div className=" text-capitalize text-center mb-3 text-light  ">
                  Let's take a taste for good
                </div>
                <div className="d-flex justify-content-around  align-items-center row">
                  <div className="badge col-3 text-light  text-center text-capitalize p-2 btn bg-gradient bg-danger   ">
                    &#8377; 110
                  </div>
                  <Link
                    to="order"
                    className="btn btn-success  col-8  text-light text-capitalize p-2 bg-gradient"
                  >
                    Add Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
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
