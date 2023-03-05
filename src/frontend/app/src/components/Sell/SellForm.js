import "../../App.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

export function SellForm() {

  const [productName, setProductName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const productInsert = async (e) => {
    e.preventDefault(); 
    try {
        axios.post("http://localhost:4000/api/product/insert", {
		productName: productName,
		image: image,
		description:description,
		rating: rating,
		price: price,
    category: category
    }).then((response, err) => {
      console.log(response);
      navigate('/main');
      
    })} catch (error){
      console.log(JSON.stringify(error));
    }
  };

	return (
		
	  <Row>
      <Col>
	  <Form className='sellFormContainer'>
	  <Form.Group className="mb-3" controlId="formItemName">
        <Form.Label>Item Name</Form.Label>
        <Form.Control type="ItemName" placeholder="Enter Title" onChange={(e) => {setProductName(e.target.value)}}/>
      </Form.Group>

	  <Form.Group className="mb-3" controlId="formItemDescription">
        <Form.Label>Description of Item</Form.Label>
        <Form.Control type="ItemDescription" placeholder="Enter Item Description" onChange={(e) => {setDescription(e.target.value)}}/>
      </Form.Group>

	  <Form.Group className="mb-3" controlId="formRating">
        <Form.Label>Condition</Form.Label>
        <Form.Control type="ItemRating" placeholder="Enter Rating" onChange={(e) => {setRating(e.target.value)}}/>
      </Form.Group>

	  <Form.Group className="mb-3" controlId="formPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control type="ItemPrice" placeholder="Enter Price" onChange={(e) => {setPrice(e.target.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formCategory">
        <Form.Label>Category</Form.Label>
        <Form.Control type="ItemCategory" placeholder="Enter Category" onChange={(e) => {setCategory(e.target.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formImage">
        <Form.Label>Image</Form.Label>
        <Form.Control type="ItemImage" placeholder="Enter Iamge" onChange={(e) => {setImage(e.target.value)}}/>
      </Form.Group>

	  <Form.Group className="mb-3" controlId="formImage">
        <Form.Label>Category</Form.Label>
        <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Select Category
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>Books</Dropdown.Item>
        <Dropdown.Item>Supplies</Dropdown.Item>
        <Dropdown.Item>Electronics</Dropdown.Item>
        <Dropdown.Item>Clothing</Dropdown.Item>
        <Dropdown.Item>Entertainment</Dropdown.Item>
        <Dropdown.Item>General</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </Form.Group>
	  <Button variant="primary" type="submit" onClick={productInsert}>
        Submit
      </Button>
	  </Form>
	  </Col>
	  </Row>

	);
}