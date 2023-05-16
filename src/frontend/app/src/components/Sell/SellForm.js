import "../../App.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { getUsers } from "../../actions/userActions"
import { useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';

export function SellForm() {
  const [productName, setProductName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [school, setSchool] = useState("");
  const [sellerId, setSellerId] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [error, setError] = useState(null);

  const productInsert = async (e) => {
    e.preventDefault();

    console.error(selectedFile);
    if (!selectedFile) {
      console.error("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("category", category);
    formData.append("school", school);
    formData.append("sellerId", sellerId);
    formData.append("description", description);
    formData.append("rating", rating);
    formData.append("price", price);
    formData.append("myImage", selectedFile);
    formData.append("productName", productName);

    for (var pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    try {
      const local = new FormData();
      local.append("myImage", selectedFile);

      axios
        .post("./upload", local)
        .then((response) => {
          console.log("Image uploaded successfully");
        })
        .catch((error) => {
          console.error("Image upload failed", error);
        });
    } catch (error) {
      console.log(error);
    }

    try {
      axios
        .post("http://localhost:4000/api/product/insert", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })

          navigate("/main");
    } catch (error) {
      setError("Failed to create item")
      console.log(JSON.stringify(error));
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const respo = await axios.get("http://localhost:4000/api/user/user", {
          withCredentials: true,
        });
        setSchool(respo.data.school);
        setFirstName(respo.data.firstName)
        setLastName(respo.data.lastName)
      } catch (error) {
        console.log(error.respo);
      }
    })();
  });
  console.log(school);
  useEffect(() => {
    (async () => {
      try {
        const respo = await axios.get("http://localhost:4000/api/user/user", {
          withCredentials: true,
        });
        setSellerId(respo.data._id);
      } catch (error) {
        console.log(error.respo);
      }
    })();
  });

  return (
    <Row>
      <Col>
        <form className="sellFormContainer" encType="multipart/form-data">
          <Form.Group className="mb-3" controlId="formItemName">
            <Form.Label>Item Name:</Form.Label>
            <Form.Control
              type="ItemName"
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
              placeholder="Enter Item Description"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formRating">
            <Form.Label>Rating:</Form.Label>
            <Form.Select aria-label="Default select example" onChange={(e) => {
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
              placeholder="Enter Price"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </Form.Group>


          <Form.Group className="mb-3" controlId="formImage">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              placeholder="Enter Image"
              onChange={handleFileChange}
              name="myImage"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formCategory">
            <Form.Label>Category</Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
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
            <Form.Select aria-label="Default select example" onChange={(e) => {
                setPaymentType(e.target.value);
              }}>
            <option>Open this select menu</option>
            <option value="in-person">In-person</option>
            <option value="online">Online</option>
            <option value="both">Both</option>
            </Form.Select>
          </Form.Group>
          {error && <Alert variant="danger">
          {error}
        </Alert>}
          <br/>
          <Button className="form-group-t" variant="primary" type="submit" onClick={productInsert}>
            Submit
          </Button>
        </form>
      </Col>
    </Row>
  );
}
