import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import { MainNav } from "../components/Main/MainNav";


export function Payment() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  
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
  <Form>
  <Col className="mb-3">
    <Form.Group as={Col} controlId="formFirstName">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="firstname" placeholder="First Name" />
    </Form.Group> <br></br>

    <Form.Group as={Col} controlId="formLastName">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="password" placeholder="Last Name" />
    </Form.Group>
  </Col>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Email</Form.Label>
    <Form.Control placeholder="Email Address" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St, #82" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formCity">
      <Form.Label>City</Form.Label>
      <Form.Control placeholder='City'/>
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
      <Form.Control placeholder='Zip Code'/>
    </Form.Group>
  </Row>


</Form>
</Container>
<br></br>

<Container className='cardInfo'>
  <h5><strong>Shipping Info</strong></h5>
</Container>

<Container className='cardNumber'>
  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Card Number</Form.Label>
    <Form.Control placeholder="123456789" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formName">
    <Form.Label>Name</Form.Label>
    <Form.Control placeholder="" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formExpireDate">
      <Form.Label>Expire Date</Form.Label>
      <Form.Control placeholder='City'/>
  </Form.Group>

  <Form.Group as={Col} controlId="formCVV">
      <Form.Label>CVV</Form.Label>
      <Form.Control placeholder='123'></Form.Control>

  </Form.Group>

    <Form.Group as={Col} controlId="formZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control placeholder='Zip Code'/>
    </Form.Group>
  </Row>



  <Button className='form-group-t' variant="primary" type="submit">
    Submit
  </Button>
</Container>
</div>

  );
}
