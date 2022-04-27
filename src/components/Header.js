import React from 'react'
import { Link } from "react-router-dom"
import SearchBar from './SearchBar'
import NavButton from './NavButton'
import { useSelector } from "react-redux"

const Header = ({handleInput, query}) => {

	const { all } = useSelector(state=>state.products)

	const cartCount = all.filter(p => p.cart).length

	return (
		<div>
			<div className="header">
		        <Link to="/" className="header-logo">
		          <img src="./assets/sowingo_logo.svg"/>
		        </Link>
     		 </div>
      		<div className="navigation">
        		<div className="separator"/>
		        <SearchBar handleInput={handleInput} query={query}/>
		        <div className="separator"/>
		        <NavButton text="Favourites" image="ic_favorite.svg" link="/favourites" />
		        <div className="separator"/>
		        <NavButton text="Cart" image="button_cart.svg" link="/cart" count={cartCount}/>
		        <div className="separator"/>
      		</div>
		</div>
	)
}

export default Header