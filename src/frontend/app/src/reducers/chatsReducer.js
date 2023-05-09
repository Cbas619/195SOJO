import { ALL_CHATS_REQUEST, ALL_CHATS_SUCCESS, ALL_CHATS_FAIL, CLEAR_ERRORS } from '../constants/chatsConstants'

export const chatsReducer = (state = { chats:[] }, action) => {
    switch(action.type) {
        case ALL_CHATS_REQUEST:
            return{
                chats: [],
                loading: true,
            }
        case ALL_CHATS_SUCCESS:
            return{
                ...state,
                chats: [action.payload],
                loading: false,
                //once API has a route to all orders of a user, then remove brackets
            }
        case ALL_CHATS_FAIL:
            return{
                ...state,
                loading: false,
                error: action.payload,
            }
        case CLEAR_ERRORS:
            return{
                ...state,
                error: null
            }

        default:
            return state;
    }
}