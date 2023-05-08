import { ALL_USER_REQUEST, ALL_USER_SUCCESS, ALL_USER_FAIL, CLEAR_ERRORS } from '../constants/getUserConstants.js'

export const getUserReducer = (state = { user:{} }, action) => {
    switch(action.type) {
        case ALL_USER_REQUEST:
            return{
                loading: true,
                user: {}
            }
        case ALL_USER_SUCCESS:
            return{
                loading: false,
                user: action.payload
            }
        case ALL_USER_FAIL:
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