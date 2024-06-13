import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import toast, { Toaster } from "react-hot-toast";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";

// React Icons Importing

import { FaClock, FaStar } from "react-icons/fa";
import { FaIndianRupeeSign, FaImage } from "react-icons/fa6";
import { RiDiscountPercentFill } from "react-icons/ri";
import { ImSpoonKnife } from "react-icons/im";

// import FloatingLabel from "react-bootstrap/FloatingLabel";

function Menu() {
  const SERVER_URL = import.meta.env.VITE_SERVER_URL;

  const [menuForm, setMenuForm] = useState(false);

  const [imgFile, setImgFile] = useState(null);
  const [formInput, setFormInput] = useState({});

  const handleMenuFormClose = () => setMenuForm(false);
  const handleMenuFormShow = () => setMenuForm(true);

  const notifySuccess = (msg) => toast.success(msg);
  const notifyError = (msg) => toast.error(msg);

  const handleImgFileChange = (e) => {
    setImgFile(e.target.files[0]);
  };

  const addFormInput = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  // form submit function---

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("food_menu_image", imgFile);
    formData.append("food_menu_data");
  };

  // Promise hot toast---------

  // const notifyPromise = () => {
  //   toast.promise(saveSettings(settings), {
  //     loading: "Adding...",
  //     success: <b>Item added successfully</b>,
  //     error: <b>Item added faild.</b>,
  //   });
  // };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      {/* menu add and update form modal */}
      <Modal show={menuForm} onHide={handleMenuFormClose} centered>
        <Modal.Body className="bg-transparent p-0 ">
          <Form
            className=" bg-dark p-3 rounded-3 border border-1 border-light"
            onSubmit={handleSubmit}
          >
            <h3 className="text-center text-uppercase">Add Item</h3>

            <InputGroup as={Col} className="mb-3">
              <InputGroup.Text>
                <ImSpoonKnife />
              </InputGroup.Text>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={addFormInput}
                placeholder="Enter menu name"
                autoFocus
                //--> readOnly <--
              />
            </InputGroup>

            <Row>
              <InputGroup as={Col} className="mb-3">
                <InputGroup.Text>
                  <FaIndianRupeeSign />
                </InputGroup.Text>
                <Form.Control
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={addFormInput}
                  md={6}
                  placeholder="Enter price"
                />
              </InputGroup>

              <InputGroup as={Col} className="mb-3">
                <InputGroup.Text>
                  <FaClock />
                </InputGroup.Text>
                <Form.Control
                  type="number"
                  name="deliveryTime"
                  value={formData.deliveryTime}
                  onChange={addFormInput}
                  placeholder="Enter delivery time"
                />
              </InputGroup>
            </Row>
            <Row>
              <InputGroup as={Col} className="mb-3">
                <InputGroup.Text>
                  <FaStar />
                </InputGroup.Text>
                <Form.Control
                  type="number"
                  name="rating"
                  value={formData.rating}
                  onChange={addFormInput}
                  placeholder="Enter rating"
                />
              </InputGroup>

              <InputGroup as={Col} className="mb-3">
                <InputGroup.Text>
                  <RiDiscountPercentFill />
                </InputGroup.Text>
                <Form.Control
                  type="email"
                  name="offer"
                  value={formData.offer}
                  onChange={addFormInput}
                  placeholder="Enter offer (optional)"
                />
              </InputGroup>
            </Row>

            <InputGroup as={Col} className="mb-3">
              <InputGroup.Text>
                <FaImage />
              </InputGroup.Text>
              <Form.Control
                type="file"
                onChange={handleImgFileChange}
                required
              />
            </InputGroup>

            <Form.Select
              className="mb-3"
              aria-label="Floating label select example"
              name="type"
              value={formData.type}
              onChange={addFormInput}
            >
              <option>Select menu type</option>
              <option value="veg">Veg</option>
              <option value="non-veg">Non Veg</option>
            </Form.Select>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                rows={3}
                name="decription"
                value={formData.decription}
                onChange={addFormInput}
                placeholder="Enter description"
              />
            </Form.Group>

            <div className="w-100 d-flex justify-content-around">
              <Button variant="primary">Submit</Button>
              <Button
                variant="danger"
                type="button"
                onClick={handleMenuFormClose}
              >
                Cancel
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      <h1>Menu</h1>

      <Button variant="primary" onClick={handleMenuFormShow}>
        + Add
      </Button>
    </>
  );
}

export default Menu;
