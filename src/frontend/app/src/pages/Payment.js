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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [selectState, setSelectState] = useState("");
  const [zip, setZip] = useState("");
  const [cardNumber, setCard] = useState("");
  const [expireDate, setExpire] = useState("");
  const [cvvNumber, setCVV] = useState("");
  const [nameOnCard, setName] = useState("");
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
        .post("http://localhost:4000/api/payment/insert", {
          firstName: firstName,
          lastName: lastName,
          email: email,
          address: address,
          city: city,
          state: selectState,
          zip: zip,
          cardNumber: cardNumber,
          expireDate: expireDate,
          cvvNumber: cvvNumber,
          nameOnCard: nameOnCard

        }).then((response, err) => {
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
          axios
        .put(`http://localhost:4000/api/product/edit/${_id}`, {
          purchased: true 
        })
        }).then((response, err) => {
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
  <div className="ordersPageHeader">Checkout</div>
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
      <Form.Select defaultValue="Choose..." onChange={(e) => {setSelectState(e.target.value)}}>
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
</Container>
</div>
</div>
</div>

  ); // end return
}
