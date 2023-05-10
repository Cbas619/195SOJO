import axios from 'axios';
import { USER_REQUEST, USER_SUCCESS, USER_FAIL, CLEAR_ERRORS } from '../constants/currentUserConstants'

export const getCurrentUser = () => async (dispatch) => {
    try {
        
        dispatch({type: USER_REQUEST })

        const { data } = await axios.get("http://localhost:4000/api/user/user", {
            withCredentials: true,
          });

        dispatch({
            type: USER_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: USER_FAIL,
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