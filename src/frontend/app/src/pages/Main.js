import { MainNav } from "../components/Main/MainNav";
import { MainHeaders } from "../components/Main/MainHeaders"
import { MainCategories } from "../components/Main/MainCategories";
import { MainItemCards } from "../components/Main/MainItemCards";
import { MainMessageCard } from "../components/Main/MainMessageCard";
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import  {useState} from 'react';
import { useEffect } from 'react';
//import { Logout } from "../utils/Logout";
import { Link } from 'react-router-dom';
import {useDispatch, useSelector } from 'react-redux'
import { getProducts } from "../actions/productActions";
//import { getOrders } from "../actions/orderActions";
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { getCurrentUser } from "../api/UserRequests";
import { getOrders } from "../api/OrderRequests";

export function Main() {

  const dispatch = useDispatch();
  const [school, setSchool] = useState("");
  const {loading, products, error} = useSelector(state => state.products)
  //const{orders} = useSelector(state => state.orders)
  const[user, setUser] = useState({});
  const[orders, setOrders] = useState([]);
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
    (async () => {
      try {
        const {data} =  await getCurrentUser();
        setSchool(data.school);
        setUser(data)
        console.log("SDSD", data)
      } catch (error) {
        //console.log(error.respo);
      }
    })();
  },[]);


  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  useEffect(() => {
    (async () => {
      try {
        const {data} =  await getOrders(user._id.toString());
        setOrders(data)
      } catch (error) {
        //console.log(error.respo);
      }
    })();
  },[user._id]);


  return (
    <>
    <MainNav/> 
    <MainCategories/>
    <div className="background-1">
    {orders && orders.length > 0 && (
        <div className="mainMessagesSection">
          <Link to="/chat">
            <a id="mainMessagesHeader">Your messages</a>
          </Link>
          <div className="mainLine-1"></div>
          <Row>
            {orders.slice(0, 5).map(order => (
              <Col key={order._id} sm={6} md={4} lg={2}>
                <div className="mainItemCard">
                  <MainMessageCard order={order}/>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      )}
     

      <div className="mainFeaturedSection">
        <div id="mainPageHeader">Featured Items</div>
        <div className="mainLine-1"></div>
        <div className="mainFeaturedCategoryContainer">
          <MainHeaders categoryHeader="Books for the brain | " linkHeader="See all books" categoryLink="/books"/>
          <Row>
          {products && products.map(products => (
          products.category === 'books' && products.purchased === false && products.school === school &&
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
          products.category === 'supplies' && products.purchased === false && products.school === school &&
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