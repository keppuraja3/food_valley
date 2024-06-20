import React from "react";
import Footer from "./Footer";

function About() {
  return (
    <>
      {/* <!-- About Section Start --> */}
      <section id="about-section" className="container-fluid pt-5 pb-5 ">
        <div className="container ">
          <div className="text-center">
            <h1>About Us</h1>
          </div>
          <div className="row justify-content-between p-2 gy-lg-5  ">
            <div className="col-12 col-md-6 col-lg-6 p-2 order-2 order-lg-1  ">
              <img
                style={{ objectFit: "cover" }}
                className="img-fluid rounded h-100"
                src="/img/about-2.jpg"
                alt=""
              />
            </div>
            <div className="col-12 col-md-6 col-lg-6 p-2 order-1 order-lg-2">
              <p style={{ textAlign: "justify!important" }}>
                Our company is best five start rating in this city, adipisicing
                elit. Sunt, eaque porro voluptate omnis, maxime fugiat nisi
                nostrum, eius natus voluptates qui ullam numquam molestias. Nam
                commodi neque omnis recusandae. Provi dent labori osam rem,
                natus commodi aut qui eius dicta, animi iste, dolor impedit
                dolorem volupt atum dolor emque. tationem sed quos nulla velit
                culpa omnis dolorem ipsum.
              </p>
              <p style={{ textAlign: "justify!important" }}>
                {" "}
                Volupt atem eveniet cum quas, hic praes entium molestiae! Saepe
                sequi sunt laud antium deserunt! Asper natur autem nobis
                officia, est non nostrum corrupti archi tecto mo estiae modi
                ducimus asper iores sequi, ratione quaerat quo qui busdam!
                assumenda quis id maxime tempo ribus nisi non quam dicta pari
                atur repud iandae, at facere omnis eaque natus sapiente itaque,
                deserunt debitis? Itaque, corrupti earum!
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- About Section End --> */}
      {/* footer section Start */}
      <Footer />
      {/* footer section end */}
    </>
  );
}

export default About;
