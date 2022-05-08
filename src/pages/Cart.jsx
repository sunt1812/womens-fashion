import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Breadcrumb from '../components/Breadcrumb'
import Button from '../components/Button'
import CartItem from '../components/CartItem'
import Helmet from '../components/Helmet'
import { getTotals } from '../redux/shopping-cart/cartItemsSlice'
import numberWithCommas from '../utils/numberWithCommas'

const Cart = () => {
  const cartItems = useSelector(state => state.cartItems.value)
  const total = useSelector(state => state.cartItems.total)
  const dispatch = useDispatch()
  useEffect(() => {
	dispatch(getTotals())
  },[cartItems])
  return (
    <Helmet title="Giỏ hàng">
		<div className="cart">
			<Breadcrumb/>
			<div className="container">
				<div className="cart__info">
					<div className="cart__info__title">
						Giỏ hàng của bạn
					</div>
					<p className="cart__info__desc">
						Có 10 sản phẩm trong giỏ hàng
					</p>
					<div className="cart__info__hr"></div>
				</div>
				<div className="cart__list">
					{cartItems.map((cartItem,index) => (
						<CartItem key={index} item={cartItem} />
					))}
				</div>
				<div className="cart__bottom">
					<div className="cart__bottom__form">
						<textarea name="" id="" cols="30" rows="10" placeholder="Ghi Chu"></textarea>
					</div>
					<div className="cart__bottom__oder">
						<div className="cart__bottom__oder__total">
							Tổng tiền:  <span> {numberWithCommas(total)}</span>
						</div>
						<div className="cart__bottom__oder__btn">
							<Button size={"sm"}>Tiếp tục mua hàng</Button>
							<Button size={"sm"}>Cập nhật</Button>
							<Button size={"sm"}>Thanh toán</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
    </Helmet>
  )
}

export default Cart