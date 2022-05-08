import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import ProductCart from './ProductCart';

const ProductNewSlider = (props) => {
  return (
    <Swiper
    slidesPerView={2}
    spaceBetween={10}
    // slidesPerGroup={4}
    breakpoints={{
      768: {
        slidesPerView: 3,
        spaceBetween:20
      },
      1024: {
        slidesPerView: 4,
      },
      1280: {
        slidesPerView: 5,
      }
    }}
    loop={true}
    loopFillGroupWithBlank={true}
    navigation={true}
    modules={[Navigation]}
    className="mySwiper"
  >
    {props.productData.getProducts(12).map((item,index) => (
        <SwiperSlide key={index}>
          <ProductCart key={index}
								img01={item.img01}
								img02={item.img02}
								title={item.title}
								price={Number(item.price)}
								subprice={Number(item.subprice)}
								slug={item.slug}/>
        </SwiperSlide>
      ))}
  </Swiper>
  )
}
export default ProductNewSlider