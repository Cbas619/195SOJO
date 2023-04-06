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


export function OrdersPage() {


    //const {userInfo} = state;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {loading, error, orders} = useSelector(state => state.orders)
    useEffect(()=> {
        dispatch(getOrders())
    },[dispatch]);

    return (
        <>
        <MainNav/> 
        <MainCategories/>
        <div className="background-1">
            <div className="ordersPageContainer">
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
                    {(Array.isArray(orders) && orders.length > 0) && orders.map(orders =>(
                            <tr key={orders._id}>
                                <td>{orders._id}</td>
                                <td>{orders.date.substring(0,10)}</td>
                                <td>{orders.buyerId}</td>
                                <td>{orders.productId}</td>
                            </tr> 
                        ))}
                        
                    </tbody>
                </table>
                
                
                
            </div>
        </div>
        </>
    );
}