import axios from 'axios';
import { ALL_USERS_REQUEST, ALL_USERS_SUCCESS, ALL_USERS_FAIL, CLEAR_ERRORS } from '../constants/userConstants'

export const getUsers = () => async (dispatch) => {
    try {
        
        dispatch({type: ALL_USERS_REQUEST })

        const { data } = await axios.get(`http://localhost:4000/api/user/all`)

        dispatch({
            type: ALL_USERS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_USERS_FAIL,
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