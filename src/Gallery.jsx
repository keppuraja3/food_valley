import React from "react";
import Footer from "./Footer";

function Gallery() {
  return (
    <>
      {/* <!-- Gallery Section Start --> */}
      <section id="gallery-section" className="container pt-3 pb-5">
        <div className="text-center">
          <h1>Gallery</h1>
        </div>
        <div className="row p-3 p-lg-0 g-3 mt-3 justify-content-center  ">
          <div className="col-12 col-lg-3 col-md-4">
            <div className="card">
              <a href="./img/gallery/gallery-1.jpg">
                <img
                  src="./img/gallery/gallery-1.jpg"
                  className="card-img "
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-4 ">
            <div className="card">
              <a href="./img/gallery/gallery-2.jpg">
                <img
                  src="./img/gallery/gallery-2.jpg"
                  className="card-img "
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-4 ">
            <div className="card">
              <a href="./img/gallery/gallery-3.jpg">
                <img
                  src="./img/gallery/gallery-3.jpg"
                  className="card-img "
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-4 ">
            <div className="card">
              <a href="./img/gallery/gallery-4.jpg">
                <img
                  src="./img/gallery/gallery-4.jpg"
                  className="card-img "
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-4 ">
            <div className="card">
              <a href="./img/gallery/gallery-5.jpg">
                <img
                  src="./img/gallery/gallery-5.jpg"
                  className="card-img "
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-4 ">
            <div className="card">
              <a href="./img/gallery/gallery-6.jpg">
                <img
                  src="./img/gallery/gallery-6.jpg"
                  className="card-img "
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-4 ">
            <div className="card">
              <a href="./img/gallery/gallery-7.jpg">
                <img
                  src="./img/gallery/gallery-7.jpg"
                  className="card-img "
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-4 ">
            <div className="card">
              <a href="./img/gallery/gallery-8.jpg">
                <img
                  src="./img/gallery/gallery-8.jpg"
                  className="card-img "
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Gallery Section End --> */}
      {/* footer section Start */}
      <Footer />
      {/* footer section end */}
    </>
  );
}

export default Gallery;
