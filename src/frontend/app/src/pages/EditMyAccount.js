import { Form } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { MainNav } from "../components/Main/MainNav";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import {MainCategories} from '../components/Main/MainCategories'
import Alert from 'react-bootstrap/Alert';

export function EditMyAccount() {
  const location = useLocation();

  const [showError, setShowError] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const styles = {
    background: {
    backgroundColor: 'white',
    width: '30%',
    height: '50%',
    paddingTop: '30px',
    borderRadius: '10px'
    }
  }
  //connect to backend
  useEffect(() => {
    if (location.state) {
      setFirstName(location.state.firstName);
      setLastName(location.state.lastName);
      setEmail(location.state.email);
      setId(location.state.id);
    }
  }, [location.state]);

  const onChange = async (data) => {
    const { firstName, lastName, email, password } = data;
    const putData = { firstName, lastName, email, password };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/payment");
  };

  const edit = async (e) => {
    e.preventDefault();
    try {
      const body = { firstName, lastName, email, password };
      // if (password.trim() !== '') body.password = password;
      await axios
        .put(`http://localhost:4000/api/user/change/${id}`, body, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Cookies.get("jwt")}`,
          },
        })
        .then((response, err) => {
          console.log("Successfully updated account!");
          navigate("/account");
        });
    } catch (error) {
      console.error(JSON.stringify(error));
    }
  };
  return (
    <div>
      <MainNav />
      <MainCategories />
      <div className="background-1">
      <div className="ordersPageContainer">
      <Container style={styles.background}>
      <Container >
  <div className="ordersPageHeader">Edit Your Account</div>
                <div className="orderLine-1"></div>
  </Container>
      <Container className="edit_text">
        <Form onSubmit={handleSubmit}>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalFirstName"
          >
            <Col>
              <Form.Label>First Name:</Form.Label>
              <Form.Control
                type="firstName"
                placeholder="First name"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalLastName"
          >
            <Col>
              <Form.Label>Last Name:</Form.Label>
              <Form.Control
                type="lastName"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Email:
            </Form.Label>
            <Col sm={15}>
              <Form.Control
                type="email"
                value={email}
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Col>
          </Form.Group>

          {/* <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
          <Form.Label column sm={5}>
              Current Password (Does not work)
          </Form.Label>
          <Col sm={15}>
          <Form.Control type="password" placeholder="Password" />
          </Col>
      </Form.Group> */}
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalNewPassword"
          >
            <Form.Label column sm={5}>
              New Password:
            </Form.Label>
            <Col sm={15}>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Col>
          </Form.Group>
          {/* <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
          <Form.Label column sm={5}>
              Confirm New Password (Does not work)
          </Form.Label>
          <Col sm={15}>
          <Form.Control type="password" placeholder="Password" />
          </Col>
      </Form.Group> */}
          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 5, offset: 15 }}>
            {error && <Alert variant="danger">
          {error}
        </Alert>}
              <br/>
              <Button className='form-group-t2' type="submit" onClick={edit}>
                Save
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </Container>
      <br/>
      <br/>
      </Container>
      </div>
      </div>
    </div> //end div
  );
}