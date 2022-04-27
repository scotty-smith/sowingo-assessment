import React, {useState} from 'react'
import { addFavourite, deleteFavourite, addCart, deleteCart } from '../store/actions/productAction'
import { useDispatch, useSelector } from "react-redux"

const ProductCard = ({product}) => {
	const { all } = useSelector(state=>state.products)
	const dispatch = useDispatch()

	const addToFavourites = () => {
			dispatch(addFavourite(product))
	}

	const deleteFromFavourites = () => {
			dispatch(deleteFavourite(product))
	}

	const addToCart = () => {
			dispatch(addCart(product))
	}

	const deleteFromCart = () => {
			dispatch(deleteCart(product))
	}

	return (
		<div className="product-card">
			{
				product.image === null ? <img src='https://thumbs.dreamstime.com/b/image-unavailable-icon-simple-illustration-129166551.jpg'/>
				: <img src={product.image}/>
			}
			<div className="vertical-separator"/>
			<p>{product.name}</p>
			<div className='price'>
				<h2>Your Price</h2>
				<h1>{product.price}</h1>
			</div>
			<div className='favourite-cart-buttons'>
				{
					product.favourite ? 
						<div className='favourite-button' onClick={deleteFromFavourites}>
							<img src="./assets/ic_favorite.svg"/>
						</div>
					:		
						<div className='favourite-button' onClick={addToFavourites}>
							<img src="./assets/ic_favorite_border.svg"/>
						</div>
				}
				{
					product.cart ? 
						<div className='cart-button' onClick={deleteFromCart}>
							Remove from Cart
						</div>
					:
						<div className='cart-button' onClick={addToCart}>
							Add to Cart
						</div> 
				}
			</div>
		</div>
	)
}

export default ProductCard