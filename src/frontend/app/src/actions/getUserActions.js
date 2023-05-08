import axios from 'axios';
import { ALL_USER_REQUEST, ALL_USER_SUCCESS, ALL_USER_FAIL, CLEAR_ERRORS } from '../constants/getUserConstants'

export const getUser = ({userId}) => async (dispatch) => {
    try {
        
        dispatch({type: ALL_USER_REQUEST })

        const { data } = await axios.get(`http://localhost:4000/api/user/user/${userId}`)

        dispatch({
            type: ALL_USER_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_USER_FAIL,
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