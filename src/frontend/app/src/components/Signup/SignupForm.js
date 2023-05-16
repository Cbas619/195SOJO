import "../../App.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';

export function SignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [school, setSchool] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    try {
      const res = await axios
        .post("http://localhost:4000/api/auth/register", {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          school: school,
        })
        console.log(res);
          navigate("/login");
    } catch (err) {
      setError("Failed to create account")
      console.log(err);
    }
  };

  return (
    <Row>
      <Col>
        <Form className="container">
          <Form.Group className="mb-3" controlId="formFirstName">
            <Form.Label>First Name:</Form.Label>
            <Form.Control
              type="firstName"
              placeholder="Enter First Name"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formLastName">
            <Form.Label>Last Name:</Form.Label>
            <Form.Control
              type="lastName"
              placeholder="Enter Last Name"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>School:</Form.Label>
            <Form.Select aria-label="Default select example" onChange={(e) => {
                setSchool(e.target.value);
              }}
            >
              <option>Enter School</option>
              <option value="SJSU">SJSU</option>
              <option value="SJCC">SJCC</option>
            </Form.Select>
          </Form.Group>
          {error && <Alert variant="danger">
          {error}
        </Alert>}
          <br/>
          <Button className="form-group-t" variant="primary" type="submit" onClick={register}>
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
}
