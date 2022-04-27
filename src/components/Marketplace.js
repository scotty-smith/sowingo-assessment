import React, {useEffect, useState} from 'react'
import Header from './Header'
import Products from './Products'
import { getProducts } from '../store/actions/productAction'
import { useDispatch, useSelector } from "react-redux"

const Marketplace = ({filter}) => {

	const dispatch = useDispatch()
	const { all } = useSelector(state=>state.products)

	const favourites = all.filter(p => p.favourite)
	const cart = all.filter(p => p.cart)

	const [query, setQuery] = useState("");

	console.log(query)

	const handleInput = e => {
   		setQuery(e.target.value)
  	}

	useEffect(() => {
		dispatch(getProducts())
	}, [])

	return (
		<div>
			<Header handleInput={handleInput} query={query}/>
			{
				filter === 'favourites' ? <Products productList={favourites} filter={filter} query={query}/> : 
				filter === 'cart' ? <Products productList={cart} filter={filter} query={query}/> : 
				<Products productList={all} query={query}/> 
			}
		</div>
	)
}

export default Marketplace