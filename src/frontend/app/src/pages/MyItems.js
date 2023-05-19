import { MainNav } from "../components/Main/MainNav";
import { MainCategories } from "../components/Main/MainCategories";
import { OrderCard } from "../components/Orders/OrderCard";
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { useContext, useReducer } from "react";
import { store } from '../store';
import { useNavigate, useParams, } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";
import { getCurrentUser } from "../api/UserRequests";
import { useEffect } from 'react';
import  {useState} from 'react';
import './styleSheets/OrdersPage.scss'
import Container from 'react-bootstrap/Container'
import axios from "axios";
import { MyItemCard } from "../components/Item/MyItemCard";
import { getUser } from "../api/UserRequests";

const styles = {
    background: {
    backgroundColor: 'white',
    height: '100vh',
    paddingTop: '30px',
    borderRadius: '10px'
    }
  }

export function MyItems() {


    //const {userInfo} = state;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, setUser] = useState("");
    const [productId, setProductId] = useState("");

    // const {loading, error, orders} = useSelector(state => state.orders)
    // useEffect(()=> {
    //     //we want to get all orders from the current user
    //     dispatch(getOrders("6458a2a693eddbd1d0ba0c5b"))
    // },[dispatch]);
    // console.log(orders.buyerId)
    
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
        } catch (error) {
          console.log(error.respo);
        }
      })();
    });
    useEffect(() => {
      dispatch(getProducts())
    }, [dispatch])
  console.log(products)
  console.log(id)
    return (
        <>
        <MainNav/> 
        <MainCategories/>
        <div className="background-1">
            <div className="ordersPageContainer">
                <Container style={styles.background}>
                    <div className="ordersPageHeader">My Items</div>
                <div className="orderLine-1"></div>
                <Row md={4}>
                {
        
          products && products
            .filter(products => products.sellerId === id)
            .slice(0, 12).map ((order) => (
            // products.description === "asdf" &&
           
            <Col key={order._id}>
              <MyItemCard product={order}/>
              <br/>
              </Col>
              
              
          ))
        }
        
      </Row>
                </Container>
            </div>
        </div>
        </>
    );
}