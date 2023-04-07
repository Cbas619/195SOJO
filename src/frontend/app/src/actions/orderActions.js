import axios from 'axios';
import { ALL_ORDERS_REQUEST, ALL_ORDERS_SUCCESS, ALL_ORDERS_FAIL, CLEAR_ERRORS } from '../constants/orderConstants'

export const getOrders = () => async (dispatch) => {
    try {
        
        dispatch({type: ALL_ORDERS_REQUEST })

        const { data } = await axios.get('http://localhost:4000/api/orders/find/642e4234c668c0819f972908')

        dispatch({
            type: ALL_ORDERS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_ORDERS_FAIL,
            payload: error.response.data.message
        })
    }
}

//Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch ({
        type: CLEAR_ERRORS
    })
}