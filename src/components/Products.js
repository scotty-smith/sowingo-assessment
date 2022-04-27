import React, { useEffect } from 'react'
import ProductCard from './ProductCard'

const Products = ({filter, productList, query}) => {

	const queryResult = productList.filter(
    	p => {
      		return (
        		p.name.toLowerCase().includes(query.toLowerCase()) ||
        		p.description.toLowerCase().includes(query.toLowerCase())
      		);
    	}
  	)

	return (
		<div className="products-container">
			{
				filter === 'favourites' ? <p>Favourites</p> :
				filter === 'cart' ? <p>Cart</p> :
				<p>Promos</p>
			}
			<div className="products">
				{
						queryResult.length>0 ? queryResult.map(p => <ProductCard product={p}/> ) : 
							'No products'
				}
			</div>
		</div>
	)
}

export default Products