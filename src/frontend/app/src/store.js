import { combineReducers, applyMiddleware, createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'

import { productsReducer } from './reducers/productsReducers'

const reducer = combineReducers({
    products: productsReducer
})

let initialState = {}

const middleware= [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
//const store = configureStore({reducer})
export default store;