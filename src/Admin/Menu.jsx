import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import toast, { Toaster } from "react-hot-toast";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Button from "react-bootstrap/Button";

// Importing React Icons
import { FaClock, FaStar } from "react-icons/fa";
import { FaIndianRupeeSign, FaImage } from "react-icons/fa6";
import { RiDiscountPercentFill } from "react-icons/ri";
import { ImSpoonKnife } from "react-icons/im";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

// Button loader animation gif
import { SyncLoader } from "react-spinners";

// import FloatingLabel from "react-bootstrap/FloatingLabel";

function Menu() {
  const SERVER_URL = import.meta.env.VITE_SERVER_URL;

  const [menuList, setMenuList] = useState([]);

  const [menuForm, setMenuForm] = useState(false);

  const [imgFile, setImgFile] = useState(null);

  const [formInput, setFormInput] = useState({
    name: "",
    description: "",
    price: "",
    rating: "",
    deliveryTime: "",
    offer: "",
    type: "",
    image: "",
  });

  // Loading boolean variable--
  const [loading, setLoading] = useState(false);

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

  // Model form Close and Show---
  const handleMenuFormClose = () => {
    setMenuForm(false);
    setFormInput({
      name: "",
      description: "",
      price: "",
      rating: "",
      deliveryTime: "",
      offer: "",
      type: "",
      image: "",
    });
  };
  const handleMenuFormShow = () => setMenuForm(true);

  // Notification funcations---
  const notifySuccess = (msg) => toast.success(msg);
  const notifyError = (msg) => toast.error(msg);

  // Adding a Image---
  const handleImgFileChange = (e) => {
    setImgFile(e.target.files[0]);
  };

  // Adding form input---
  const addFormInput = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  // Form submit function---
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("menuimage", imgFile);
    formData.append("data", JSON.stringify(formInput));
    setLoading(true);
    await axios
      .post(`${SERVER_URL}/menu`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        notifySuccess(res.data.message);
        getMenuList();
        handleMenuFormClose();
      })
      .catch((err) => {
        notifyError(err.message);
      });
    setLoading(false);
  };

  // Delete menu items

  const deleteMenu = async (id) => {
    await axios
      .delete(`${SERVER_URL}/menu/${id}`)
      .then((res) => {
        console.log(res.data);
        notifySuccess(res.data.message);
        getMenuList();
      })
      .catch((err) => {
        console.log(err);
        notifyError(err.message);
      });
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
                value={formInput.name}
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
                  value={formInput.price}
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
                  value={formInput.deliveryTime}
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
                  value={formInput.rating}
                  onChange={addFormInput}
                  placeholder="Enter rating"
                />
              </InputGroup>

              <InputGroup as={Col} className="mb-3">
                <InputGroup.Text>
                  <RiDiscountPercentFill />
                </InputGroup.Text>
                <Form.Control
                  type="number"
                  name="offer"
                  value={formInput.offer}
                  onChange={addFormInput}
                  placeholder="Enter offer (optional)"
                />
              </InputGroup>
            </Row>

            <InputGroup as={Col} className="mb-3">
              <InputGroup.Text>
                <FaImage />
              </InputGroup.Text>
              <Form.Control type="file" onChange={handleImgFileChange} />
            </InputGroup>

            <Form.Select
              className="mb-3"
              aria-label="Floating label select example"
              name="type"
              value={formInput.type}
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
                name="description"
                value={formInput.description}
                onChange={addFormInput}
                placeholder="Enter description"
              />
            </Form.Group>

            <div className="w-100 d-flex justify-content-around">
              {loading ? (
                <Button variant="primary">
                  <SyncLoader color="#ffffff" />
                </Button>
              ) : (
                <Button variant="primary" type="submit">
                  + Add
                </Button>
              )}
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

      <div className=" d-flex justify-content-between">
        <h1>Menu</h1>
        <Button variant="primary" onClick={handleMenuFormShow}>
          + Add
        </Button>
      </div>

      <div className="w-100 overflow-scroll pt-2 mt-2 table-container">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Type</th>
              <th>Price</th>
              <th>offer</th>
              <th>Time</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {menuList.map((menu, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <img src={menu.image} width={50} alt={menu.name} />
                </td>
                <td>{menu.name}</td>
                <td>{menu.description}</td>
                <td>{menu.type}</td>
                <td>{menu.price}</td>
                <td>{menu.offer === null ? "-" : menu.offer}</td>
                <td>{menu.deliveryTime}</td>
                <td>{menu.rating}</td>
                <td className=" d-flex justify-content-around align-items-center">
                  <Button className="mt-1 p-1" variant="primary">
                    <FaEdit />
                    Edit
                  </Button>
                  <Button
                    className="mt-1 p-1"
                    variant="danger"
                    onClick={() => deleteMenu(menu._id)}
                  >
                    <MdDelete />
                    Delte
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Menu;
