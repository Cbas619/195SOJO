import { MainNav } from "../../components/Main/MainNav";
import { MainCategories } from "../../components/Main/MainCategories";
import { MainItemCards } from "../../components/Main/MainItemCards";
import  {useState} from 'react';
import { useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector } from 'react-redux'
import { getProducts } from "../../actions/productActions";
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import axios from 'axios';
export function Books() {

  const [state, setState] = useState([])
  const navigate = useNavigate();
  const [cart, setCart] = useState("");


  const dispatch = useDispatch();


  const {loading, products, error} = useSelector(state => state.products)
  const [school, setSchool] = useState("");
  const [id, setId] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const respo = await axios.get("http://localhost:4000/api/user/user", {
          withCredentials: true,
        });
        setSchool(respo.data.school);
        setId(respo.data._id);
        console.log(respo)
      } catch (error) {
        console.log(error.respo);
      }
    })();
  });


  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

//Add to cart handle submit
  const handleSubmit =(e) => {
    e.preventDefault();
    navigate('/payment');
    
  }


  return (
    <>
    <MainNav/> 
    <MainCategories/>
    <div className="background-1">
      <div className="categoryPageHeader">Books</div>
      <div className="categorySection">
        <Row>
        {products && products.map(products => (
           products.category === 'books' && products.purchased === false && products.school === school && products.sellerId !== id &&
            <Col key={products._id} sm={6} md={4} lg={2}>
              <div className="mainItemCard">
              <MainItemCards product={products}/>
              </div>
            </Col>
        ))}
        <div>
        </div> 
        </Row>        
      </div>

    </div>
    </>       
  );
}