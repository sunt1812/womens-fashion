import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Breadcrumb = props => {
  return (
    <div className="catalog__breadcrumb">
        <div className="container">
            <div className="catalog__breadcrumb__content">
                <Link to="/">Trang chủ  / </Link>
                <Link to="/"> Danh mục  / </Link>
                <Link to="/"> {props.title ? props.title :"san pham"}</Link>
            </div>
        </div>
    </div>
  )
}

Breadcrumb.propTypes = {
   categorySlug:PropTypes.string
}

export default Breadcrumb