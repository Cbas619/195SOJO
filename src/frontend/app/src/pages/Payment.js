import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import { MainNav } from "../components/Main/MainNav";
import { useNavigate } from 'react-router-dom';


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

  const handleSubmit=(e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, address, city, state, zip, cardNumber, expireDate, cvvNumber, nameOnCard);
    navigate('/paymentcomfirmation');
  }
  
return (
  <div>
  <MainNav/> 
  <br></br>
  <Container className="py-4 bg-danger">
    <h4>Checkout / Cart</h4>
  </Container>
   
  <br></br>
  <Container>
    <h5><strong>Shipping Info</strong></h5>
  </Container>

  <Container className="form">
  <Form onSubmit={handleSubmit}>
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
      <Form.Select defaultValue="Choose...">
        <option>Alabama</option>
        <option>Alaska</option>
        <option>Arizona</option>
        <option>Kentucky</option>
        <option>California</option>
        <option>Texas</option>
        <option>Colorado</option>
        <option>Florida</option>
        <option>Texas</option>
        <option>New Jersey</option>
        <option>Utah</option>
        <option>Michigan</option>
        <option>MaryLand</option>
        <option>Hawaii</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control placeholder='Zip Code' onChange={(e) => {setZip(e.target.value)}}/>
    </Form.Group>
  </Row>


</Form>
</Container>
<br></br>


<Container className='cardInfo'>
  <h5><strong>Shipping Info</strong></h5>
</Container>

<Form onSubmit={handleSubmit}>
<Container className='cardNumber'>
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

  <Button className='form-group-t' variant="primary" type="submit" onSubmit={handleSubmit}>
    Submit
  </Button>
</Container>
</Form>
</div>

  ); // end return
}
