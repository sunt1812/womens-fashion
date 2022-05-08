import React from 'react'
import Button from './Button'

const Contact = () => {
  return (
    <div className="contact">
        <div className="container">
            <div className="contact__email">
                <h5>Đăng kí nhận tin</h5>
            </div>
            <div className="contact__input-group">    
                <input required="" placeholder="Nhập email của bạn" />
                <Button>Đăng kí</Button>
            </div>
            <div className="contact__phone">
                <i className='bx bxs-phone'></i>
                <span>Hỗ trợ / Mua hàng:</span>
                <span className="contact__phone__number">0937371122</span>
            </div>
        </div>
    </div>
  )
}

export default Contact