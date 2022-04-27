import axios from 'axios'
import { PRODUCTS_GET_SUCCESS, ADD_FAV_SUCCESS, DELETE_FAV_SUCCESS, ADD_CART_SUCCESS, DELETE_CART_SUCCESS } from '../types/productType'
const URL = 'https://demo5514996.mockable.io'

export const getProducts = () => async(dispatch) => {

	try {
		const response = await axios.get(`${URL}/products`)
		const products = response.data.hits.map((a, index) => ({name: a.name, image: a.main_image, description: a.description, price: a.vendor_inventory[0].list_price, favourite: false, cart: false, index: index}))
		dispatch({
			type : PRODUCTS_GET_SUCCESS,
			payload : {
				all: products
			}
		})

	} catch (error) {}

}


export const addFavourite = (data) => async(dispatch) => {

	try {
		const response = await axios.post(`${URL}/favorites`)

		dispatch({
			type : ADD_FAV_SUCCESS,
			payload : {
				favourite: data
			}
		})


	} catch (error) {}

}

export const deleteFavourite = (data) => async(dispatch) => {

	try {
		const response = await axios.delete(`${URL}/favorites`)

		dispatch({
			type : DELETE_FAV_SUCCESS,
			payload : {
				favourite: data
			}
		})

	} catch (error) {}

}


export const addCart = (data) => async(dispatch) => {
	console.log('i am here')
		dispatch({
			type : ADD_CART_SUCCESS,
			payload : {
				cart: data
			}
		})

}

export const deleteCart = (data) => async(dispatch) => {
		dispatch({
			type : DELETE_CART_SUCCESS,
			payload : {
				cart: data
			}
		})
}

