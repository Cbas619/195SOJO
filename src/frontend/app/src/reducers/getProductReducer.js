import { ALL_PRODUCT_REQUEST, ALL_PRODUCT_SUCCESS, ALL_PRODUCT_FAIL, CLEAR_ERRORS } from '../constants/getProductConstants.js'

export const getProductReducer = (state = { product:{} }, action) => {
    switch(action.type) {
        case ALL_PRODUCT_REQUEST:
            return{
                loading: true,
                product: {}
            }
        case ALL_PRODUCT_SUCCESS:
            return{
                loading: false,
                product: action.payload
            }
        case ALL_PRODUCT_FAIL:
            return{
                loading: false,
                error: action.payload
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