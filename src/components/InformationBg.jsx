import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const InformationBg = () => {
	return (
		<div className="information__bg">
			<div className="information__bg__images">
				<img src="https://file.hstatic.net/1000249198/file/fashiondesign3_3e5fc928e0fb43c8b94437b908fa4342.jpg" alt="" />
			</div>
			<div className="information__bg__content">
				<h5 className="information__bg__content__title">
				Đôi nét về Thời Trang Đan Châu
				</h5>
				<Link to="/catalog">
                    <Button>xem ngay</Button>
                </Link>  
			</div>
		</div>
	)
}

export default InformationBg