import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const BannerSlider = props => {
  return (
    <div className="banner-slider">
        <Swiper 
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper">
          {props.data.map((item,index) => (

          <SwiperSlide key={index}>
            <img src={item.img} alt="" />
          </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}


export default BannerSlider