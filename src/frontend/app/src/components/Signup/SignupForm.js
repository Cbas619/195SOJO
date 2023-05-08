import "../../App.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [school, setSchool] = useState("");
  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:4000/api/auth/register", {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          school: school,
        })
        .then((response, err) => {
          console.log(response);
          navigate("/login");
        });
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };

  return (
    <Row>
      <Col>
        <Form className="container">
          <Form.Group className="mb-3" controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="firstName"
              placeholder="Enter First Name"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="lastName"
              placeholder="Enter Last Name"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>School</Form.Label>
            <Form.Control
              type="school"
              placeholder="school"
              onChange={(e) => {
                setSchool(e.target.value);
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={register}>
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
}
