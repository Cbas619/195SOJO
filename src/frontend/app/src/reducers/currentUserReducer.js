import { USER_REQUEST, USER_SUCCESS, USER_FAIL, CLEAR_ERRORS } from '../constants/currentUserConstants.js'

export const currentUserReducer = (state = { user:{} }, action) => {
    switch(action.type) {
        case USER_REQUEST:
            return{
                loading: true,
                user: {}
            }
        case USER_SUCCESS:
            return{
                loading: false,
                user: action.payload
            }
        case USER_FAIL:
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