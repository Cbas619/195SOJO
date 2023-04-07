import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import { MainNav } from "../components/Main/MainNav";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export function Payment() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [cardNumber, setCard] = useState("");
  const [expireDate, setExpire] = useState("");
  const [cvvNumber, setCVV] = useState("");
  const [nameOnCard, setName] = useState("");
  const navigate = useNavigate();

  // const handleSubmit=(e) => {
  //   e.preventDefault();
  //   console.log(firstName, lastName, email, address, city, state, zip, cardNumber, expireDate, cvvNumber, nameOnCard);
  //   navigate('/paymentcomfirmation');
  // }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:4000/api/payment/insert", {
          firstName: firstName,
          lastName: lastName,
          email: email,
          address: address,
          city: city,
          state: state,
          zip: zip,
          cardNumber: cardNumber,
          expireDate: expireDate,
          cvvNumber: cvvNumber,
          nameOnCard: nameOnCard
        })
        .then((response, err) => {
          console.log(response);
          navigate('/paymentconfirmation');
        });
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };

return (
  <div>
  <MainNav/> 
  <br></br>
  <Container >
    <h4>Checkout / Cart</h4>
  </Container>
  <br></br>
  <Container>
    <h5><strong>Shipping Info</strong></h5>
  </Container>

  <Container className="form">
  <Form>
  <Col className="mb-3">
    <Form.Group as={Col} controlId="formFirstName">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="firstname" placeholder="First Name" onChange={(e) => {setFirstName(e.target.value)}}/>

    </Form.Group> <br></br>

    <Form.Group as={Col} controlId="formLastName">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="lastName" placeholder="Last Name" onChange={(e) => {setLastName(e.target.value)}}/>
    </Form.Group>
  </Col>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Email</Form.Label>
    <Form.Control placeholder="Email Address" onChange={(e) => {setEmail(e.target.value)}}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St, #82" onChange={(e) => {setAddress(e.target.value)}}/>
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formCity">
      <Form.Label>City</Form.Label>
      <Form.Control placeholder='City' onChange={(e) => {setCity(e.target.value)}}/>
  </Form.Group>

  <Form.Group as={Col} controlId="formState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose..." onChange={(e) => {setState(e.target.value)}}>
        <option value="Alabama">Alabama</option>
        <option value="Alaska">Alaska</option>
        <option value="Arizona">Arizona</option>
        <option value="Kentucky">Kentucky</option>
        <option value="California">California</option>
        <option value="Texas">Texas</option>
        <option value="Colorado">Colorado</option>
        <option value="Florida">Florida</option>
        <option value="New Jersey">New Jersey</option>
        <option value="Utah">Utah</option>
        <option value="Michigan">Michigan</option>
        <option value="MaryLand">MaryLand</option>
        <option value="Hawaii">Hawaii</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control placeholder='Zip Code' onChange={(e) => {setZip(e.target.value)}}/>
    </Form.Group>
  </Row>

<br></br>


<Container className='cardInfo'>
  <h5><strong>Card Info</strong></h5>
</Container>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Card Number</Form.Label>
    <Form.Control placeholder="123456789" onChange={(e) => {setCard(e.target.value)}}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formName">
    <Form.Label>Name</Form.Label>
    <Form.Control placeholder="Full Name" onChange={(e) => {setName(e.target.value)}}/>
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formExpireDate">
      <Form.Label>Expire Date</Form.Label>
      <Form.Control placeholder='Date' onChange={(e) => {setExpire(e.target.value)}}/>
  </Form.Group>

  <Form.Group as={Col} controlId="formCVV">
      <Form.Label>CVV</Form.Label>
      <Form.Control placeholder='123' onChange={(e) => {setCVV(e.target.value)}}/>

  </Form.Group>

    <Form.Group as={Col} controlId="formZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control placeholder='Zip Code' onChange={(e) => {setZip(e.target.value)}}/>
    </Form.Group>
  </Row>

  <Button className='form-group-t' variant="primary" type="submit" onClick={handleSubmit}>
    Submit
  </Button>
</Form>
</Container>
</div>

  ); // end return
}
