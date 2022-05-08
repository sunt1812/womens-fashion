import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import numberWithCommas from '../utils/numberWithCommas'

const ProductCart = props => {
	const handlePriceDropped = (price,subprice) => Math.floor((price - subprice) /subprice * 100) + "%"
	return (
		<div className="product-cart">
			<Link to={`/catalog/${props.slug}`}>
				<div className="product-cart__images">
						<img src={props.img01} alt={props.slug} />
						<img src={props.img02} alt={props.slug} />
				</div>
				<div className="product-cart__title">
					{props.title}
				</div>
				<div className="product-cart__price">
					<span className="product-cart__price--price">{numberWithCommas(props.price)}</span>
					<span className="product-cart__price--subprice">{props.subprice ?numberWithCommas(props.subprice): ""}</span>
				</div>
				{props.subprice ? <div className="product-cart__price-dropped">{props.subprice ? handlePriceDropped(props.price,props.subprice):""}</div> :""}
			</Link>
		</div>
	)
}

ProductCart.propTypes = {
    img01: PropTypes.string,
    img02: PropTypes.string,
    title: PropTypes.string,
    slug: PropTypes.string,
    price: PropTypes.number,
    subprice: PropTypes.number,
}

export default ProductCart