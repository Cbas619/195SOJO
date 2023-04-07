import axios from 'axios';
import { ALL_PRODUCT_REQUEST, ALL_PRODUCT_SUCCESS, ALL_PRODUCT_FAIL, CLEAR_ERRORS } from '../constants/getProductConstants'

export const getProduct = ({productId}) => async (dispatch) => {
    try {
        
        dispatch({type: ALL_PRODUCT_REQUEST })

        const { data } = await axios.get(`http://localhost:4000/api/product/find/${productId}`)

        dispatch({
            type: ALL_PRODUCT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_PRODUCT_FAIL,
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