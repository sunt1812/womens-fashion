import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import numberWithCommas from '../utils/numberWithCommas'
import { useDispatch } from 'react-redux'
import { removeItem,plusItem, minusItem} from '../redux/shopping-cart/cartItemsSlice'

const CartItem = props => {

   const dispatch = useDispatch()
  return (
    <div className="cart__list__item">
        <div className="cart__list__item__images">
            <img src={props.item.img} alt="" />
        </div>
        <div className="cart__list__item__info">
            <div className="cart__list__item__info__title">
                {props.item.title}
            </div>
            <div className="cart__list__item__info__price">
                {numberWithCommas(props.item.price)}
            </div>
            <div className="cart__list__item__info__size-color">
                {props.item.color} / {props.item.size}
            </div>
            <div className="cart__list__item__info__quantity">
                <div className="cart__list__item__info__quantity__btn" onClick={() => dispatch(minusItem(props.item.id))}>
                    <i className="bx bx-minus"></i>
                </div>
                <div className="cart__list__item__info__quantity__input">
                    {props.item.quantity}
                </div>
                <div className="cart__list__item__info__quantity__btn" onClick={() => dispatch(plusItem(props.item.id))}>
                    <i className="bx bx-plus"></i>
                </div>
            </div>
        </div>
        <div className="cart__list__item__close">
            <div className="cart__list__item__close__icon" onClick={() => dispatch(removeItem(props.item.id))}>x</div>
            <div className="cart__list__item__close__total">{numberWithCommas(props.item.quantity * props.item.price)}</div>
        </div>
    </div>
  )
}

CartItem.propTypes = {}

export default CartItem