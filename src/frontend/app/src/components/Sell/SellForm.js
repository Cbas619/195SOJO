import "../../App.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { getUsers } from "../../actions/userActions";
import { useEffect } from "react";

export function SellForm() {
  const [productName, setProductName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [school, setSchool] = useState("");
  const [sellerId, setSellerId] = useState("");
  const navigate = useNavigate();

  const productInsert = async (e) => {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:4000/api/product/insert", {
          productName: productName,
          image: image,
          description: description,
          rating: rating,
          price: price,
          category: category,
          school: school,
          sellerId: sellerId,
        })
        .then((response, err) => {
          console.log(response);
          navigate("/main");
        });
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };

  //Upload image API
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/product/get")
      .then((res) => {
        console.log(res.data);
        setImage(res.data);
      })
      .catch((err) => console.log(err));
  });

  const uploadImage = async (e) => {
    e.preventDefault();
    try {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("image", file);
      const respo = await axios.post(
        "http://localhost:4000/api/product/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      setImage(respo.data);
    } catch (error) {
      console.log(error.respo);
    }
  }; ////end upload image API

  useEffect(() => {
    (async () => {
      try {
        const respo = await axios.get("http://localhost:4000/api/user/user", {
          withCredentials: true,
        });
        setSchool(respo.data.school);
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
        <Form className="sellFormContainer">
          <Form.Group className="mb-3" controlId="formItemName">
            <Form.Label>Item Name</Form.Label>
            <Form.Control
              type="ItemName"
              placeholder="Enter Title"
              onChange={(e) => {
                setProductName(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formItemDescription">
            <Form.Label>Description of Item</Form.Label>
            <Form.Control
              type="ItemDescription"
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
            <Form.Label>Rating</Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => {
                setRating(e.target.value);
              }}
            >
              <option>Enter Rating</option>
              <option value="new">New</option>
              <option value="used">Used</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="ItemPrice"
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

          <Form.Group className="mb-3" controlId="formImage">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="ItemImage"
              placeholder="Enter Image"
              onChange={(e) => {
                setImage(e.target.value);
              }}
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
          <Button variant="primary" type="submit" onClick={productInsert}>
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
}
