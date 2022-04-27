import React from 'react'

const SearchBar = ({handleInput, query}) => {
	return (
		<div className="search-bar">
			<img src="./assets/icon.svg"/>
			<form>
				<div className="search-input">
					<input onChange={handleInput} value={query} type="filter" name="filter" placeholder="Search by product name, manufacturer, SKU, keyword..." id="filter" className="form-control"/>
				</div>
			</form>
		</div>
	)
}

export default SearchBar