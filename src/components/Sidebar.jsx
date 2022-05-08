import React from 'react'

const Sidebar = (props) => {
	const {sidebarRef,toggle,setToggle,handleSidebar,overplayRef} = props
  return (
    <nav className="sidebar">
		<aside ref={sidebarRef}>
			<div className="sidebar__topbar">
				<p className="sidebar__topbar__menu">
					menu
				</p>
				<i className='sidebar__topbar__close bx bx-x' onClick={() => handleSidebar(setToggle(toggle))}></i>
			</div>
			<ul className="sidebar__menu">
				<li className="sidebar__menu__item">
					<a href="#" className="sidebar__menu__item__link">Trang chủ</a>
				</li>
				<li className="sidebar__menu__item">
					<a href="#" className="sidebar__menu__item__link">Giới thiệu</a>
				</li>
				<li className="sidebar__menu__item">
					<a href="#" className="sidebar__menu__item__link">Sản phẩm<i className='bx bx-chevron-down'></i></a>
				</li>
				<li className="sidebar__menu__item">
					<a href="#" className="sidebar__menu__item__link">ĐỒNG GIÁ<i className='bx bx-chevron-down'></i></a>
				</li>
				<li className="sidebar__menu__item">
					<a href="#" className="sidebar__menu__item__link">Cửa hàng</a>
				</li>
				<li className="sidebar__menu__item">
					<a href="#" className="sidebar__menu__item__link">Hỗ trợ<i className='bx bx-chevron-down'></i></a>
				</li>
				<li className="sidebar__menu__item">
					<a href="#" className="sidebar__menu__item__link">Tuyển dụng</a>
				</li>
				<li className="sidebar__menu__item">
					<a href="#" className="sidebar__menu__item__link">Liên hệ</a>
				</li>
			</ul>
			<div className="sidebar__list">
				<a href="#" className="sidebar__list__link">Tìm kiếm</a>
				<a href="#" className="sidebar__list__link">Giới thiệu</a>
				<a href="#" className="sidebar__list__link">Hướng dẫn đặt hàng online</a>
				<a href="#" className="sidebar__list__link">Hướng dẫn đổi hàng</a>
				<a href="#" className="sidebar__list__link">Chính sách giao hàng  thanh toán</a>
				<a href="#" className="sidebar__list__link">Hướng dẫn chọn size</a>
			</div>
			<div className="sidebar__login">
				<i className='bx bxs-user-circle'></i>
				<span>Đăng nhập</span>
			</div>
			<div className="sidebar__bottom">
				<div className="sidebar__bottom__copyright">
					<p className="copy">Copyright © 2022 <a href="#">Thời Trang </a></p>
					<p className="powered"><a target="_blank" href="#">Powered by slime</a></p>
				</div>
			</div>
		</aside>
		<div className="overplay" ref={overplayRef} onClick={() => handleSidebar(setToggle(toggle))}></div>
	</nav>
  )
}

export default Sidebar