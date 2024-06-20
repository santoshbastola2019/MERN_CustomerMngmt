import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/user");
      const result = await response.json();
      if (Array.isArray(result)) {
        setUsers(result);
      } else if (result.users) {
        setUsers(result.users);
      }
    } catch (error) {
      console.error("Error while fetching users", error.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleUpdate = (userId) => {
    navigate(`/user/${userId}`);
  };

  const handleDelete = async (userId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/user/${userId}`, {
        method: "Delete",
      });
      console.log(response);
      if (response.ok) {
        fetchUsers();
      }
    } catch (error) {
      console.error("Error while deleting users", error.message);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center">DashBoard Component</h1>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                {/* <th>Action</th> */}
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <Button
                      variant="dark"
                      onClick={() => handleUpdate(user._id)}
                    >
                      Update
                    </Button>{" "}
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(user._id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
