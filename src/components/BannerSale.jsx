import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const BannerSale = props => {
  return (
    <div className="banner-sale__item">
        <div className="banner-sale__item__images">
            <img src={props.img} alt="" />
        </div>
        <div className="banner-sale__item__content">
            <div className="banner-sale__item__content__subtitle">{props.subtitle}</div>
            <div className="banner-sale__item__content__title">{props.title}</div>
                <Button>{props.desc}</Button>
        </div>
    </div>
  )
}

BannerSale.propTypes = {
    img:PropTypes.string,
    title:PropTypes.string,
    subtitle:PropTypes.string,
    desc:PropTypes.string,
}

export default BannerSale