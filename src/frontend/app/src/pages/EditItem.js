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

export function EditItem() {
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [productName, setProductName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [school, setSchool] = useState("");
  const [sellerId, setSellerId] = useState("");
  const [paymentType, setPaymentType] = useState("");
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
      setId(location.state._id)
      setProductName(location.state.productName)
      setDescription(location.state.description)
      setRating(location.state.rating)
      setPrice(location.state.price);
      setCategory(location.state.category);
      setPaymentType(location.state.paymentType);
      setImage(location.state.image);
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
      const body = { productName, description, rating, price, category, paymentType, image };
      // if (password.trim() !== '') body.password = password;
      await axios
        .put(`http://localhost:4000/api/product/edit/${id}`, body, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Cookies.get("jwt")}`,
          },
        })
        .then((response, err) => {
          console.log("Successfully updated account!");
          navigate("/main");
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
      <div className="ordersPageHeader">Edit Item</div>
                <div className="orderLine-1"></div>
      <Row>
      <Col>
        <Form className="sellFormContainer">
          <Form.Group className="mb-3" controlId="formItemName">
            <Form.Label>Item Name:</Form.Label>
            <Form.Control
              type="ItemName"
              value={productName}
              placeholder="Enter Item Name"
              onChange={(e) => {
                setProductName(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formItemDescription">
            <Form.Label>Description of Item:</Form.Label>
            <Form.Control
              type="ItemDescription"
              value={description}
              placeholder="Enter Item Description"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </Form.Group>

          {/* <Form.Group className="mb-3" controlId="formRating">
            <Form.Label>Condition</Form.Label>
            <Form.Control
              type="ItemRating"
              placeholder="Enter Rating"
              onChange={(e) => {
                setRating(e.target.value);
              }}
            />

            </Form.Group> */}
          <Form.Group className="mb-3" controlId="formRating">
            <Form.Label>Rating:</Form.Label>
            <Form.Select aria-label="Default select example" value={rating} onChange={(e) => {
                setRating(e.target.value);
              }}>
            <option>Enter Rating:</option>
            <option value="new">New</option>
            <option value="used">Used</option>
            </Form.Select>
          </Form.Group>


          

          <Form.Group className="mb-3" controlId="formPrice">
            <Form.Label>Price:</Form.Label>
            <Form.Control
              type="ItemPrice"
              value={price}
              placeholder="Enter Price"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </Form.Group>

          {/* <Form.Group className="mb-3" controlId="formCategory">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="ItemCategory"
              placeholder="Enter Category"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
          </Form.Group> */}


          <Form.Group className="mb-3" controlId="formCategory">
            <Form.Label>Category:</Form.Label>
            <Form.Select aria-label="Default select example" value={category} onChange={(e) => {
                setCategory(e.target.value);
              }}>
            <option>Open this select menu</option>
            <option value="books">Books</option>
            <option value="supplies">Supplies</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="entertainment">Entertainment</option>
            <option value=" ">General</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPaymentType">
            <Form.Label>Payment Type:</Form.Label>
            <Form.Select aria-label="Default select example" value={paymentType} onChange={(e) => {
                setPaymentType(e.target.value);
              }}>
            <option>Open this select menu</option>
            <option value="in-person">In-person</option>
            <option value="online">Online</option>
            <option value="both">Both</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formImage">
            <Form.Label>Upload Image:</Form.Label>
            <Form.Control
              type="img"
              onChange={(e) => {
                // setImage(e.target.files[0]);
                setImage(e.target.value);
              }}
            />
          </Form.Group>
          {error && <Alert variant="danger">
          {error}
        </Alert>}
          <br/>
          <Button className="form-group-t" variant="primary" type="submit" onClick={edit}>
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
      <br/>
      <br/>
      </Container>
      </div>
      </div>
    </div> //end div
  );
}