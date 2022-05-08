import React,{useState} from 'react'
import PropTypes from 'prop-types'
import Button from './Button';
import numberWithCommas from '../utils/numberWithCommas';
import { useDispatch } from 'react-redux';
import { addItem} from '../redux/shopping-cart/cartItemsSlice';


const ProductView = props => {
    const dispatch = useDispatch()
    const product = props.product
    const [previewImg, setPreviewImg] = useState(product.img01);
    const [color,setColor] = useState(undefined)
    const [size,setSize] = useState(undefined)
    const [quantity, setQuantity] = useState(1);


    const check = () => {
        if(color === undefined) {
            alert('Vui lòng chọn màu sắc!')
            return false
        }

        if(size === undefined) {
            alert('Vui lòng chọn kích cỡ!')
            return false
        }
        return true
    }
    
    const updateQuantity = (type) => {
        if(type === "plus") {
            setQuantity(quantity + 1)
        }else {
            setQuantity(quantity - 1 < 1 ? 1: quantity - 1)
        }
    }
    const addToCart = () => {
        let newItem = {
            id:product.id,
            slug: product.slug,
            color: color,
            size: size,
            price: product.price,
            quantity:quantity,
            img:product.img01,
            title:product.title
        }
        if(check()) {
            dispatch(addItem(newItem))
            alert("ban da them san pham vao gio hang")
        }
    }
    return (
        <div className="product">
            <div className="product__images">
                <div className="product__images__list">
                    <div className="product__images__list__item">
                        <img src={product.img01} alt="" onClick={() => setPreviewImg(product.img01)}/>
                    </div>
                    <div className="product__images__list__item">
                        <img src={product.img02} alt="" onClick={() => setPreviewImg(product.img02)} />
                    </div>
                </div>
                <div className="product__images__main">
                    <img src={previewImg} alt="" />
                </div>
            </div>
            <div className="product__info">
                <div className="product__info__title">
                    {product.title}
                </div>
                <div className="product__info__price">
                    {numberWithCommas(product.price)}
                </div>
                <div className="product__info__colors">
                    {product.colors.map((item,index) => (
                        <div key={index} className={`product__info__colors__item bg-${item} ${color === item ? "active" :""}`} onClick={() => setColor(item)}>
                        </div>
                    ))}
                </div>
                <div className="product__info__sizes">
                    {product.size.map((item,index) => (
                        <div  key={index} className={`product__info__sizes__item ${size === item ? "active" :""}`} onClick={() => setSize(item)}>
                            {item}
                        </div>
                    ))}
                </div>
                <div className="product__info__quantity">
                    <div className="product__info__quantity__btn" onClick ={() => updateQuantity("minus")}>
                        <i className="bx bx-minus"></i>
                    </div>
                    <div className="product__info__quantity__input">
                        {quantity}
                    </div>
                    <div className="product__info__quantity__btn" onClick={()=>updateQuantity("plus")}>
                        <i className="bx bx-plus"></i>
                    </div>
                </div>
                <Button onClick={() => addToCart()}>Thêm vào giỏ</Button>
                <div className="product__info__text">
                    <div className="product__info__text__title">
                        Mô tả
                    </div>
                    <p>{product.title}</p>
                    <p>Chất liệu: Xolen tuyết</p>
                    <p>Chiều cao mẫu 1m65</p>
                </div>
            </div>
        </div>
    )
}

ProductView.propTypes = {
    product: PropTypes.object
}

export default ProductView