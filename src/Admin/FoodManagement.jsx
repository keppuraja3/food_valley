import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import SideBar from "./SideBar";

function FoodManagement() {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

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
  const [filteredFoodMenu, setFilteredFoodMenu] = useState([
    {
      id: 1,
      name: "chiken",
      description: "let's make something good is food",
      price: 230,
      rateing: 4.4,
      deliveryTime: 30,
      offer: 40,
      hotelName: "Vamsavali",
      image: "/img/menu/chicken.png",
      type: "non-veg",
    },
    {
      id: 2,
      name: "biriyani",
      description: "let's make something good is food",
      price: 230,
      rateing: 4.4,
      deliveryTime: 20,
      offer: 35,
      hotelName: "Vamsavali",
      image: "/img/menu/chicken.png",
      type: "non-veg",
    },
    {
      id: 3,
      name: "noodels",
      description: "let's make something good is food",
      price: 230,
      rateing: 4.4,
      deliveryTime: 10,
      offer: 5,
      hotelName: "Vamsavali",
      image: "/img/menu/chicken.png",
      type: "veg",
    },
    {
      id: 4,
      name: "sambar",
      description: "let's make something good is food",
      price: 80,
      rateing: 4.4,
      deliveryTime: 10,
      offer: null,
      hotelName: "Karna Hotel",
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
      hotelName: "Sanmugam Hotel",
      image: "/img/menu/chicken.png",
      type: "non-veg",
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
      hotelName: "Sanmugam Hotel",
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
      hotelName: "Pandi Hotel",
      image: "/img/menu/chicken.png",
      type: "veg",
    },
    {
      id: 9,
      name: "meal",
      description: "let's make something good is food",
      price: 190,
      rateing: 4.4,
      deliveryTime: 20,
      offer: 30,
      hotelName: "Pandi Hotel",
      image: "/img/menu/chicken.png",
      type: "non-veg",
    },
    {
      id: 10,
      name: "veg meal",
      description: "let's make something good is food",
      price: 150,
      rateing: 4.4,
      deliveryTime: 20,
      offer: 30,
      hotelName: "Saravanana bhavan",
      image: "/img/menu/chicken.png",
      type: "veg",
    },
  ]);
  const [sideBarShow, setSideBarShow] = useState(false);

  const handleSideBarClose = () => setSideBarShow(false);
  const handleSideBarShow = () => setSideBarShow(true);

  return (
    <>
      <Offcanvas show={sideBarShow} onHide={handleSideBarClose}>
        <Offcanvas.Header className=" d-flex  justify-content-between w-100">
          <Offcanvas.Title>Food Valley</Offcanvas.Title>
          <img
            style={{ cursor: "pointer" }}
            src="/public/img/close.png"
            alt=""
            width={20}
            onClick={handleSideBarClose}
          />
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>

      <Container fluid>
        <div className=" fixed-bottom m-3">
          <span
            onClick={handleSideBarShow}
            className=" m-2 rounded-circle bg-light p-2 m-3 "
          >
            <img src="/img/arrow-small-right.png" alt="" width={20} />
          </span>
        </div>
        <Row>
          <Col lg={10}>
            <h1>Food Management</h1>
            <Table striped bordered hover variant="dark" className=" rounded">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Desctiption</th>
                  <th>Price</th>
                  <th>Rating</th>
                  <th>Delivery Time</th>
                  <th>offer</th>
                  <th>Hotel Name</th>
                  <th>image</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {filteredFoodMenu.map((food) => (
                  <tr key={food.id}>
                    <td>{food.id}</td>
                    <td>{food.name}</td>
                    <td>{food.description}</td>
                    <td>{food.price}</td>
                    <td>{food.rateing}</td>
                    <td>{food.deliveryTime}</td>
                    <td>{food.offer}</td>
                    <td>{food.hotelName}</td>
                    <td>{food.image}</td>
                    <td>{food.type}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default FoodManagement;
