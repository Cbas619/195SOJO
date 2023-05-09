import { MainNav } from "../components/Main/MainNav";
import { MainCategories } from "../components/Main/MainCategories";
import { OrderCard } from "../components/Orders/OrderCard";
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { useContext, useReducer } from "react";
import { store } from '../store';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../actions/orderActions";
import { useEffect } from 'react';
import  {useState} from 'react';
import './styleSheets/OrdersPage.scss'
import Container from 'react-bootstrap/Container'

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
    

    const {loading, error, orders} = useSelector(state => state.orders)
    useEffect(()=> {
        //we want to get all orders from the current user
        dispatch(getOrders("642e4234c668c0819f972908"))
    },[dispatch]);

    return (
        <>
        <MainNav/> 
        <MainCategories/>
        <div className="background-1">
            <div className="ordersPageContainer">
                <Container style={styles.background}>
                    <div className="ordersPageHeader">Order History</div>
                <div className="orderLine-1"></div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>DATE</th>
                            <th>SELLER</th>
                            <th>PRODUCT</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                    {orders ? ( (Array.isArray(orders) && orders.length > 0) && orders.map(orders =>(
                            <tr key={orders._id}>
                                <td>{orders._id}</td>
                                <td>{orders.date.substring(0,10)}</td>
                                <td>{orders.buyerId}</td>
                                <td>{orders.productId}</td>
                            </tr> 
                        )) ) : (
                            <>
                            </>
                        )}
                        
                    </tbody>
                </table>
                </Container>

            </div>
        </div>
        </>
    );
}