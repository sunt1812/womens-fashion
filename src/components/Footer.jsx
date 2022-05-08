import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__item">
          <h5 className="footer__item__title">
          Thời trang Đan Châu
          </h5>
          <p className="footer__item__desc">
          Thời Trang Đan Châu thời trang nữ cao cấp, thời trang công sở nữ, đầm công sở, váy công sở, quần tây và áo vest. Thời trang Đan Châu - rạng ngời vẻ đẹp tự nhiên của bạn.Số đăng ký kinh doanh: 0305665658 do Sở kế hoạch và đầu tư TPHCM cấp.
          </p>
        </div>
        <div className="footer__item">
          <h5 className="footer__item__title">
          Liên kết
          </h5>
          <ul className="footer__item__list">
            <li>
              <a href="#">Tìm kiếm</a>
            </li>
            <li>
              <a href="#">Giới thiệu</a>
            </li>
            <li>
              <a href="#">Hướng dẫn đặt hàng online</a>
            </li>
            <li>
              <a href="#">Hướng dẫn chọn size</a>
            </li>
            <li>
              <a href="#">Chính sách giao hàng  thanh toán</a>
            </li>
            <li>
              <a href="#">Hướng dẫn đổi hàng</a>
            </li>
          </ul>
        </div>
        <div className="footer__item">
          <h5 className="footer__item__title">
          Thông tin liên hệ
          </h5>
          <a href="#">
          CÔNG TY TNHH THỜI TRANG ĐAN CHÂU
          Địa chỉ: 109/12 Bình Quới, Phường 27, Quận Bình Thạnh, TP.HCM.
          </a>
          <a href="#">0937371122</a>
          <a href="#">Chamsockhachhang@danchau.com</a>

        </div>
        <div className="footer__item">
          <h5 className="footer__item__title">
          Fanpage
          </h5>
          <a href="#">
          CÔNG TY TNHH THỜI TRANG ĐAN CHÂU
          Địa chỉ: 109/12 Bình Quới, Phường 27, Quận Bình Thạnh, TP.HCM.
          </a>
          <a href="#">0937371122</a>
          <a href="#">Chamsockhachhang@danchau.com</a>
          
        </div>
      </div>
      <div className="footer-bottom">
        <Link to="/">Copyright © 2022 Thời Trang Đan Châu. Powered by Haravan</Link>
      </div>
    </div>
  )
}

export default Footer