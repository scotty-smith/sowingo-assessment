import React from 'react'
import { Link } from "react-router-dom";

const NavButton = ({text, image, link, count}) => {
	return (
		<Link to={link} className="nav-button">
			{
				count ? <div className="cart-count">
							<img src={`./assets/${image}`} className='cart'/>
							<div className='bubble'>
								<img src={'./assets/Ellipse.svg'}/>
								<p>{count}</p>
							</div>
						</div>
				: <img src={`./assets/${image}`}/>
			}
			<p>{text}</p>
		</Link>
	)
}

export default NavButton