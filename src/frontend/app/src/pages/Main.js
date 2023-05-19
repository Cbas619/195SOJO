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
import { userChats } from "../api/ChatRequests";

export function Main() {

  const dispatch = useDispatch();
  const [school, setSchool] = useState("");
  const [id, setId] = useState("");
  const {loading, products, error} = useSelector(state => state.products)
  const[user, setUser] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const {data} =  await getCurrentUser();
        setSchool(data.school);
        setId(data._id);
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




  //chat
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await userChats(user._id);
        setChats(data);
      } catch (error) {
        console.log(error);
      }
    };
  
    getChats();
  }, [user._id]);


  return (
    <>
    <MainNav/> 
    <MainCategories/>
    <div className="background-1">
    {/* {chats.length > 0 && (
          <div className="mainMessagesSection">
            <Link to="/chat">
              <a id="mainMessagesHeader">Your messages</a>
            </Link>
            <div className="mainLine-1"></div>
            <Row>
              {chats.map(chat => {
                const product = products.find(product => product._id === chat.productId);
                return (
                  product && (
                    <Col key={product._id} sm={6} md={4} lg={2}>
                      <div className="mainItemCard">
                        <MainMessageCard order={product} />
                      </div>
                    </Col>
                  )
                );
              })}
            </Row>
          </div>
        )} */}

      <div className="mainFeaturedSection">
        <div id="mainPageHeader">Featured Items</div>
        <div className="mainLine-1"></div>
        <div className="mainFeaturedCategoryContainer">
          <MainHeaders categoryHeader="Books for the brain | " linkHeader="See all books" categoryLink="/books"/>
          <Row>
          {products && products
            .filter(product => product.category === 'books' && product.purchased === false && product.school === school && product.sellerId !== id)
            .slice(0, 5)
            .map(product => (
              <Col key={product._id} sm={6} md={4} lg={2}>
                <div className="mainItemCard">
                  <MainItemCards product={product}/>
                </div>
              </Col>
          ))}
          </Row>
        </div>

        <div className="mainFeaturedCategoryContainer">
          <MainHeaders categoryHeader="Work with Supplies | " linkHeader="See all school supplies" categoryLink="/officesupplies" />
          <Row>
          {products && products
            .filter(product => product.category === 'supplies' && product.purchased === false && product.school === school && product.sellerId !== id)
            .slice(0, 5)
            .map(product => (
              <Col key={product._id} sm={6} md={4} lg={2}>
                <div className="mainItemCard">
                  <MainItemCards product={product}/>
                </div>
              </Col>
          ))}
         </Row>
        </div>


        <div className="mainFeaturedCategoryContainer">
          <MainHeaders categoryHeader="Tinker with Electronics | " linkHeader="See all electronics" categoryLink="/electronics" />
          <Row>
          {products && products
            .filter(product => product.category === 'electronics' && product.purchased === false && product.school === school && product.sellerId !== id)
            .slice(0, 5)
            .map(product => (
              <Col key={product._id} sm={6} md={4} lg={2}>
                <div className="mainItemCard">
                  <MainItemCards product={product}/>
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