import axios from 'axios';
import { ALL_CHATS_REQUEST, ALL_CHATS_SUCCESS, ALL_CHATS_FAIL, CLEAR_ERRORS } from '../constants/chatsConstants'

export const getChats = (userId) => async (dispatch) => {
    try {
        
        dispatch({type: ALL_CHATS_REQUEST })

        const { data } = await axios.get(`http://localhost:4000/api/chat/${userId}`)

        dispatch({
            type: ALL_CHATS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_CHATS_FAIL,
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