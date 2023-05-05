import { ALL_ORDERS_REQUEST, ALL_ORDERS_SUCCESS, ALL_ORDERS_FAIL, CLEAR_ERRORS } from '../constants/orderConstants'

export const ordersReducer = (state = { orders:[] }, action) => {
    switch(action.type) {
        case ALL_ORDERS_REQUEST:
            return{
                orders: [],
                loading: true,
            }
        case ALL_ORDERS_SUCCESS:
            return{
                ...state,
                orders: [action.payload],
                loading: false,
                //once API has a route to all orders of a user, then remove brackets
            }
        case ALL_ORDERS_FAIL:
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