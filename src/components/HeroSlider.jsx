import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Button from './Button';
const HeroSlider = (props) => {
  return (
    <Swiper
    slidesPerView={1}
    spaceBetween={0}
    // slidesPerGroup={4}
    breakpoints={{
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      }
    }}
    loop={true}
    loopFillGroupWithBlank={true}
    navigation={true}
    modules={[Navigation]}
    className="mySwiper"
  >
    <div className="heroslider">
      {props.data.map((item,index) => (
        <SwiperSlide key={index}>
          <div className="heroslider__item">
            <div className="heroslider__item__images">
              <img src={item.img} alt="" />
            </div>
            <div className="overplay">
              <div className="heroslider__item__content">
                  <h6 className="heroslider__item__content__title">
                    {item.title}
                  </h6>
                  <Link to="/catalog">
                    <Button>xem ngay</Button>
                  </Link>  
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </div>
  </Swiper>
  
  )
}
Button.propTypes = {
  data:PropTypes.array,
  img: PropTypes.string,
  title: PropTypes.string,
  
}
export default HeroSlider