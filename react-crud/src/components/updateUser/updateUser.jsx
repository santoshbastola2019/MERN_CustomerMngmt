import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import "../updateUser/updateUser.css";

const UpdateUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/user/${id}`);
        const result = await response.json();
        if (result) {
          setFormData(result);
        }
      } catch (error) {
        console.error("Error while fetching users", error.message);
      }
    };
    fetchUser();
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData.name);
    // console.log(formData.email);
    // console.log(formData.phone);
    try {
      const response = await fetch(`http://localhost:5000/api/user/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json(response);
      console.log(data);
      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <div className="center-form">
        <h1>Update User</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicName">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicName">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="phone"
              name="phone"
              placeholder="Enter phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Button variant="dark" type="submit" className="w-100">
            Update User
          </Button>
        </Form>
      </div>
    </>
  );
};

export default UpdateUser;
