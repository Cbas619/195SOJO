import { MainNav } from "../components/Main/MainNav";
import { MainCategories } from "../components/Main/MainCategories";
import { OrderCard } from "../components/Orders/OrderCard";
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { useContext, useReducer } from "react";
import { store } from '../store';
import { useNavigate, useParams, } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../api/OrderRequests";
import { getCurrentUser } from "../api/UserRequests";
import { useEffect } from 'react';
import  {useState} from 'react';
import './styleSheets/OrdersPage.scss'
import Container from 'react-bootstrap/Container'
import axios from "axios";
import { getUser } from "../api/UserRequests";

const styles = {
    background: {
    backgroundColor: 'white',
    //width: '14.9vw',
    height: '100vh',
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
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    // const {loading, error, orders} = useSelector(state => state.orders)
    // useEffect(()=> {
    //     //we want to get all orders from the current user
    //     dispatch(getOrders("6458a2a693eddbd1d0ba0c5b"))
    // },[dispatch]);
    // console.log(orders.buyerId)

    useEffect(() => {
      (async () => {
        try {
          const {data} =  await getCurrentUser();
          setUser(data)
          console.log("SDSD", data)
        } catch (error) {
          //console.log(error.respo);
        }
      })();
    },[]);


    useEffect(() => {
      (async () => {
        try {
          const { data } = await getOrders(user._id.toString());
          setOrders(data);
          setLoading(false); // Mark loading as complete when orders are fetched
        } catch (error) {
          // Handle error
          setLoading(false); // Mark loading as complete even in case of error
        }
      })();
    }, [user._id]);

      const getSellerName = async (sellerId) => {
        try {
          const response = await getUser(sellerId.toString());
          return response.data.firstName; // Adjust the property according to your API response
        } catch (error) {
          // Handle error
          return "";
        }
      };
    
      useEffect(() => {
        (async () => {
          try {
            const { data } = await getOrders(user._id.toString());
            const updatedOrders = await Promise.all(
              data.map(async (order) => {
                const sellerName = await getSellerName(order.sellerId);
                return {
                  ...order,
                  sellerName: sellerName,
                };
              })
            );
            setOrders(updatedOrders);
            setLoading(false); // Mark loading as complete when orders are fetched
          } catch (error) {
            // Handle error
            setLoading(false); // Mark loading as complete even in case of error
          }
        })();
      }, [user._id]);

    return (
        <>
        <MainNav/> 
        <MainCategories/>
        <div className="background-1">
            <div className="ordersPageContainer">
                <Container style={styles.background}>
                    <div className="ordersPageHeader">Order History</div>
                <div className="orderLine-1"></div>
                <Row md={4}>
        {loading ? (
          <tr>
            <td colSpan={4}>Loading...</td>
          </tr>
        ) : (
        
          orders.map((order) => (
          
            <Col key={order._id}>
              <OrderCard product={order}/>
              <br/>
              </Col>
              
              
          ))
        )}
        </Row>
                </Container>
            </div>
        </div>
        </>
    );
}