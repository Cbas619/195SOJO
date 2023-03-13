import { Form, Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';



export function EditMyAccount() {
   

  return (
  <div>
  <Navbar bg="dark" variant="dark">
      <Container fluid>
          <Nav className='logo_Sojo'>
              <Navbar.Brand href="#home"><div className='logo'>SOJO</div></Navbar.Brand>
          </Nav>
          <Nav className="account_Nav">
          <Nav.Link href="/main">Search</Nav.Link>
          <Nav.Link href="account">My Account</Nav.Link>
          <Nav.Link href="/login">Log Out</Nav.Link>
          </Nav>


      </Container>
      </Navbar>


  <Navbar>
      <Container fluid>
          <Nav className="back-button">
               <Button href="/account">Back to my account</Button>
          </Nav>
      </Container> 
  </Navbar>


  <Container className='edit_text'>
       <h3>Edit Your Account</h3>
       <h4>Your Info</h4>


  <Form>
      <Row >
          <Col>
              <Form.Label>First Name</Form.Label>
              <Form.Control placeholder="First name" />
          </Col>
          <Col>
              <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder="Last name" />
          </Col>
      </Row>




      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
              Email
           </Form.Label>
          <Col sm={15}>
          <Form.Control type="email" placeholder="Email" />
          </Col>
      </Form.Group>




      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
          <Form.Label column sm={5}>
              Current Password
          </Form.Label>
          <Col sm={15}>
          <Form.Control type="password" placeholder="Password" />
          </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
          <Form.Label column sm={5}>
              New Password
          </Form.Label>
          <Col sm={15}>
          <Form.Control type="password" placeholder="Password" />
          </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
          <Form.Label column sm={5}>
              Confirm New Password
          </Form.Label>
          <Col sm={15}>
          <Form.Control type="password" placeholder="Password" />
          </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 5, offset: 15 }}>
              <Button type="submit">Save & updates</Button> 
          </Col>
          <Col sm={{ span: 5, offset: 15 }}>
              <Button type="submit">Cancel</Button>
          </Col>
       </Form.Group> 
  </Form>
  </Container>
  </div> //end div
   )
};
