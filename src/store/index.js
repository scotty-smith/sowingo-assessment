import { createStore, compose, combineReducers, applyMiddleware } from "redux"

import thunkMiddleWare from 'redux-thunk'

import { productReducer } from './reducers/productReducer'

const rootReducer = combineReducers({
	products : productReducer
})

const middleware = [thunkMiddleWare];

const store = createStore(rootReducer,compose(
		applyMiddleware(...middleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store