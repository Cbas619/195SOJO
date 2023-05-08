import { combineReducers, applyMiddleware, createStore } from 'redux';
// import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'

import { productsReducer } from './reducers/productsReducers'
import {ordersReducer} from './reducers/ordersReducer'
import {getProductReducer} from './reducers/getProductReducer'
import {getUserReducer} from './reducers/getUserReducer'
import {usersReducers} from './reducers/usersReducers'

const reducer = combineReducers({
    products: productsReducer,
    orders: ordersReducer,
    product: getProductReducer,
    user: getUserReducer,
    users: usersReducers
})

let initialState = {}

const middleware= [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
//const store = configureStore({reducer})
export default store;