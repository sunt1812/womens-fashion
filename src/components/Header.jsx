import React, { useRef ,useEffect,useState} from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
const menuItem = [
	{
		display:"TRANG CHỦ",
		path:"/"
	},
	{
		display:"GIỚI THIỆU",
		path:"/"
	},
	{
		display:"SẢN PHẨM ",
		path:"/",
		icon:<i className='bx bx-chevron-down'></i>
	},
	{
		display:"ĐỒNG GIÁ",
		path:"/",
		icon:<i className='bx bx-chevron-down'></i>
	},
	{
		display:"Cửa hàng",
		path:"/"
	},
	{
		display:"Hỗ trợ",
		path:"/",
		icon:<i className='bx bx-chevron-down'></i>
	},
	{
		display:"Tuyển dụng",
		path:"/"
	},
	{
		display:"Liên hệ",
		path:"/"
	}
]

const Header = () => {
	const quantity = useSelector(state => state.cartItems.quantity)
	console.log(quantity)
	const [toggle,setToggle] = useState(false)
	const sidebarRef = useRef(null)
	const overplayRef = useRef(null)
	const headerRef = useRef(null)
	const midMobileRef = useRef(null)
	const handleSidebar = () => {
		setToggle(prev => {
			if (prev) {
				sidebarRef.current.style.transform = "translateX(0)"
				overplayRef.current.style.visibility = "visible"
			}else {
				sidebarRef.current.style.transform = "translateX(100%)"
				overplayRef.current.style.visibility = "hidden"
			}
		})
	}
	useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
                headerRef.current.classList.add('shrink')
                midMobileRef.current.classList.add('header__mid-mobile')
            } else {
                headerRef.current.classList.remove('shrink')
                midMobileRef.current.classList.remove('header__mid-mobile')
            }
        })
        return () => {
            window.removeEventListener("scroll")
        };
    }, []);
	return (
		<header>
			<div className="topbar">
				<div className="container">
					<p className="topbar__desc">
						Mua hàng ngay giao liền tay! Miễn phí vận chuyển với đơn hàng trên 300.000 đ (HOTLINE 0937371122). Hỗ trợ đổi hàng trong vòng 8 ngày (hàng sale không áp dụng).
					</p>
				</div>
			</div>
			<div className="header" ref={headerRef}>
				<div className="container">
					<div className="header__mid "ref={midMobileRef}>
						<div className="header__mid__visible"></div>
						<div className="header__mid__logo">
							<a className="logo" href="#">womens fashion</a>
						</div>
						<ul className="header__mid__icon">
							<li className="header__mid__icon__item ">
								<Link to="/" className="header__mid__icon__link header__mid__icon__user">
									<i className='bx bxs-user-circle'></i>
									Tài khoản
								</Link>
							</li>
							<li className="header__mid__icon__item ">
								<Link to="/" className="header__mid__icon__link header__mid__icon__search">
									<i className='bx bx-search'></i>
									Tìm sản phẩm
								</Link>
							</li>
							<li className="header__mid__icon__item">
								<Link to="/cart" className="header__mid__icon__link header__mid__icon__shopping">
									<i className='bx bx-shopping-bag'></i>
									<span className="header__mid__icon__shopping__quantity">{quantity}</span>
									<span>Giỏ hàng</span>
								</Link>
							</li>
							<li className="header__mid__icon__item header__mid__icon__bar" onClick={() => handleSidebar(setToggle(!toggle))}>
								<Link to="/" className="header__mid__icon__link">
									<span></span>
									<p>Menu</p>
								</Link>
							</li>
						</ul>
					</div>
					<div className="header__menu">
						<ul className="header__menu__list">
							{menuItem.map((item,index) => (
								<li className="header__menu__list__item" key={index}>
									<Link to={item.path} className="header__menu__list__link">
										{item.display}
										{item.icon}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div className="header-menu">
						<div className="container">
							<div className="header-menu__desktop">
								<div className="header__mid__logo">
									<Link className="logo" to="/">womens fashion</Link>
								</div>
								<ul className="header__menu__list">
									{menuItem.map((item,index) => (
										<li className="header__menu__list__item" key={index}>
											<Link to={item.path} className="header__menu__list__link">
												{item.display}
												{item.icon}
											</Link>
										</li>
									))}
								</ul>
								<ul className="header__mid__icon">
									<li className="header__mid__icon__item">
										<Link to="/" className="header__mid__icon__link">
											<i className='bx bxs-user-circle'></i>
										</Link>
									</li>
									<li className="header__mid__icon__item  header__mid__icon__search">
										<Link to="/" className="header__mid__icon__link">
											<i className='bx bx-search'></i>
										</Link>
									</li>
									<li className="header__mid__icon__item">
										<Link to="/cart" className="header__mid__icon__link header__mid__icon__shopping">
											<i className='bx bx-shopping-bag'></i>
											<span className="header__mid__icon__shopping__quantity shrink">{quantity}</span>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Sidebar sidebarRef={sidebarRef} toggle={toggle} setToggle={setToggle} handleSidebar={handleSidebar} overplayRef={overplayRef}/>
		</header>
	)
}

export default Header