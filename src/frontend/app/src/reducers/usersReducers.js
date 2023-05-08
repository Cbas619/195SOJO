import { ALL_USERS_REQUEST, ALL_USERS_SUCCESS, ALL_USERS_FAIL, CLEAR_ERRORS } from '../constants/userConstants'

export const usersReducers = (state = { users:[] }, action) => {
    switch(action.type) {
        case ALL_USERS_REQUEST:
            return{
                loading: true,
                users: []
            }
        case ALL_USERS_SUCCESS:
            return{
                loading: false,
                users: action.payload
            }
        case ALL_USERS_FAIL:
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