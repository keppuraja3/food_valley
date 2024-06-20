import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { Container } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Home() {
  const SERVER_URL = import.meta.env.VITE_SERVER_URL;
  const navigate = useNavigate();

  const [menuList, setMenuList] = useState([]);
  // Menu List getting method---
  const getMenuList = async () => {
    await axios
      .get(`${SERVER_URL}/menu`)
      .then((res) => {
        setMenuList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMenuList();
  }, []);

  return (
    <>
      {/* <!-- Home-banner Section start --> */}
      <section
        id="home-section"
        className="d-flex justify-content-around  align-items-center overflow-hidden"
      >
        <div className="container ">
          <div className="row position-relative justify-content-between p-0 align-content-around align-content-lg-center gy-5 gy-lg-0 h-100 mt-md-4 mt-lg-0 ">
            <div className="col-12 col-md-7 col-lg-6 pb-4 d-grid order-2 order-md-1 p-3 align-content-center  ">
              <h1 className="text-center text-capitalize mb-lg-5 mb-5   ">
                enjoy your healthy food
              </h1>
              <p className="text-center mb-lg-5 mb-5 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                dolore explicabo voluptatibus debitis nam at est ex! Tempora
                minima, excepturi magnam commodi ab numquam, nesciunt lauda
                libero quasi Quaerat, quod debitis rerum corrupti pariatur
                doloribus laboriosam quia perspiciatis tempore reprehenderit!
                Voluptate, consequatur unde!
              </p>
              <div className="row justify-content-center align-self-start ">
                <div className="d-flex justify-content-center">
                  <a
                    href="#contact"
                    className=" btn btn-warning text- m-2 mb-0 mt-0 text-capitalize rounded-pill bg-gradient w-50 "
                  >
                    Contact Us
                  </a>
                  <Link
                    to="/login"
                    className=" btn btn-warning m-2 mb-0 mt-0 text-capitalize rounded-pill bg-gradient w-50 "
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
            <div
              id="home-image"
              className="col-12 col-md-5 col-lg-6 h-50  order-1 order-md-2 d-flex justify-content-center align-content-center"
            >
              <img
                src="/img/menu/dosa.png"
                className="img-fluid "
                alt="home-imag/e"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Home-banner Section End --> */}

      {/* <!-- Top Menu Section Start --> */}
      <section id="chefs-section" className="container pt-5 pb-5">
        <div className="text-center">
          <h1>Top Menus</h1>
        </div>
        <div className=" container-fluid">
          <div className="row g-4 mb-4 p-3 ">
            {menuList.slice(0, 8).map((food) => (
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

                  <Link to={`order/${food._id}`}>
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
                      <div className="badge col-3 text-light h-100 d-flex align-items-center justify-content-center text-center text-capitalize p-2 btn bg-gradient bg-danger   ">
                        &#8377; {food.price}
                      </div>
                      <button
                        onClick={() => navigate(`order/${food._id}`)}
                        className="btn btn-success  col-8  text-light text-capitalize p-2 bg-gradient"
                      >
                        Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <!-- Top Menu Section End --> */}

      {/* <!-- Chefs Section Start --> */}
      <section id="chefs-section" className="container pt-5 pb-5">
        <div className="text-center">
          <h1>Our Chefs</h1>
        </div>
        <div className=" container-fluid">
          <div className="row g-4 mb-4 p-3 ">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 ">
              <div className="card bg-secondary text-light overflow-hidden p-2  position-relative ">
                <div className="overflow-hidden rounded">
                  <div className="chefs-social me-2 end-0 rounded p-2 d-grid gap-2 bg-dark bg-opacity-25 position-absolute">
                    <a href="www.instagram.com">
                      <img
                        src="/img/chefs/instagram.png"
                        height="30"
                        width="30"
                        alt="instagram"
                      />
                    </a>
                    <a href="www.facebook.com">
                      <img
                        src="/img/chefs/facebook.png"
                        height="30"
                        width="30"
                        alt="facebook"
                      />
                    </a>
                    <a href="www.twitter.com">
                      <img
                        src="/img/chefs/twitter.png"
                        height="30"
                        width="30"
                        alt="twitter"
                      />
                    </a>
                    <a href="tel:+917358905330">
                      <img
                        src="/img/chefs/whatsapp.png"
                        height="30"
                        width="30"
                        alt="whatsapp"
                      />
                    </a>
                  </div>
                  <img
                    className="img-fluid rounded border border-2 border-black "
                    src="/img/chefs/chefs-1.jpg"
                    alt="Chef"
                  />
                </div>
                <div className="card-footer text-center ">
                  <h4>James</h4>
                  <p className="text-uppercase badge bg-primary ">
                    Master Chef
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing quidem.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 ">
              <div className="card bg-secondary text-light p-2  position-relative ">
                <div className="overflow-hidden rounded">
                  <div className="chefs-social me-2 end-0 rounded p-2 d-grid gap-2 bg-dark bg-opacity-25 position-absolute">
                    <a href="www.instagram.com">
                      <img
                        src="/img/chefs/instagram.png"
                        height="30"
                        width="30"
                        alt="instagram"
                      />
                    </a>
                    <a href="www.facebook.com">
                      <img
                        src="/img/chefs/facebook.png"
                        height="30"
                        width="30"
                        alt="facebook"
                      />
                    </a>
                    <a href="www.twitter.com">
                      <img
                        src="/img/chefs/twitter.png"
                        height="30"
                        width="30"
                        alt="twitter"
                      />
                    </a>
                    <a href="tel:+917358905330">
                      <img
                        src="/img/chefs/whatsapp.png"
                        height="30"
                        width="30"
                        alt="whatsapp"
                      />
                    </a>
                  </div>
                  <img
                    className="img-fluid rounded border border-2 border-black"
                    src="/img/chefs/chefs-2.jpg"
                    alt="Chef"
                  />
                </div>
                <div className="card-footer text-litext-light text-center  ">
                  <h4>Marry</h4>
                  <p className="text-uppercase badge bg-primary ">Chef</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing quidem.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 ">
              <div className="card bg-secondary text-light p-2  position-relative ">
                <div className="overflow-hidden rounded">
                  <div className="chefs-social me-2 end-0 rounded p-2 d-grid gap-2 bg-dark bg-opacity-25 position-absolute">
                    <a href="www.instagram.com">
                      <img
                        src="/img/chefs/instagram.png"
                        height="30"
                        width="30"
                        alt="instagram"
                      />
                    </a>
                    <a href="www.facebook.com">
                      <img
                        src="/img/chefs/facebook.png"
                        height="30"
                        width="30"
                        alt="facebook"
                      />
                    </a>
                    <a href="www.twitter.com">
                      <img
                        src="/img/chefs/twitter.png"
                        height="30"
                        width="30"
                        alt="twitter"
                      />
                    </a>
                    <a href="tel:+917358905330">
                      <img
                        src="/img/chefs/whatsapp.png"
                        height="30"
                        width="30"
                        alt="whatsapp"
                      />
                    </a>
                  </div>
                  <img
                    className="img-fluid rounded border border-2 border-black"
                    src="/img/chefs/chefs-3.jpg"
                    alt="Chef"
                  />
                </div>
                <div className="card-footer text-center ">
                  <h4>Jhon</h4>
                  <p className="text-uppercase badge bg-primary ">Cook</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing quidem.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 ">
              <div className="card bg-secondary text-light p-2  position-relative ">
                <div className="overflow-hidden rounded">
                  <div className="chefs-social me-2 end-0 rounded p-2 d-grid gap-2 bg-dark bg-opacity-25 position-absolute">
                    <a href="www.instagram.com">
                      <img
                        src="/img/chefs/instagram.png"
                        height="30"
                        width="30"
                        alt="instagram"
                      />
                    </a>
                    <a href="www.facebook.com">
                      <img
                        src="/img/chefs/facebook.png"
                        height="30"
                        width="30"
                        alt="facebook"
                      />
                    </a>
                    <a href="http://www.twitter.com">
                      <img
                        src="/img/chefs/twitter.png"
                        height="30"
                        width="30"
                        alt="twitter"
                      />
                    </a>
                    <a href="tel:+917358905330">
                      <img
                        src="/img/chefs/whatsapp.png"
                        height="30"
                        width="30"
                        alt="whatsapp"
                      />
                    </a>
                  </div>
                  <img
                    className="img-fluid rounded border border-2 border-black"
                    src="/img/chefs/chefs-2.jpg"
                    alt="Chef"
                  />
                </div>
                <div className="card-footer text-center ">
                  <h4>Jhon</h4>
                  <p className="text-uppercase badge bg-primary ">Cook</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing quidem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Chefs Section End --> */}

      {/* <!-- <carosel section start --> */}
      <h1 className="text-center fw-bolder mt-5 mb-3 ">Food Valley Feedback</h1>
      <Container>
        <Carousel
          className=" p-3 mt-5 mb-5 rounded-3"
          style={{
            background:
              "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.7)), url(./img/about.jpg) fixed center",
            backgroundSize: "cover",
          }}
        >
          <Carousel.Item>
            {/* <!-- content two --> */}
            <div className="row">
              <div className="col-12 p-3 text-center">
                <img
                  className="rounded-circle "
                  src="/img/man1.jpg"
                  height="55"
                  width="55"
                  alt=""
                />
                <h5>
                  This is my fav food platform, <br /> labore numquam vero
                  sapiente inventore distinctio est? Libero, repellat molestiae.
                </h5>
                <p className="text-secondary text-capitalize ">jhon larry</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            {/* <!-- content two --> */}
            <div className="row">
              <div className="col-12 p-3 text-center">
                <img
                  className="rounded-circle "
                  src="/img/women1.jpg"
                  height="55"
                  width="55"
                  alt=""
                />
                <h5>
                  This resturant have , <br /> very good quality and tasty food
                  in this city I ever had.
                </h5>
                <p className="text-secondary text-capitalize ">jhon larry</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            {/* <!-- content two --> */}
            <div className="row">
              <div className="col-12 p-3 text-center">
                <img
                  className="rounded-circle "
                  src="/img/woman2.jpg"
                  height="55"
                  width="55"
                  alt=""
                />
                <h5>
                  I like this website apperence <br /> labore numquam vero
                  sapiente inventore distinctio est? Libero, repellat molestiae.
                </h5>
                <p className="text-secondary text-capitalize ">jhon larry</p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
      {/* <!-- <carosel section end --> */}

      {/* footer section Start */}
      <Footer />
      {/* footer section end */}
    </>
  );
}

export default Home;
