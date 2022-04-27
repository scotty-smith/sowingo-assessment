import { PRODUCTS_GET_SUCCESS, ADD_FAV_SUCCESS, DELETE_FAV_SUCCESS, ADD_CART_SUCCESS, DELETE_CART_SUCCESS } from '../types/productType'

const productState = {
	all : []
}

export const productReducer = (state = productState, action ) => {
	const { type, payload } = action

	if( type === PRODUCTS_GET_SUCCESS ) {
		return{
			...state,
			all : payload.all
			}
	}

	if( type === ADD_FAV_SUCCESS) {
		const index = payload.favourite.index
		state.all[index] = {...state.all[index], favourite: true}

		return{
			...state
		}
	}

	if( type === DELETE_FAV_SUCCESS ) {
		const index = payload.favourite.index
		state.all[index] = {...state.all[index], favourite: false}
		return{
			...state
		}
	}

	if( type === ADD_CART_SUCCESS ) {
		const index = payload.cart.index
		state.all[index] = {...state.all[index], cart: true}
		return{
			...state
		}
	}

	if( type === DELETE_CART_SUCCESS ) {
		const index = payload.cart.index
		state.all[index] = {...state.all[index], cart: false}
		return{
			...state
		}
	}

	return state
}