import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import toast, { Toaster } from "react-hot-toast";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";

// React Icons Importing
import { FaClock } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";

// import FloatingLabel from "react-bootstrap/FloatingLabel";

function Menu() {
  const [menuForm, setMenuForm] = useState(false);

  const handleMenuFormClose = () => setMenuForm(false);
  const handleMenuFormShow = () => setMenuForm(true);

  const notifySuccess = (msg) => toast.success(msg);
  const notifyError = (msg) => toast.error(msg);

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
          <Form className=" bg-dark p-3 rounded-3 border border-1 border-light">
            <h3 className="text-center text-uppercase">Add Item</h3>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Enter menu name"
                autoFocus
                // readOnly
              />
            </Form.Group>

            {/* <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel> */}

            <Row>
              {/* <Form.Group
                as={Col}
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control type="number" md={6} placeholder="Enter price" />
              </Form.Group> */}

              <InputGroup as={Col} className="mb-3">
                <InputGroup.Text>
                  <FaIndianRupeeSign />
                </InputGroup.Text>
                <Form.Control type="number" md={6} placeholder="Enter price" />
              </InputGroup>

              <InputGroup as={Col} className="mb-3">
                <InputGroup.Text>
                  <FaClock />
                </InputGroup.Text>
                <Form.Control type="number" placeholder="Enter rating" />
              </InputGroup>

            </Row>
            <Row>
              <Form.Group
                as={Col}
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control type="email" placeholder="Enter delivery time" />
              </Form.Group>

              <Form.Group
                as={Col}
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="email"
                  placeholder="Enter offer (optional)"
                />
              </Form.Group>
            </Row>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control type="file" placeholder="Select item image" />
            </Form.Group>

            <Form.Select
              className="mb-3"
              aria-label="Floating label select example"
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
                placeholder="Enter description"
              />
            </Form.Group>

            <div className="w-100 d-flex justify-content-around">
              <Button variant="primary">Submit</Button>
              <Button variant="danger" onClick={handleMenuFormClose}>
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
