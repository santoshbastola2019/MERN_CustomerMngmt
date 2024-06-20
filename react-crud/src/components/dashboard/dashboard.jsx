import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
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
    fetchUsers();
  }, []);

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
