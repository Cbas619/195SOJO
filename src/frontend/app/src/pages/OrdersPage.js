import { MainNav } from "../components/Main/MainNav";
import { MainCategories } from "../components/Main/MainCategories";
import { OrderCard } from "../components/Orders/OrderCard";
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { useContext, useReducer } from "react";
import { store } from '../store';
import { useNavigate, useParams, } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../actions/orderActions";
import { useEffect } from 'react';
import  {useState} from 'react';
import './styleSheets/OrdersPage.scss'
import Container from 'react-bootstrap/Container'
import axios from "axios";

const styles = {
    background: {
    backgroundColor: 'white',
    //width: '14.9vw',
    height: '100vh',
    paddingLeft: '90px',
    paddingTop: '30px',
    borderRadius: '10px'
    }
  }

export function OrdersPage() {


    //const {userInfo} = state;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, setUser] = useState("");
    const [productId, setProductId] = useState("");
    const [products, setProducts] = useState("")
    

    // const {loading, error, orders} = useSelector(state => state.orders)
    // useEffect(()=> {
    //     //we want to get all orders from the current user
    //     dispatch(getOrders("6458a2a693eddbd1d0ba0c5b"))
    // },[dispatch]);
    // console.log(orders.buyerId)

    useEffect(() => {
        (async () => {
          try {
            const respo = await axios.get("http://localhost:4000/api/user/user", {
              withCredentials: true,
            });
            setUser(respo.data._id);
          } catch (error) {
            console.log(error.respo);
          }
        })();
      });
      console.log(user)


      useEffect(() => {
        (async () => {
          try {
            const respo = await axios.get(`http://localhost:4000/api/orders/find/${user}`, {
              withCredentials: true,
            });
            setProductId(respo.data);
          } catch (error) {
            console.log(error.respo);
          }
        })();
      });
      console.log(productId)

    return (
        <>
        <MainNav/> 
        <MainCategories/>
        <div className="background-1">
            <div className="ordersPageContainer">
                <Container style={styles.background}>
                    <div className="ordersPageHeader">Order History</div>
                <div className="orderLine-1"></div>
                {productId && productId.map(productId => (
                <div className="mainItemCard">
              <OrderCard product={productId}/>
                </div>
                ))}
                </Container>
            </div>
        </div>
        </>
    );
}