import React, { useState,useEffect,useCallback } from 'react'
import { Link } from 'react-router-dom'
import category from '../assets/fake-data/category'
import price from '../assets/fake-data/product-price'
import Helmet from '../components/Helmet'
import CheckBox from '../components/CheckBox'
import colors from '../assets/fake-data/product-color'
import size from '../assets/fake-data/product-size'
import productData from '../assets/fake-data/products'
import InfinityList from '../components/InfinityList'
import select from '../assets/fake-data/select-product'
import Button from '../components/Button'
import Breadcrumb from '../components/Breadcrumb'

const Catalog = () => {
	const initFilter = {
        category: [],
		price:[],
        color: [],
        size: [],

    }
	const [toggle1,setToggle1] = useState(false)
	const [toggle2,setToggle2] = useState(false)
	const [ filter ,setFilter] = useState(initFilter)
	const productList = productData.getAllProducts()
	const [products,setProducts] = useState(productList)
	const handleCategory =(category) => {
		setFilter({...filter,category:category})

	}
	const filterSelect = (type,checked,item) => {
		if(checked) {
			switch(type) {
				case "PRICE":
					setFilter({...filter,price:[...filter.price,item.price]})
					break
				case "COLOR":
					setFilter({...filter,color:[...filter.color,item.color]})
					break
				case "SIZE":
					setFilter({...filter,size:[...filter.size,item.size]})
					break
				default:
			}
		}else {
			switch(type) {
				case "PRICE":
					const newPrice = filter.price.filter(e => e !== item.price)
					setFilter({...filter,price:newPrice})
					break
				case "COLOR":
					const newColor = filter.color.filter(e => e !== item.color)
					setFilter({...filter,color:newColor})
					break
				case "SIZE":
					const newSize = filter.size.filter(e => e !== item.size)
					setFilter({...filter,size:newSize})
					break
				default:
			}
		}
	}

	const clearFilter = () => setFilter(initFilter)

	const updateProducts = useCallback(
        () => {
            let temp = productList

            if (filter.price.length > 0) {
                temp = temp.filter(e => filter.price.includes(e.price))
            }

            if (filter.color.length > 0) {
                temp = temp.filter(e => {
                    const check = e.colors.find(color => filter.color.includes(color))
                    return check !== undefined
                })
            }

            if (filter.size.length > 0) {
                temp = temp.filter(e => {
                    const check = e.size.find(size => filter.size.includes(size))
                    return check !== undefined
                })
            }
			if(filter.category.length > 0) {
				temp = temp.filter(e => e.price === filter.category)
			}

            setProducts(temp)
        },
        [filter, productList],
    )

    useEffect(() => {
        updateProducts()
    }, [updateProducts])

	

	return (
		<Helmet title="SẢN PHẨM ">
			<div className="catalog">
				<Breadcrumb/>
				<div className="container">
					<div className="catalog__filter">
						<div className="catalog__filter__widget">
							<div className="catalog__filter__widget__title" onClick={() => setToggle1(!toggle1)}>
								DANH MỤC SẢN PHẨM 
								<i className='bx bx-chevron-down'></i>
							</div>
							<ul className={`catalog__filter__widget__content ${toggle1?"active":""}`}>
								{category.map((item,index) => (
									<li className="catalog__filter__widget__content__item"key={index} onClick={()=> handleCategory(item.categoryPrice)}>
										{item.display}
									</li>
								))}
							</ul>
						</div>
						<div className="catalog__filter__widget">
							<div className="catalog__filter__widget__title" onClick={() => setToggle2(!toggle2)}>
								BỘ LỌC SẢN PHẨM 
								<i className='bx bx-chevron-down'></i>
							</div>
							<div className={`catalog__filter__widget__content ${toggle2?"active":""}`}>
								<div className="catalog__filter__widget__content__title">
									GIÁ SẢN PHẨM +
								</div>
								{price.map((item, index) => (
                                    <div key={index} className="catalog__filter__widget__content__price">
                                        <CheckBox
                                            label={item.display}
                                            onChange={(input) => filterSelect("PRICE", input.checked, item)}
                                            checked={filter.price.includes(item.price)}
                                        />
                                    </div>
                                	))
                            	}
								<div className="catalog__filter__widget__content__title">
									MÀU SẮC +
								</div>
								{colors.map((item, index) => (
                                    <div key={index} className="catalog__filter__widget__content__colors">
                                        <CheckBox
											bg={item.color}
                                            onChange={(input) => filterSelect("COLOR", input.checked, item)}
                                            checked={filter.color.includes(item.color)}
											bgcolor={item.color}
                                        />
                                    </div>
                                	))
                            	}
								<div className="catalog__filter__widget__content__title">
									KÍCH THƯỚC +
								</div>
								{size.map((item, index) => (
                                    <div key={index} className="catalog__filter__widget__content__size">
                                        <CheckBox
                                            text={item.display}
                                            onChange={(input) => filterSelect("SIZE", input.checked, item)}
                                            checked={filter.size.includes(item.size)}
                                        />
                                    </div>
                                	))
                            	}
							</div>
						</div>
						<div className="catalog__filter__widget">
							<div className="catalog__filter__widget__clear" onClick={clearFilter}>
								<Button>xóa bộ lọc</Button>
							</div>
						</div>
					</div>
					<div className="catalog__content">
						<div className="catalog__content__top">
							<span className="catalog__content__top__title">SẢN PHẨM MỚI</span>
							<select className="catalog__content__top__select">
								{select.map((item,index) => (
									<option key={index}>{item.display}</option>
								))}
							</select>
						</div>
						<InfinityList data = {products}/>
					</div>
				</div>
			</div>
		</Helmet>
	)
}

export default Catalog