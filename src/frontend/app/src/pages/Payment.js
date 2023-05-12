import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import { MainNav } from "../components/Main/MainNav";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { MainCategories } from '../components/Main/MainCategories';



export function Payment() {
  const [buyerId, setBuyerId] = useState("");
  const [productId, setProductId] = useState("");
  const navigate = useNavigate();
  const {_id} = useParams();
  const styles = {
    background: {
    backgroundColor: 'white',
    //width: '14.9vw',
    height: '100vh',
    paddingTop: '30px',
    borderRadius: '10px'
    }
  }
  // const handleSubmit=(e) => {
  //   e.preventDefault();
  //   console.log(firstName, lastName, email, address, city, state, zip, cardNumber, expireDate, cvvNumber, nameOnCard);
  //   navigate('/paymentcomfirmation');
  // }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:4000/api/orders/insert", {
          buyerId: buyerId,
          sellerId: productId.sellerId,
          productId: _id,
          productName: productId.productName,
          image: productId.image,
          description: productId.description,
          rating: productId.rating,
          price: productId.price,
          category: productId.category,
          school: productId.school,
        })
        .then((response, err) => {
          console.log(response);
          navigate('/paymentconfirmation');
        });
    } catch (error) {
      console.log(JSON.stringify(error));
    }
    try {
      axios
        .put(`http://localhost:4000/api/product/edit/${_id}`, {
          purchased: true 
        })
        .then((response, err) => {
          console.log(response);
          navigate('/paymentconfirmation');
        });
    } catch (error) {
      console.log(JSON.stringify(error));
    }
    try {
      axios
      .post("http://localhost:4000/api/chat/start", {
        senderId: buyerId,
        receiverId: productId.sellerId,
        productId: _id,
        productName: productId.productName,
      })
        .then((response, err) => {
          console.log(response);
          navigate('/paymentconfirmation');
        });
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const respo = await axios.get("http://localhost:4000/api/user/user", {
          withCredentials: true,
        });
        setBuyerId(respo.data._id);
      } catch (error) {
        console.log(error.respo);
      }
    })();
  });

  useEffect(() => {
    (async () => {
      try {
        const respo = await axios.get(`http://localhost:4000/api/product/find/${_id}`, {
          withCredentials: true,
        });
        setProductId(respo.data);
      } catch (error) {
        console.log(error.respo);
      }
    })();
  }, []);

  console.log(productId)
  console.log(productId.description)

return (
  <div>
  <MainNav/>
  <MainCategories/> 
  <div className="background-1">
  <div className="ordersPageContainer">
  <Container style={styles.background}>
  <Container >
  <div className="ordersPageHeader">Checkout / Cart</div>
                <div className="orderLine-1"></div>
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
      <Form.Control type="firstname" placeholder="First Name"/>

    </Form.Group> <br></br>

    <Form.Group as={Col} controlId="formLastName">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="lastName" placeholder="Last Name"/>
    </Form.Group>
  </Col>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Email</Form.Label>
    <Form.Control placeholder="Email Address"/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St, #82"/>
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formCity">
      <Form.Label>City</Form.Label>
      <Form.Control placeholder='City'/>
  </Form.Group>

  <Form.Group as={Col} controlId="formState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
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
      <Form.Control placeholder='Zip Code'/>
    </Form.Group>
  </Row>

<br></br>


<Container className='cardInfo'>
  <h5><strong>Card Info</strong></h5>
</Container>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Card Number</Form.Label>
    <Form.Control placeholder="123456789"/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formName">
    <Form.Label>Name</Form.Label>
    <Form.Control placeholder="Full Name"/>
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formExpireDate">
      <Form.Label>Expire Date</Form.Label>
      <Form.Control placeholder='Date'/>
  </Form.Group>

  <Form.Group as={Col} controlId="formCVV">
      <Form.Label>CVV</Form.Label>
      <Form.Control placeholder='123'/>

  </Form.Group>

    <Form.Group as={Col} controlId="formZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control placeholder='Zip Code'/>
    </Form.Group>
  </Row>

  <Button className='form-group-t' variant="primary" type="submit" onClick={handleSubmit}>
    Submit
  </Button>
</Form>
</Container>
</Container>
</div>
</div>
</div>

  ); // end return
}
