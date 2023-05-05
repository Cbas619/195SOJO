import { MainNav } from "../components/Main/MainNav";
import { MainHeaders } from "../components/Main/MainHeaders"
import { MainCategories } from "../components/Main/MainCategories";
import { MainItemCards } from "../components/Main/MainItemCards";
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import  {useState} from 'react';
import { useEffect } from 'react';
//import { Logout } from "../utils/Logout";

import {useDispatch, useSelector } from 'react-redux'
import { getProducts } from "../actions/productActions";
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

export function Main() {

  const dispatch = useDispatch();

  const {loading, products, error} = useSelector(state => state.products)

  const navigate = useNavigate();
  const Logout = async (e) => {
    e.preventDefault(); 
    try {
      await axios.post("http://localhost:4000/api/auth/logout")
      .then((response, err) => {
      console.log(response);
      navigate('/');
      
    })} catch (error){
      console.log(JSON.stringify(error));
    }
  };


  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])



  return (
    <>
    <MainNav/> 
    <MainCategories/>
    <div className="background-1">

      <div className="mainMessagesSection">
        <div id="mainMessagesHeader">Your messages</div>
        <div className="mainLine-1"></div>
        <Row>
          {products && products.map(products => (
          <Col key={products._id} sm={6} md={4} lg={2}>
            <div className="mainItemCard">
              <MainItemCards product={products}/>
            </div>
          </Col>
        ))}
        </Row>
      </div>

      <div className="mainFeaturedSection">
        <div id="mainPageHeader">Featured Items</div>
        <div className="mainLine-1"></div>
        <div className="mainFeaturedCategoryContainer">
          <MainHeaders categoryHeader="Books for the brain | " linkHeader="See all books" categoryLink="/books"/>
          <Row>
          {products && products.map(products => (
          products.category === 'books' && products.purchased === false &&
          <Col key={products._id} sm={6} md={4} lg={2}>
            <div className="mainItemCard">
              <MainItemCards product={products}/>
            </div>
          </Col>
        ))}
          </Row>
        </div>

        <div className="mainFeaturedCategoryContainer">
          <MainHeaders categoryHeader="Work with Supplies | " linkHeader="See all school supplies" categoryLink="/officesupplies" />
          <Row>
          {products && products.map(products => (
          products.category === 'supplies' && products.purchased === false &&
          <Col key={products._id} sm={6} md={4} lg={2}>
            <div className="mainItemCard">
              <MainItemCards product={products}/>
            </div>
          </Col>
        ))}
         </Row>
        </div>
      </div>
      
      <br></br>
    </div>
    
    </>       
  );
}